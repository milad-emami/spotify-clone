import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-read",
  "user-read-recently-played",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
  // "user-library-modify"
  "streaming",
].join(",");

const params = {
  scope: scopes,
};
const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});
export default spotifyApi;
export { LOGIN_URL };
