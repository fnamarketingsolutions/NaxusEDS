import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "..", "src");

const SKIP = new Set([
  "SectionReveal.jsx",
  "Navbar.jsx",
  "Footer.jsx",
  "App.jsx",
  "main.jsx",
]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".jsx")) files.push(full);
  }
  return files;
}

function addMotion(filePath) {
  const name = path.basename(filePath);
  if (SKIP.has(name)) return false;
  if (filePath.includes(`${path.sep}policies${path.sep}`)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("framer-motion") || content.includes("SectionReveal")) return false;

  const importLine = 'import SectionReveal from "../../components/SectionReveal";\n';
  const depth = filePath.split(path.sep).filter((p) => p === "src").length;
  const relDepth = filePath.split(path.sep).indexOf("src");
  const segments = filePath.split(path.sep).slice(relDepth + 1, -1);
  const up = segments.map(() => "..").join("/") || ".";
  const motionImport = `import SectionReveal from "${up === "." ? "./components/SectionReveal" : `${up}/components/SectionReveal`}";\n`;

  if (!content.includes("import SectionReveal")) {
    const firstImport = content.match(/^import .+$/m);
    if (firstImport) {
      content = content.replace(firstImport[0], `${firstImport[0]}\n${motionImport.trim()}`);
    } else {
      content = motionImport + content;
    }
  }

  let count = 0;
  content = content.replace(/<section(\s)/g, (_, sp) => {
    count++;
    return `<SectionReveal as="section"${sp}`;
  });
  content = content.replace(/<\/section>/g, "</SectionReveal>");

  if (count === 0) {
    content = content.replace(/<div className="([^"]*w-full[^"]*)"/, '<SectionReveal as="div" className="$1"');
    if (content.includes("<SectionReveal")) {
      const idx = content.lastIndexOf("</div>");
      if (idx !== -1) content = content.slice(0, idx) + "</SectionReveal>" + content.slice(idx + 6);
    }
  }

  if (count > 0 || content.includes("SectionReveal")) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

const files = walk(srcDir);
let updated = 0;
for (const f of files) {
  if (addMotion(f)) {
    updated++;
    console.log("updated:", path.relative(srcDir, f));
  }
}
console.log(`Done. ${updated} files updated.`);
