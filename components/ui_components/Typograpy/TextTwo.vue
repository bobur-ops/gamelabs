<template>
  <div class="text-2" :style="`color: ${TYPOGRAPY_COLORS[colorName]}`">
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

.text-2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: calculateVw(24);
  line-height: calculateVw(32);
}
</style>
