export default function CustomImage({ImgSrc, pt}){
    return(
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={ImgSrc} alt=""/>
        </div>
    )
}