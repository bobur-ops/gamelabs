<template>
  <div class="main-header">
    <div class="main-header__wrapper">
      <nuxt-link to="/" class="main-header__logo">
        <TitleThree :color="COLORS_NAMES.PURPLE" :is-bold="true"
          >gamelabs.</TitleThree
        >
      </nuxt-link>
      <div class="main-header__container-flex">
        <div class="main-header__actions">
          <div
            v-for="(action, index) in ACTIONS"
            :key="index"
            class="main-header__action"
          >
            <div class="main-header__action_name">
              <TextThree :color="COLORS_NAMES.WHITE" :is-bold="true">{{
                action.name
              }}</TextThree>
            </div>
            <div class="main-header__action_icon">
              <component :is="action.icon" />
            </div>
          </div>
        </div>
        <div class="main-header__socials">
          <div
            v-for="(social, index) in SOCIALS"
            :key="index"
            class="main-header__social-item"
          >
            <a :href="social.link" target="blank">
              <component :is="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TitleThree from '~/components/ui_components/Typograpy/TitleThree.vue'
import TextThree from '~/components/ui_components/Typograpy/TextThree.vue'
import { COLORS_NAMES } from '@/components/ui_components/Typograpy/constants'
import { ACTIONS, SOCIALS } from '@/components/headers/constants'

export default Vue.extend({
  components: {
    TitleThree,
    TextThree,
  },
  data() {
    return {
      COLORS_NAMES,
      ACTIONS,
      SOCIALS,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_functions.scss';

.main-header {
  &__wrapper {
    background: #1f2128;
    width: calc(100% - calculateVw(70) * 2);
    height: calculateVw(100);
    padding: 0 calculateVw(70);

    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
  }
  &__container-flex,
  &__actions,
  &__action,
  &__socials {
    display: flex;
    align-items: center;
  }
  &__action {
    margin-right: calculateVw(31);
    margin-left: calculateVw(31);
    position: relative;
    &::after {
      content: '';
      background: #ffffff33;
      width: calculateVw(2);
      height: calculateVw(42);
      position: absolute;
      right: calculateVw(-31);
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &_name {
      margin-right: calculateVw(12);
    }
    svg {
      width: calculateVw(24);
      height: calculateVw(24);
      line-height: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &__socials {
    margin-left: calculateVw(80);
  }
  &__social-item {
    margin-right: calculateVw(24);
    svg {
      width: calculateVw(22);
      height: calculateVw(22);
      line-height: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

<style lang="scss">
.main-header {
  &__action {
    &:hover {
      .text-3 {
        transition: 0.4s;
        color: #6c5dd3 !important;
      }
      svg {
        path,
        circle {
          transition: 0.4s;
          stroke: #6c5dd3;
        }
      }
    }
  }
  &__social-item {
    &:hover {
      cursor: pointer;
      svg {
        path {
          transition: 0.4s;
          fill: #6c5dd3;
        }
      }
    }
  }
}
</style>
