import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import Listitem from "../listitem.jsx/Listitem"
import { useRef } from "react"

export default function List() {

    const listRef = useRef()

    const handleClick = (direction) => {
        if(direction === "left"){
            listRef.current.style.transform = `translateX(230px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">continue of watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={handleClick("left")}/>
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
                    <Listitem/>
                    <Listitem/>
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={handleClick("right")}/>
        </div>
    </div>
  )
}
