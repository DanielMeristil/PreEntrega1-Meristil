import React from "react";
import Count from "../Count/Count";

const ItemsListContainer = ({mensaje}) =>{

    return (
        <>
        <h2>{mensaje}</h2>
        <Count inicial={1} stock={10} />
        </>
    )
}

export default ItemsListContainer;