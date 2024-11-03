import { buildApp } from "sfha-builder";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_TO_APP = path.resolve(__dirname, "../../app");

console.log("Building app at", PATH_TO_APP);

buildApp({
  viteProjectPath: PATH_TO_APP,
  dbData: { msg: "Hello from the demo builder!" },
}).then((output: string) => {
  // write the output to a file
  console.log("Writing output to index.html");
  const outputPath = path.resolve(__dirname, "../index.html");
  console.log("Output path:", outputPath);
  fs.writeFileSync(outputPath, output);
});
