<template>
  <div class="home-table">
    <div class="home-table__wrapper">
      <div class="home-table__top">
        <div class="home-table__top--title">
          <TitleTwo> Play & earn rating </TitleTwo>
          <span class="secondary">
            <TextTwo :colorName="COLORS_NAMES.LIGHT_GREY"
              >live <span class="dot"></span
            ></TextTwo>
          </span>
        </div>
        <div class="home-table__top--text">
          <TextTwo :colorName="COLORS_NAMES.LIGHT_GREY"
            >The information is updated hourly based on our own research. May
            this NOT be considered as financial advice.</TextTwo
          >
        </div>
      </div>
      <div class="home-table__content">
        <div class="home-table__item">
          <TitleThree>Play</TitleThree>
          <div class="table">
            <div class="table-head">
              <div class="table-head__row">
                <div class="table-head__col game">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY"
                    >Games</TextFour
                  >
                </div>
                <div class="table-head__col">
                  <TwitterIcon />
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY">Subs</TextFour>
                  <TableColIcon />
                </div>
                <div class="table-head__col">
                  <DiscordIcon />
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY">Subs</TextFour>
                  <TableColIcon />
                </div>
                <div class="table-head__col long">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY"
                    >Mondivly visits</TextFour
                  >
                  <TableColIcon />
                </div>
                <div class="table-head__col long">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY"
                    >White paper</TextFour
                  >
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="table-body__row" v-for="game in data" :key="game._id">
                <div class="table-body__col game">
                  <img
                    src="@/assets/images/png/games/axie_infinity.png"
                    alt="game_icon"
                  />
                  <TextThree>{{ game.name }}</TextThree>
                </div>
                <div class="table-body__col">
                  <span>
                    <TextThree>{{
                      abbreviateNumber(game.twitter_subs)
                    }}</TextThree>
                  </span>
                </div>
                <div class="table-body__col">
                  <span>
                    <TextThree>{{
                      abbreviateNumber(game.discord_subs)
                    }}</TextThree>
                  </span>
                </div>
                <div class="table-body__col long">
                  <TextThree>{{
                    abbreviateNumber(game.monthly_visits)
                  }}</TextThree>
                </div>
                <div class="table-body__col long">
                  <a :href="game.white_paper">
                    <TextThree>Go</TextThree>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-table__item">
          <TitleThree>Earn</TitleThree>
          <div class="table">
            <div class="table-head">
              <div class="table-head__row">
                <div class="table-head__col long">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY"
                    >Mondivly visits</TextFour
                  >
                  <TableColIcon />
                </div>
                <div class="table-head__col">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY">ROI</TextFour>
                  <TipIcon />
                  <TableColIcon />
                </div>
                <div class="table-head__col long">
                  <TextFour :colorName="COLORS_NAMES.LIGHT_GREY"
                    >Daily Earnings</TextFour
                  >
                  <TableColIcon />
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="table-body__row" v-for="game in data" :key="game._id">
                <div class="table-body__col long">
                  <TextThree>${{ game.average_investments }}</TextThree>
                </div>
                <div class="table-body__col">
                  <TextThree>{{ Math.trunc(game.roi) }}d</TextThree>
                </div>
                <div class="table-body__col long">
                  <TextThree>${{ game.daily_earnings }}</TextThree>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleTwo from "@/components/ui_components/Typograpy/TitleTwo.vue";
import TextTwo from "@/components/ui_components/Typograpy/TextTwo.vue";
import TextFour from "@/components/ui_components/Typograpy/TextFour.vue";
import TextThree from "@/components/ui_components/Typograpy/TextThree.vue";
import TitleThree from "@/components/ui_components/Typograpy/TitleThree.vue";
import TwitterIcon from "@/components/ui_icons/socials/TwitterIcon.vue";
import DiscordIcon from "@/components/ui_icons/socials/DiscordIcon.vue";
import TableColIcon from "@/components/ui_icons/TableColIcon.vue";
import TipIcon from "@/components/ui_icons/TipIcon.vue";

import {
  TYPOGRAPY_COLORS,
  COLORS_NAMES,
} from "@/components/ui_components/Typograpy/constants";

export default Vue.extend({
  props: ["data"],
  name: "Table",
  components: {
    TitleTwo,
    TextThree,
    TipIcon,
    TextTwo,
    TitleThree,
    TwitterIcon,
    DiscordIcon,
    TextFour,
    TableColIcon,
  },
  data() {
    return {
      TYPOGRAPY_COLORS,
      COLORS_NAMES,
    };
  },
  methods: {
    abbreviateNumber(value: number) {
      var suffixes = ["", "k", "m", "b", "t"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(2)
      );
      if (shortValue % 1 != 0) {
        var shortNum = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_functions.scss";

.home-table {
  &__wrapper {
    width: calc(100% - calculateVw(70) * 2);
    height: calculateVw(100);
    padding: 0 calculateVw(70);
  }
  &__top {
    margin-bottom: calculateVw(32);
    &--title {
      display: flex;
      align-items: center;
      .secondary {
        margin-left: calculateVw(10);
        display: flex;
        align-items: center;
        .dot {
          display: inline-block;
          width: calculateVw(14);
          height: calculateVw(14);
          border-radius: 50%;
          background: #5aa253;
        }
      }
    }
    &--text {
      max-width: calculateVw(760);
    }
  }
  &__content {
    max-width: calculateVw(1101);
    margin: 0 auto;
    display: flex;
  }
  &__item {
    .table {
      width: 100%;
      &-head {
        padding-bottom: calculateVw(10);
        border-bottom: 1px solid #35373e;
        &__row {
          display: flex;
        }
        &__col {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: calculateVw(30);
          width: calculateVw(80);
        }
        .game {
          width: calculateVw(210);
        }
        .long {
          width: calculateVw(117);
        }
      }
      &-body {
        &__row {
          // padding-top: calculateVw(10);
          // padding-bottom: calculateVw(10);
          border-bottom: 1px solid #35373e;
          display: flex;
          align-items: center;
          height: calculateVw(80);
        }
        .game {
          width: calculateVw(210);
        }
        .long {
          width: calculateVw(117);
        }
        &__col {
          display: flex;
          align-items: center;
          text-align: center;
          margin-right: calculateVw(30);
          width: calculateVw(80);
          img {
            margin-right: calculateVw(15);
          }
          span,
          a {
            width: calculateVw(80);
            height: calculateVw(30);
            background: #5d51b1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
