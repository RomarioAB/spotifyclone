export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finised developing because when adding your token, you're already authorised.
    token: 'BQCtKNd48UuP9nJi-vdkb4RVMyfIlfs58W5bK3PPEYbFAyeZHMve8smqTlLBuRR_bvyBgQHyh-XhaZpw0xRvN1HvBgR2bDkddB8H2OZsNUa3mThdNboOO-7xzqLu1tf3gVpZL7c9oVsHRVMoxWvPX6fgNVltRFPSncbf4r7g7QwEai6H7JMD5I1B1CRvnsHAyaHySzyoUbJAzxfQ',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLIST":
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
}

export default reducer;