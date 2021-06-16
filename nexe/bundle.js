// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compile } = require("nexe");

compile({
  // build: true, // required to use patches, will build from source
  input: "../file-interactor.js",
  output: "./dist/file-interactor",
  // binary creation walks the node require and "treeshakes"
  resources: [],
})
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    throw new Error(e);
  });
