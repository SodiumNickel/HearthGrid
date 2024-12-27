import {useState} from "react"
import "../styles/card.css"

export function Card({name, image, cardSelected}) {
    
    
    return <button className="card" onClick={cardSelected}>
                <div className="card-name">
                    <h3>{name}</h3>
                </div>
                <div className="card-image">
                    <img src={"https://art.hearthstonejson.com/v1/256x/" + image + ".webp"} alt={name}></img>
                </div>
            </button>
}