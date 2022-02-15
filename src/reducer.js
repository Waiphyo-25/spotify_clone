import { getDefaultNormalizer } from "@testing-library/react";

export const initialState = {
    user : null,
    playlist: [],
    playing: false,
    item: null,
    //remove after finished developing ...
    token: 
    'BQC0li1Wwsv8nMs3bTCedR7VKJs-kLJCsCwjJuXs9mGGR6--zmVawzgTpVpyfY1pNeBJw2UDsYSeKAWZLweUkn6_6G41ONq7sjE8uom6DK2BH3pWkbPiM2qxeFupvHESHuR4rmQOIRpwFfrTSJu_TszmxjIDU138MATd-pPJLmHNP4xx'
};

const reducer = (state,action) => {
    console.log(action);

    // Actioin -> type, [playload]
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token 
            };
        case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists : action.playlists
        };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
            default:
                return state;
    }

}
export default reducer;

