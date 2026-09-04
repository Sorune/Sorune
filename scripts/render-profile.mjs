import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ko from '../profile/content.ko.mjs';
import en from '../profile/content.en.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const facts = JSON.parse(fs.readFileSync(path.join(root, 'profile/facts.json'), 'utf8'));

function valueAt(key) {
  return key.split('.').reduce((value, part) => value?.[part], facts);
}

function render(template) {
  return template.replace(/\{\{([\w.]+)\}\}/g, (_, key) => {
    const value = valueAt(key);
    if (value === undefined) throw new Error(`Unknown profile fact: ${key}`);
    return String(value);
  });
}

function readPartial(name) {
  return fs.readFileSync(path.join(root, 'profile/partials', name), 'utf8').trim();
}

function enrichReadme(template, locale) {
  const intro = readPartial(`INTRO.${locale}.md`);
  const stack = readPartial('STACK.md');
  const aiProject = readPartial(`AI_PUBLIC_PROJECT.${locale}.md`);

  let enriched = template.replace(
    'Public      grid-masonry',
    'Public      grid-masonry · workspace-ops-public',
  );

  enriched = enriched.replace(
    '## 🚀 Selected Work',
    `${intro}\n\n## 🚀 Selected Work`,
  );

  enriched = enriched.replace(
    /(- \*\*\[grid-masonry\]\([^\n]+\)[^\n]*\n)/,
    `$1${aiProject}\n`,
  );

  enriched = enriched.replace(
    /## 🛠 Stack\n[\s\S]*?\n---/,
    `${stack}\n\n---`,
  );

  if (locale === 'en') {
    enriched = enriched.replace(
      '> The AI has seen a long trail of real development work — including the parts that failed and had to be repaired.',
      '> AI has reviewed a long trail of real development work — including the parts that failed and had to be repaired.',
    );
  }

  return enriched;
}

function enrichExperience(template, locale) {
  const legacy = readPartial(`EXPERIENCE_LEGACY.${locale}.md`);

  return template.replace(
    '## Production Web',
    `${legacy}\n\n---\n\n## Production Web`,
  );
}

function enrichAiWorkflow(template, locale) {
  const publicWorkflow = readPartial(`AI_WORKFLOW_PUBLIC.${locale}.md`);

  return template.replace(
    '## Development History Disclosure',
    `${publicWorkflow}\n\n## Development History Disclosure`,
  );
}

const generatedHeader = '<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->\n\n';
const outputs = [
  ['README.md', enrichReadme(ko.readme, 'ko')],
  ['README.en.md', enrichReadme(en.readme, 'en')],
  ['docs/PROJECTS.md', ko.projects],
  ['docs/PROJECTS.en.md', en.projects],
  ['docs/HOMELAB.md', ko.homelab],
  ['docs/HOMELAB.en.md', en.homelab],
  ['docs/EXPERIENCE.md', enrichExperience(ko.experience, 'ko')],
  ['docs/EXPERIENCE.en.md', enrichExperience(en.experience, 'en')],
  ['docs/AI_WORKFLOW.md', enrichAiWorkflow(ko.aiWorkflow, 'ko')],
  ['docs/AI_WORKFLOW.en.md', enrichAiWorkflow(en.aiWorkflow, 'en')]
];

for (const [target, template] of outputs) {
  const destination = path.join(root, target);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, generatedHeader + render(template).trimEnd() + '\n', 'utf8');
  console.log(`rendered ${target}`);
}
