<template>
  <div
    class="title-3"
    :class="{ bold: isBold }"
    :style="`color: ${TYPOGRAPY_COLORS[color]}`"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  TYPOGRAPY_COLORS,
  COLORS_NAMES,
} from '@/components/ui_components/Typograpy/constants'
export default Vue.extend({
  props: {
    color: { default: COLORS_NAMES.WHITE, type: String },
    isBold: { default: false, type: Boolean },
  },
  data() {
    return {
      TYPOGRAPY_COLORS,
      COLORS_NAMES,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_functions.scss';

.title-3 {
  font-family: 'Circe';
  font-style: normal;
  font-weight: normal;
  font-size: calculateVw(30);
  line-height: calculateVw(44);

  color: #fff;
  &.bold {
    font-weight: 700;
  }
}
</style>
