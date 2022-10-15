import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import Listitem from "../listitem.jsx/Listitem"
import { useRef, useState } from "react"

export default function List() {
    const [isMoved,setISMoved] = useState(0);
    const [slideNumber,setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setISMoved(true)
       let distance = listRef.current.getBoundingClientRect().x -50
      if(direction === "left" && slideNumber){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform =`translateX(${230 + distance}px)`
        }
        if(direction === "right" &&slideNumber<5){
            setSlideNumber(slideNumber +1)
            listRef.current.style.transform =`translateX(${-230 + distance}px)`
        }


    }
    //
  return (
    <div className='list'>
        <span className="listTitle">continue of watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}} />
                <div className="container" ref={listRef}>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

//