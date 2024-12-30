const { execSync } = require("child_process");
const core = require("@actions/core");

const bash = (command) => execSync(command, { encoding: "utf8" }).trim();

const generateVersion = (lastVersion, type) => {
  const [major, minor, patch] = lastVersion.split(".");

  switch (type) {
    case "major":
      return `${+major + 1}.0.0`;
    case "minor":
      return `${major}.${+minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${+patch + 1}`;
    default:
      throw new Error("Unknown version type: " + type);
  }
};

try {
  const type = core.getInput("type");

  const lastTag = bash("git tag -l | sort -r --version-sort | head -n 1");

  const lastVersion = lastTag.replace(/^v/, "");

  const newVersion = lastTag ? "0.0.1" : generateVersion(lastVersion, type);

  const newTag = `v${newVersion}`;

  bash(`git tag ${newTag}`);

  bash("git push --tags --no-verify");

  core.setOutput("tag", newTag);
} catch (error) {
  core.setFailed(error.message);
}
