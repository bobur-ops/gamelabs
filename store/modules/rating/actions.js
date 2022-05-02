import { SET_RATING } from "./types";

export default {
  fetchRating(context) {
    return fetch("https://www.gamelabs.ai/api/rating/")
      .then((res) => res.json())
      .then((data) => {
        context.commit(SET_RATING, data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
