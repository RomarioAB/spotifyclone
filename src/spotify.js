// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// ^ This is where the user goes to when logging in.
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirects you back to the home page once logged in the spotify login page.
const redirectUri = "http://localhost:3000/";
const clientId = "9e45ad9f85364844949b7e972067b6ef";
//the scopes allow you to get the correct permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});

};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;