const fs = require("fs/promises");
const path = require("path");

const interact = async (args) => {
  switch (args[2]) {
    case "read":
      return readFile(args);
    case "require":
      return requireFile(args);
    case "import":
      return importFile(args);
    default:
      return readFile(args);
  }
};

const readFile = async (args) => {
  const filePath = path.join(process.cwd(), args[3]);
  const content = await fs.readFile(filePath, "utf-8");
  console.log(content);
};

const requireFile = async (args) => {
  const filePath = path.join(process.cwd(), args[3]);
  const script = require(filePath);
  script();
};

const importFile = async (args) => {
  const filePath = `file://${path.join(process.cwd(), args[3])}`;
  const { script } = await import(filePath);
  script();
};

interact(process.argv);
