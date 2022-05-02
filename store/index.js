import Vue from "vue";
import Vuex from "vuex";

// Modules import
import rating from "./modules/rating";

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  rating: rating,
};

export default () =>
  new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules,
  });
