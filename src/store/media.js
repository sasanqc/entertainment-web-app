import { initStore } from "./index";
import data from "../data.json";
const configureStore = () => {
  const actions = {
    TOGGLE_BOOKMARK: (state, id) => {
      const mediaIndex = state.media.findIndex((m) => m.title === id);
      const newBookmarkState = !state.media[mediaIndex].isBookmarked;
      const updatedMedia = [...state.media];
      updatedMedia[mediaIndex] = {
        ...state.media[mediaIndex],
        isBookmarked: newBookmarkState,
      };
      return { media: updatedMedia };
    },
  };

  initStore(actions, { media: data });
};

export default configureStore;
