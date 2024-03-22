import { createSlice } from "@reduxjs/toolkit";

function isDarkThemePreferred() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

const initialTheme = isDarkThemePreferred() ? "dark" : "light";

export const setUserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loaded: false,
    loading: false,
    notFound: false,
    theme: initialTheme,
  },
  reducers: {
    userLoading: (state) => {
      state.loading = true;
    },
    userNotFound(state) {
      state.loading = false;
      state.notFound = true;
    },
    userReceived(state, action) {
      state.loading = false;
      if (state.notFound) {
        state.notFound = false;
      }
      state.user = action.payload;
      state.loaded = true;
    },
    toggleTheme(state) {
      const body = document.querySelector("body");
      state.theme === "light"
        ? (body.classList.add("dark-theme"),
          body.classList.remove("light-theme"))
        : (body.classList.add("light-theme"),
          body.classList.remove("dark-theme"));
      state.theme = state.theme === "light" ? "dark" : "light";
      console.log(body);
    },
  },
});

export const { userLoading, userNotFound, userReceived, toggleTheme } =
  setUserSlice.actions;

// Defining a thunk that dispatches the action creators with async functions
export const fetchUsers = (user) => async (dispatch) => {
  const BaseGithubApi = "https://api.github.com/users";
  dispatch(userLoading());

  try {
    const fetchUserData = await fetch(`${BaseGithubApi}/${user}`);
    const isResponseOk = fetchUserData.ok;

    if (isResponseOk) {
      const userData = await fetchUserData.json();

      const userDetails = {
        bio: userData.bio,
        blog: userData.blog,
        login: userData.login,
        fullname: userData.name,
        company: userData.company,
        avatar: userData.avatar_url,
        location: userData.location,
        followers: userData.followers,
        following: userData.following,
        dateJoined: userData.created_at,
        totalRepos: userData.public_repos,
        twitter: userData.twitter_username,
        gitHubProfileUrl: userData.html_url,
      };

      dispatch(userReceived(userDetails));
    } else {
      fetchUserData.status === 404;
      dispatch(userNotFound());
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export default setUserSlice.reducer;
