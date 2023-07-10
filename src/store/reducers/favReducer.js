import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/favActions";
import { favItems } from "../initialValues/favItems";


const initialState = {
    favItems: favItems,
};



export default function favReducer(state = initialState, { type, payload }) {



    switch (type) {
        case ADD_TO_CART:
            let vehicle = state.favItems.find((f) => f.vehicle.loadId === payload.loadId);
            


            if (vehicle) {
                return {
                    ...state,
                    favItems: state.favItems.filter((f) => f.vehicle.loadId !== payload.loadId),
                    
                };
            } else {
                return {
                    ...state,
                    favItems: [...state.favItems, { vehicle: payload }]
                };
            }
             
        case REMOVE_FROM_CART:
            return {
                ...state,
                favItems: state.favItems.filter((f) => f.vehicle.loadId !== payload.loadId),
            };
        default:
            return state;
    }
}