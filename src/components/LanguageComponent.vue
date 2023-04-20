<script>
export default {
  name: "LanguageComponent",
  props: {
    lang: String,
  },
  computed: {
    checkLanguage() {
      switch (this.lang) {
        case "aa":
          return "et";
        case "ak":
          return "gh";
        case "an":
          return "es";
        case "ce":
          return "ru";
        case "cs":
          return "cz";
        case "en":
          return "gb";
        case "ha":
          return "ng";
        case "ja":
          return "jp";
        case "ko":
          return "kr";
        case "ln":
          return "cd";
        case "ta":
          return "in";
        case "ti":
          return "er";
        // case "xx":
        case "zh":
          return "cn";
        default:
          return this.lang;
      }
    }
  }
}
</script>

<template>
  <p class="d-flex align-items-center justify-content-center mb-2">Language:
      <img class="ms-2" :src="`https://flagcdn.com/32x24/${checkLanguage}.png`" :alt="`${lang} flag`">
    </p>
</template>