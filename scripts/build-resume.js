import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resume = JSON.parse(await readFile(path.join(root, "data/resume.json"), "utf8"));
const stylesheet = await readFile(path.join(root, "site/styles.css"), "utf8");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

const skills = resume.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
const projects = resume.projects.map((project, index) => `
  <article class="project">
    <p class="index">0${index + 1}</p>
    <div>
      <p class="label">${escapeHtml(project.label)}</p>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <ul class="stack">${project.stack.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  </article>`).join("");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(resume.name)} — ${escapeHtml(resume.headline)}">
  <title>${escapeHtml(resume.name)} — Resume</title>
  <style>${stylesheet}</style>
</head>
<body>
  <main>
    <header class="hero">
      <p class="eyebrow">ENGINEERING PORTFOLIO / 2026</p>
      <h1>${escapeHtml(resume.name)}</h1>
      <p class="headline">${escapeHtml(resume.headline)}</p>
      <p class="summary">${escapeHtml(resume.summary)}</p>
      <p class="links"><a href="mailto:${escapeHtml(resume.links.email)}">${escapeHtml(resume.links.email)} ↗</a><a href="${escapeHtml(resume.links.portfolio)}">Live portfolio ↗</a><a href="${escapeHtml(resume.links.github)}">GitHub ↗</a></p>
    </header>
    <section>
      <p class="eyebrow">TECHNICAL TOOLKIT</p>
      <ul class="skills">${skills}</ul>
    </section>
    <section class="project-section">
      <div class="section-intro"><p class="eyebrow">SELECTED PRODUCTS</p><h2>Systems built around real operational decisions.</h2></div>
      <div class="projects">${projects}</div>
    </section>
    <footer><p>Generated from <code>data/resume.json</code> using the repository&apos;s zero-dependency build script.</p></footer>
  </main>
</body>
</html>`;

await mkdir(path.join(root, "dist"), { recursive: true });
await writeFile(path.join(root, "dist/index.html"), html);
console.log("Built dist/index.html from data/resume.json");
