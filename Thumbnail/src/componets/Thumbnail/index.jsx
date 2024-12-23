import IMAGE from "../data/IMAGE"
import { useState } from "react"
import classes from "./index.module.css"

const Thumbnail = () => {
    const [cover, setCover] = useState(IMAGE[0].image);
    const [selectedImg, setSelectedImg] = useState(0);

    const handleCover = (item, index) => {
        setCover(item);
        setSelectedImg(index)
    }

    return (
        <>
            <div className={classes.thumbnailContainer}>
            <div className={classes.cover}>
                <img src={cover} alt="cover" />
            </div>

            <div className={classes.thumbnailList}>
                {IMAGE.map((imageData, index) => {
                    return <img
                    onClick={() => handleCover(imageData.image, index)}
                    key={index}
                    src={imageData.image}
                    className={index === selectedImg && classes.selected} alt="thumbnail" />
                })}
            </div>
            </div>
        </>
    )
}

export default Thumbnail