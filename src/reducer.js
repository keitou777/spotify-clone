export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove token after developing!!!
  //   token:
  //     "BQBs6Cibaz6-O7lO3ZNCacyCvh2Y6yoN50sq73EB8aGr45-z5x_BnpbjmIgkrXxXnCQgcdGOQxb1-wgWIcu4JspzHLMcPOdiL5PVgF8pl7HgoMZ5SxlXEDFTtfTBvj5oD89Y_s9eizhG2kwsB0yTDxvkfW0",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
