<template>
  <div
    class="text-3"
    :class="{ bold: isBold }"
    :style="`color: ${TYPOGRAPY_COLORS[color]} `"
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

.text-3 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: calculateVw(16);
  line-height: calculateVw(19);
  &.bold {
    font-weight: 700;
  }
}
</style>
