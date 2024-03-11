import { createSlice } from "@reduxjs/toolkit";

export const setUserSlice = createSlice ({
    name: 'user',
    initialState: {
        user: {},
        loaded: false,
        loading: false,
    },
    reducers: {
        userLoading: (state) => {
            state.loading = true;
        },
        userReceived(state, action) {  
            state.loaded = true;
            state.loading = false;
            state.user = action.payload;
        }
    }
})

export const { userLoading, userReceived } = setUserSlice.actions

// Defining a thunk that dispatches the action creators with async functions
export const fetchUsers = (user) => async (dispatch) => {
    const BaseGithubApi = 'https://api.github.com/users';
    dispatch(userLoading())
    
    try {
        const fetchUserData = await fetch(`${BaseGithubApi}/${user}`)
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

        dispatch(userReceived(userDetails))

    } catch (error) {
        console.error(error);
    }
}

export default setUserSlice.reducer
