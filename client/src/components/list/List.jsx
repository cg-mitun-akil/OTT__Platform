import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import "./list.scss"
import ListItem from "../ListItem/ListItem"
export default function List({ list }) {

        const [slideNumber,setSlideNumber] = useState(0);
        const listRef = useRef();
        const [isMoved,setIsMoved] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

        const handleClick = (direction) => {
            if( enabled ){
                setEnabled(false);
            setIsMoved(true);
            let distance = listRef.current.getBoundingClientRect().x  -  50;
            if( direction === "left" && slideNumber > 0 ){
                setSlideNumber( slideNumber - 1 );
                console.log(slideNumber);
                if( slideNumber === 1 ) setIsMoved(false);
                listRef.current.style.transform = `translateX(${ distance + 230 }px)`;
                }
                if (direction === "right" && slideNumber < 10 - clickLimit) {
                setSlideNumber( slideNumber + 1 );
                listRef.current.style.transform = `translateX(${ distance - 230 }px)`;
            }      
            setTimeout(function(){setEnabled(true)},500);
            }
        }

  return (
    <div className='list'>
          <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick ={() =>handleClick("left")}
                style={{display: !isMoved && "none" } }
            />
              <div className="container" ref={listRef}>
                  {list.content.map((item, i) => (
                      <ListItem index={i} item={item} />
                  ))}
              </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick ={() =>handleClick("right") } />
        </div>
    </div>
  )
}
