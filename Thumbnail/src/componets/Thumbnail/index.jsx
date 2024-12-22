import IMAGE from "../data/IMAGE"

const Thumbnail = () => {
    return (
        <>
            <img src="https://raw.githubusercontent.com/yavuzceliker/sample-images/refs/heads/main/images/image-1.jpg" alt="" />

            <div>
                {IMAGE.map((item,index)=>{
                    return <img key={index} src={item.image} alt="" />
                })}
            </div>
        </>
    )
}

export default Thumbnail