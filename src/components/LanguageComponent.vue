<script>
import arUrl from "./../assets/img/flags/ar.svg"
import bnUrl from "./../assets/img/flags/bn.svg"
import csUrl from "./../assets/img/flags/cs.svg"
import deUrl from "./../assets/img/flags/de.svg"
import enUrl from "./../assets/img/flags/en.svg"
import esUrl from "./../assets/img/flags/es.svg"
import faUrl from "./../assets/img/flags/fa.svg"
import frUrl from "./../assets/img/flags/fr.svg"
import haUrl from "./../assets/img/flags/ha.svg"
import hiUrl from "./../assets/img/flags/hi.svg"
import idUrl from "./../assets/img/flags/id.svg"
import itUrl from "./../assets/img/flags/it.svg"
import jaUrl from "./../assets/img/flags/ja.svg"
import koUrl from "./../assets/img/flags/ko.svg"
import nlUrl from "./../assets/img/flags/nl.svg"
import plUrl from "./../assets/img/flags/pl.svg"
import ptUrl from "./../assets/img/flags/pt.svg"
import ruUrl from "./../assets/img/flags/ru.svg"
import svUrl from "./../assets/img/flags/sv.svg"
import trUrl from "./../assets/img/flags/tr.svg"
import urUrl from "./../assets/img/flags/ur.svg"
import viUrl from "./../assets/img/flags/vi.svg"
import zhUrl from "./../assets/img/flags/zh.svg"
import otherUrl from "./../assets/img/flags/other.jpg"
export default {
  name: "LanguageComponent",
  props: {
    lang: String,
  },
  data() {
    return {
      arUrl,
      bnUrl,
      csUrl,
      deUrl,
      enUrl,
      esUrl,
      faUrl,
      frUrl,
      haUrl,
      hiUrl,
      idUrl,
      itUrl,
      jaUrl,
      koUrl,
      nlUrl,
      plUrl,
      ptUrl,
      ruUrl,
      svUrl,
      trUrl,
      urUrl,
      viUrl,
      zhUrl,
      otherUrl,
    }
  },
  computed: {
    checkLanguage() {
      switch (this.lang) {
        case "ar":
          return arUrl;
        case "an":
        case "es":
          return esUrl;
        case "bn":
          return bnUrl;
        case "ce":
        case "ru":
          return ruUrl;
        case "cs":
          return csUrl;
        case "de":
          return deUrl;
        case "en":
          return enUrl;
        case "fa":
          return faUrl;
        case "fr":
          return frUrl;
        case "ha":
          return haUrl;
        case "hi":
        case "ta":
          return hiUrl;
        case "id":
          return idUrl;
        case "it":
          return itUrl;
        case "ja":
          return jaUrl;
        case "ko":
          return koUrl;
        case "nl":
          return nlUrl;
        case "pl":
          return plUrl;
        case "pt":
          return ptUrl;
        case "sv":
          return svUrl;
        case "tr":
          return trUrl;
        case "ur":
          return urUrl;
        case "vi":
          return viUrl;
        case "zh":
          return zhUrl;
        default:
          return otherUrl;
      }
    }
  }
}
</script>

<template>
  <p class="d-flex align-items-center justify-content-center mb-2">Language: {{ lang }}
    <img width="32" height="24" class="ms-2" :src="checkLanguage" :alt="`${lang} flag`">
  </p>
</template>