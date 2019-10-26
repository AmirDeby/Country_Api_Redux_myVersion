import Actions from "./actions.config";
import { any } from "prop-types";

const initialState = {
    user: null,
    countries: [],
    countriesLoading: false,
    images: {}
}

export default function root(state = initialState, action: any) {
    console.log(action.payload)
    switch (action.type) {
        case Actions.SAVE_IMAGE: {
            const { imageUrl, code } = action.payload;
            const imageList = (state.images as any)[code] || [];
            return {
                ...state,
                images: {
                    ...state.images,
                    [code]: imageList.concat(imageUrl),
                }
            }
        }

        case Actions.SAVE_USER: {

            // return equals to global set state - setting the store
            return {
                ...state,
                user: "hello " + action.payload.user + "@gmail.com"
            }

        }

        // deprecated in version 24.10.209
        case Actions.GET_COUNTRIES: {
            // some logic
            return {
                ...state,
                countries: ["ISR", "AFG"]
            }
        }

        case Actions.GET_COUNTRIES_SUCCESS: {
            const { countries } = action.payload
            return { ...state, countries, countriesLoading: false }
        }

        case Actions.GET_COUNTRIES_PENDING: {
            return { ...state, countriesLoading: true }
        }

        default: {
            return state;
        }
    }
}