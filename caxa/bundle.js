const caxa = require("caxa").default;
const os = require("os");

let ext;
switch (os.platform()) {
  case "win32":
    ext = ".exe";
    break;
  case "darwin":
    ext = ".app";
    break;
  default:
    ext = "";
    break;
}
(async () => {
  await caxa({
    input: "./file-interactor",
    output: `./dist/file-interactor${ext}`,
    command: ["{{caxa}}/node_modules/.bin/node", "{{caxa}}/index.js"],
  });
})();
