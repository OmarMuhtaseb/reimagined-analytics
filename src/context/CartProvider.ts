import React from "react";

export default React.createContext({
    cart: [],
    push: (id: number, quantity: number) => {
    },
    pop: (uuid: string) => {
    }
});
