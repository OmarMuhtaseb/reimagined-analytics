import {getProductById} from "../inventory";
import {v4 as uuid} from 'uuid';
import _ from 'lodash';
import {Analytics} from "../analytics";

export enum ActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export type Action = {
    type: ActionTypes,
    id?: number,
    quantity?: number,
    uuid?: string,
}

const push = (id: number, quantity: number, state: any) => {
    const product = getProductById(id);
    if (product) {
        Analytics.addToCart({
            id: product.id.toString(),
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: quantity
        });
        const updatedCart = [...state.cart, {uuid: uuid(), ...product, quantity}];
        return {...state, cart: updatedCart};
    }
};

const pop = (uuid: string, state: any) => {
    const product = _.find(state.cart, item => item.uuid === uuid);
    if (product) {
        Analytics.removeFromCart({
            id: product.id.toString(),
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: product.quantity
        });
        const updatedCart = _.filter(state.cart, item => item.uuid !== uuid);
        return {...state, cart: updatedCart};
    }
};

export const cartReducer = (state: any, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            if (action.id && action.quantity) {
                return push(action.id, action.quantity, state);
            }
            break;
        case ActionTypes.REMOVE_PRODUCT:
            if (action.uuid) {
                return pop(action.uuid, state);
            }
            break;
        default:
            return state;
    }
};
