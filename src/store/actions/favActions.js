export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export function addToFav(vehicle) {
    return {
        type: ADD_TO_CART,
        payload: vehicle
    }
}

export function removeFromFav(vehicle) {
    return {
        type: REMOVE_FROM_CART,
        payload: vehicle
    }
}