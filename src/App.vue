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
$cjknormal: #14A338;
$cjknormal-invert: findColorInvert($cjknormal);
$cjkstrong: #993333;
$cjkstrong-invert: findColorInvert($cjkstrong);


// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "cjknormal": ($cjknormal, $cjknormal-invert),
    "cjkstrong": ($cjkstrong, $cjkstrong-invert)
);

// Links
$link: $cjknormal;
$link-invert: $cjknormal-invert;
$link-focus-border: $cjknormal;

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
