import { initStore } from "./index";
const configureStore = () => {
  const actions = {
    LOGIN: (state, userInfo) => {
      return { auth: { userInfo, token: "sampletoken" } };
    },
    LOGOUT: (state, userInfo) => {
      return { auth: { userInfo: null, token: null } };
    },
  };
  initStore(actions, {
    auth: {
      userInfo: {},
    },
  });
};
export default configureStore;
