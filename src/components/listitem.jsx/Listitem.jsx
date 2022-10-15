import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons"
import "./listitem.scss"

export default function Listitem() {
  return (
    <div className='listItem'>
        <img src="https://media.istockphoto.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?k=20&m=1244034031&s=612x612&w=0&h=WFpMBZ7PfLCJrK4F9764OsAls0NbOJOza8CIiP3Yfc8=" alt="" />
        <div className="itemInfo">
            <div className="icons">
              <PlayArrow/>
              <Add/>
              <ThumbUpOutlined/>
              <ThumbDownOutlined/>
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
    </div>
  )
}
