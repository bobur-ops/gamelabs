<template>
  <button
    :class="`ui__button ui__button_size--${size} ui__button_variant--${variant}`"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from '@/components/ui_components/Button/constants'

export default Vue.extend({
  name: 'MainButton',
  props: {
    size: { default: BUTTON_SIZES.M, type: String },
    variant: { default: BUTTON_VARIANTS.LIGHT, type: String },
  },
  data() {
    return {
      BUTTON_SIZES,
      BUTTON_VARIANTS,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_functions.scss';

button {
  &.ui__button {
    transition: 0.4s;
    &:hover {
      cursor: pointer;
      transition: 0.4s;
    }
    &_size--l {
      padding: calculateVw(21);
      border-radius: calculateVw(10);
    }
    &_size--m {
      padding: calculateVw(13);
      border-radius: calculateVw(10);
    }
    &_variant--purple {
      background: #6c5dd3;
      border: calculateVw(2) solid #6c5dd3;
      &:hover {
        border: calculateVw(2) solid #2b1e89;
        background: #2b1e89;
      }
    }
    &_variant--light {
      border: calculateVw(2) solid rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.4);
      &:hover {
        background: transparent;
      }
    }
    &_variant--light-outline {
      border: calculateVw(2) solid #ffffff;
      background: transparent;
      &:hover {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
