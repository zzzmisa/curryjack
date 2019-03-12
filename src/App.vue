<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
//ーーー buefy カスタマイズここから ---
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$cjklight: #F7F6E0;
$cjklight-invert: findColorInvert($cjklight);
$cjknormal: #14A338;
$cjknormal-invert: findColorInvert($cjknormal);
$cjkstrong: #993333;
$cjkstrong-invert: findColorInvert($cjkstrong);
$cjktwitter: #55acee;
$cjktwitter-invert: findColorInvert($cjktwitter);
$cjkfacebook: #315096;
$cjkfacebook-invert: findColorInvert($cjkfacebook);
$cjkline: #00c300;
$cjkline-invert: findColorInvert($cjkline);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "cjklight": ($cjklight, $cjklight-invert),
    "cjknormal": ($cjknormal, $cjknormal-invert),
    "cjkstrong": ($cjkstrong, $cjkstrong-invert),
    "cjktwitter": ($cjktwitter, $cjktwitter-invert),
    "cjkfacebook": ($cjkfacebook, $cjkfacebook-invert),
    "cjkline": ($cjkline, $cjkline-invert)
);

// Links
$link: $cjknormal;
$link-invert: $cjknormal-invert;
$link-focus-border: $cjknormal;

// Section
$section-padding: 1.5rem 1.5rem;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
//ーーー buefy カスタマイズここまで ---

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F7F6E0;
}

</style>
