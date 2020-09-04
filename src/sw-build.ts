//@ts-ignore
const workboxBuild = require("workbox-build");
const path = require("path");

const buildSW = () => {
  // This will return a Promise
  return (
    workboxBuild
      .injectManifest({
        swSrc: path.resolve(__dirname, "sw-template.ts"), // this is your sw template file
        swDest: path.resolve(__dirname, "../build/sw.js"), // this will be created in the build step
        globDirectory: "build",
        globPatterns: [
          "**/!(service-worker|precache-manifest.*).{js,css,html,png,svg}",
        ],
      })
      //@ts-ignore
      .then(({ count, size, warnings }) => {
        // Optionally, log any warnings and details.
        warnings.forEach(console.warn);
        console.log(
          `${count} files will be precached, totaling ${size} bytes.`
        );
      })
  );
};
buildSW();
