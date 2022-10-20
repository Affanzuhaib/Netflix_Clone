import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

export default function Listitem({index}) {
  const [isHovered, setIsHovered]= useState(false);
  const trailer="https://player.vimeo.com/external/496797033.sd.mp4?s=5ed472674c6878067353d85224650f6bc4f4a247&profile_id=164&oauth2_token_id=57447761";
  return (
    <div className='listItem' 
    style={{left : isHovered && index * 225-50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://media.istockphoto.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?k=20&m=1244034031&s=612x612&w=0&h=WFpMBZ7PfLCJrK4F9764OsAls0NbOJOza8CIiP3Yfc8=" alt="" />
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hourm14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum dolorem. Id non quis, quaerat exercitationem impedit sunt natus corrupti. Iste modi nemo quaerat, ipsa eius incidunt esse in voluptatem!
            </div>
            <div className="genre">Action</div>
        </div>
        </>
        )}
    </div>
  )
}
