import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export function getPackageNames(root: string): string[] {
  const packageNames: string[] = [];

  function findPackageJson(dir: string) {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.name === "node_modules") {
        continue;
      }

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        findPackageJson(fullPath);
      } else if (entry.isFile() && entry.name === "package.json") {
        try {
          const packageJson = readFileSync(fullPath, "utf8");
          const parsed = JSON.parse(packageJson) as { name: string };
          if (parsed.name) {
            packageNames.push(parsed.name);
          }
        } catch (error) {
          console.error(`Error reading or parsing ${fullPath}:`, error);
        }
      }
    }
  }

  findPackageJson(path.resolve(root));
  return packageNames;
}
