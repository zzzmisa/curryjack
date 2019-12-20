<template>
  <div>
    <div v-if="total === cjscore">
      <img :alt="$t('perfect')" src="@/assets/perfect.png">
      <p class="has-text-weight-bold is-size-1 title">{{ $t('perfect') }}</p>
      <p class="is-size-3">{{ $t('totalMsg', { total: total.toLocaleString() }) }}</p>
      <p class="is-size-3">{{ $t('amazing') }}</p>
    </div>
    <div v-else-if="total > cjscore">
      <img :alt="$t('bust')" src="@/assets/out.png">
      <p class="has-text-weight-bold is-size-1 title">{{ $t('bust') }}</p>
      <p class="is-size-3">{{ $t('totalMsg', { total: total.toLocaleString() }) }}</p>
      <p class="is-size-3">
        {{ $t('bustMsg', { cjscore: cjscore.toLocaleString(), over: (total - cjscore).toLocaleString() }) }}
      </p>
    </div>
    <div v-else-if="total > cjscore-1000">
      <img :alt="$t('bitMore')" src="@/assets/more.png">
      <p class="has-text-weight-bold is-size-1 title">{{ $t('bitMore') }}</p>
      <p class="is-size-3">{{ $t('totalMsg', { total: total.toLocaleString() }) }}</p>
      <p class="is-size-3">
        {{ $t('bitMoreMsg', { cjscore: cjscore.toLocaleString(), left: (cjscore - total).toLocaleString() }) }}
      </p>
    </div>
    <div v-else>
      <img :alt="$t('notEvenClose')" src="@/assets/hungry.png">
      <p class="has-text-weight-bold is-size-1 title">{{ $t('notEvenClose') }}</p>
      <p class="is-size-3">{{ $t('totalMsg', { total: total.toLocaleString() }) }}</p>
      <p class="is-size-3">
        {{ $t('notEvenCloseMsg', { cjscore: cjscore.toLocaleString(), left: (cjscore - total).toLocaleString() }) }}
      </p>
    </div>
  </div>
</template>

<script>
import config from '@/constants/config.js'

export default {
  name: 'CjkResult',

  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      cjscore: config.cjscore
    }
  }
}
</script>

<i18n>
{
  "ja": {
    "perfect": "ピッタリ！！",
    "amazing": "素晴らしい！！",
    "bust": "アウト！！",
    "bustMsg": "{cjscore}円を{over}円オーバー",
    "bitMore!": "もう少し！！",
    "bitMoreMsg": "{cjscore}円まであと{left}円",
    "notEvenClose": "まだまだ！！",
    "notEvenCloseMsg": "{cjscore}円まであと{left}円",
    "totalMsg": "合計{total}円"
  },
  "en": {
    "perfect": "Perfect!!",
    "amazing": "Amazing!!",
    "bust": "Bust!!",
    "bustMsg": "Your score is {over} yen over {cjscore} yen",
    "bitMore": "Just a little bit more!!",
    "bitMoreMsg": "You need {left} yen more up to {cjscore} yen",
    "notEvenClose": "Not even close!!",
    "notEvenCloseMsg": "You need {left} yen more up to {cjscore} yen",
    "totalMsg": "Total {total} yen"
  }
}
</i18n>
