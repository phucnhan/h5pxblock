try {
  (function (require) {
    require.config({
      paths: {
        h5p: "https://h5pjs-css-cdn.vercel.app/dist/main.bundle1",
      },
    });
  }).call(this, require || RequireJS.require);
} catch (e) {
  console.log("Unable to load h5p-standalone via requirejs");
}
