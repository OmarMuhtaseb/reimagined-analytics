import React, {useReducer} from "react";

import CartProvider from "./CartProvider";
import {ActionTypes, cartReducer} from "./reducers";

const GlobalState = (props: any) => {
    const [cartState, dispatch] = useReducer(cartReducer, {cart: []});
    const push = (id: number, quantity: number) => {
        dispatch({type: ActionTypes.ADD_PRODUCT, id, quantity});
    };

    const pop = (uuid: string) => {
        dispatch({type: ActionTypes.REMOVE_PRODUCT, uuid: uuid});
    };

    return (
        <CartProvider.Provider
            value={{
                cart: cartState.cart,
                push: push,
                pop: pop
            }}>
            {props.children}
        </CartProvider.Provider>
    );
};

export default GlobalState;
