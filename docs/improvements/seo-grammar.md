# SEO & Grammar Checking with Playwright
This page is an excerpt from ChatGPT that outlines how we can make use of other tools to check SEO and grammar in our e2e tests.

## SEO auditing / best-practice checks with Playwright

These are relatively more mature integrations; here’s how people typically combine SEO checks with Playwright:

### 1. Lighthouse + Playwright

One popular pattern is to run Lighthouse audits from your Playwright tests. Lighthouse supports SEO, accessibility, performance, and best practices checks, so you can surface SEO violations programmatically.
	•	There’s an npm package playwright-lighthouse (or similar wrappers) that helps integrate Lighthouse audits inside Playwright tests. For example, you launch a browser with remote debugging and run playAudit(...) on a page object.  ￼
	•	In blog posts, people show how to wrap a Playwright page load and then audit SEO metrics (meta tags, link tags, canonical, etc.) using Lighthouse under the hood.  ￼
	•	One article shows a pattern like:

```typescript
import { playAudit } from 'playwright-lighthouse';
import { test } from '@playwright/test';

test('SEO audit', async ({ page }) => {
  await page.goto('/some-path');
  await playAudit({
    page,
    thresholds: { seo: 50 },
    reports: { html: true, json: true },
    port: 9222
  });
});
```

That integrates Lighthouse checks into your E2E suite.  ￼

This approach gives you SEO scores, flag violations (missing title, meta description, broken links, etc.), and lets you enforce thresholds.

### 2. Meta / tag / HTML structure assertions

Aside from audits, you can directly assert SEO-relevant DOM aspects in your Playwright tests:
	•	Check title, meta[name="description"], canonical link presence / correctness. E.g.:
```typescript
await page.goto('/some-page');
const title = await page.title();
expect(title).toMatch(/Some expected pattern/);

const desc = page.locator('meta[name="description"]');
await expect(desc).toHaveAttribute('content', /expected text/);

const canonical = page.locator('link[rel="canonical"]');
await expect(canonical).toHaveAttribute('href', page.url());
```
This is more manual but gives precise control. (Such patterns are used by devs testing SEO head components)  ￼

	•	You can also check for presence of hreflang, og:* tags, robots meta, structured data (```<script type="application/ld+json">```) etc.

These manual checks complement Lighthouse (which may not catch every custom SEO rule you care about).

⸻

## Spelling / grammar checking in tests

This area is less “off the shelf” in testing suites, but you can build or integrate custom solutions. Here are approaches and considerations:

### 1. Use a spell/grammar library on extracted text

You can write a helper that:
	1.	Uses Playwright to extract visible text content (headings, paragraphs, alt attributes, etc.) from the page.
	2.	Passes those text strings into a spell/grammar checking library or API.
	3.	Fails the test if errors are detected beyond some threshold.

Libraries/APIs you might use:
	•	LanguageTool — open source grammar/spell checker with an HTTP API. You could run a local instance or use a hosted API to check sentences.
	•	Grammarly API (if available) or analogous commercial APIs.
	•	OpenAI / GPT — prompt an LLM to “check grammar/spelling / suggest corrections” for a given text snippet (though you’d need to guard cost, rate limits, false positives).
	•	Use a Node.js grammar checker library (though many are not very mature). For example, people build custom “grammar checking” microservices via GCP’s NLP APIs.  ￼

Example sketch:
```typescript
import { test, expect } from '@playwright/test';
import { checkGrammar } from './grammarHelper';

test('check spelling / grammar in hero copy', async ({ page }) => {
  await page.goto('/about-us');
  const hero = await page.locator('h1, p').allTextContents();  // or pick specific zones
  const combined = hero.join(' ');
  const issues = await checkGrammar(combined);
  expect(issues).toEqual([]);  // or a threshold
});

checkGrammar(...) might call LanguageTool REST API or your own wrapper over an AI grammar model.
```

### 2. Use browser spellcheck / disabling it in tests

One wrinkle: browsers often have built-in spellcheck in editable fields, which might show underlines (red squiggles) that contaminate screenshots comparisons. Some users have tried disabling spellcheck in tests.
	•	There’s a GitHub issue in Playwright about wanting an ability to disable browser spellcheck (especially in Firefox) for tests so screenshot diffs don’t pick up underlines.  ￼
	•	Some people disable spellcheck via CSS / attributes on inputs (spellcheck="false") or injecting a user preference in the test browser context. But this is more of a hack than a standard plugin.

Thus, for text content verification, you’re better off extracting text and checking it via a grammar/spell tool, rather than relying on the browser’s built-in spellchecker UI.

⸻

## Putting it all together: example integration

Here’s a rough structure you could adopt in your Playwright-based test suite:
```bash
e2e/
  tests/
    seo.spec.ts
    grammar.spec.ts
  utils/
    seoHelpers.ts
    grammarHelper.ts
  playwright.config.ts
```

### seo.spec.ts
```typescript
import { test, expect } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import { assertMetaTags } from '../utils/seoHelpers';

test('SEO baseline + meta assertions', async ({ page }) => {
  await page.goto('/some-page');
  // Run Lighthouse SEO audit
  await playAudit({
    page,
    thresholds: { seo: 80 },
    reports: { html: true, json: true },
    port: 9222
  });

  // Custom SEO assertions
  await assertMetaTags(page, {
    expectedTitle: /My Page/,
    expectedDescription: /some description/,
    requireCanonical: true
  });
});
```

### grammar.spec.ts
```typescript
import { test, expect } from '@playwright/test';
import { checkGrammar } from '../utils/grammarHelper';

test('page copy has no glaring grammar issues', async ({ page }) => {
  await page.goto('/about-us');
  const textContents = await page.locator('article, .content, h1, p').allTextContents();
  const combined = textContents.join(' ');
  const issues = await checkGrammar(combined);
  expect(issues).toHaveLength(0);  // or ≤ some threshold
});
```


### grammarHelper.ts (sketch)
```typescript
export async function checkGrammar(text: string): Promise<GrammarIssue[]> {
  // Example: call LanguageTool or another API
  const resp = await fetch('http://localhost:8081/v2/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: 'en-US',
      text
    })
  });
  const body = await resp.json();
  return body.matches || [];  // or map to your internal shape
}
```
