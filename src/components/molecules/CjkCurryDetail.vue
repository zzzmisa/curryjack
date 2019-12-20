<template>
  <div>
    <a class="box" :href="curry.source" target="_blank">
      <figure class="image is-3by2">
        <div class="section">
          <p class="title">{{curry.price.toLocaleString()}}{{ $t('yen') }}</p>
          <p class="subtitle">{{curry.label}}</p>
          <p class="has-text-weight-bold">{{curry.restaurant}}</p>
          <p>{{curry.pref}} {{curry.city}}</p>
        </div>
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CjkCurryDetail',

  props: {
    curry: {
      type: Object
    },
    tag: {
      type: String
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);

.box {
  padding: 8px;
  margin: 0px 0px 8px 0px;
}

figure {
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.section {
  padding: 1rem 1.5rem;

  /* 中央寄せ */
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

p {
  /* 省略表示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  font-family: "M PLUS Rounded 1c", sans-serif;
}

.subtitle {
  font-family: "M PLUS Rounded 1c", sans-serif;
}
</style>

<i18n>
{
  "ja": {
    "yen": "円"
  },
  "en": {
    "yen": " yen"
  }
}
</i18n>
