import React from "react"
import { ColorCard } from "./ColorCard"

export const ColorCardList = ({colors_info}) => {
    return (
        <>
            {
                colors_info.map((color_info) => <ColorCard tarjeta={color_info}/>)
            }
        </>
    )
}