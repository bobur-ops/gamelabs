<template>
  <div
    :class="`title-1 ${isBold ? 'bold' : ''}`"
    :style="`color: ${TYPOGRAPY_COLORS[colorName]}`"
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
    colorName: { default: COLORS_NAMES.WHITE, type: String },
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

.title-1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: calculateVw(70);
  line-height: calculateVw(105);

  color: #ffffff;
  &.bold {
    font-weight: 600;
  }
}
</style>
