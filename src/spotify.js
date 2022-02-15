//https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";//my client ID;
const redirectUri = "http://localhost:3000/";
const clientId = '5ec8363115be4191bb5372b5932be7d7';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromURL = ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        //#accessToken =mysupersecretkey&name=wai
        let parts = item.split('=');
        initial [parts[0]] = decodeURIComponent(parts[1]);
        
        return initial;
    }, {})
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
