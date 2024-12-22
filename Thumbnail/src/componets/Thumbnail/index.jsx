import IMAGE from "../data/IMAGE"
import { useState } from "react"
import classes from "./index.module.css"

const Thumbnail = () => {
    const [cover, setCover] = useState(IMAGE[0].image)

    const handleCover = (item) => {
        setCover(item)
    }

    return (
        <>
            <div className={classes["thumbnail-container"]}>
            <div className={classes.cover}>
                <img src={cover} alt="" />
            </div>

            <div className={classes["thumbnail-list"]}>
                {IMAGE.map((imageData, index) => {
                    return <img onClick={() => handleCover(imageData.image)} key={index} src={imageData.image} alt="" />
                })}
            </div>
            </div>
        </>
    )
}

export default Thumbnail