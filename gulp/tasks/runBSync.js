var browserSync = require("browser-sync").create();

function runBSync(done) {
  browserSync.init({
    // notify: {
    //   styles: {
    //     top: "auto",
    //     bottom: "0",
    //     margin: "0px",
    //     padding: "5px",
    //     position: "fixed",
    //     fontSize: "12px",
    //     zIndex: "9999",
    //     borderRadius: "5px 0px 0px",
    //     color: "white",
    //     textAlign: "center",
    //     display: "block",
    //     backgroundColor: "rgba(27, 32, 50, 0.7)"
    //   }
    // },
    // ws: true,
    //		injectChanges: true,
    //reloadOnRestart: false,
    online: false,
    notify: true,
    watch: true,
    open: false,
    reloadDelay: 0,
    reloadDebounce: 0,
    reloadOnRestart: true,
    injectChanges: true,
    minify: false,
    server: {
      baseDir: ".",
      index: "index.html",
      directory: false,
    },
    port: 3000,
    cors: true,
    //	files: [ 'static/**/*.css', 'static/**/*.js' ],
    proxy: undefined
  });
  done();
}

module.exports = runBSync;
module.exports.instance = browserSync;
