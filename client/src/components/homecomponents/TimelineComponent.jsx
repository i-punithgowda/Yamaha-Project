import { Timeline } from "react-beautiful-horizontal-timeline";

import React,{useState} from 'react'

function TimelineComponent() {

    const myList = [
        {
          date: "2018-03-22",
          name: "Event number 01",
          s: "lorem imp ",
          t: "maor k"
        },
        {
          date: "2018-03-22",
          name: "Event number 02",
          s: "lorem imp",
          t: "Maor"
        },
        {
          date: "2018-03-22",
          name: "Event number 03",
          s: "lorem ip ",
          t: "Maor"
        },
        {
          name: "Event number 04",
          date: "2018-03-22",
          s: "lorem impo",
          t: "Maor"
        },
    ]    


    const [labelWidth, setlabelWidth] = useState(140);
    const [amountMove, setamountMove] = useState(350);
    const [lineColor, setlineColor] = useState("#e91e63");
    const [darkMode, setdarkMode] = useState(false);
    const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
    const [showSlider, setshowSlider] = useState(false);
    const [arrowsSize, setarrowsSize] = useState(false);

    return (
        <div className="timeline">
 <Timeline
        myList={myList}
        labelWidth={labelWidth}
        amountMove={amountMove}
        lineColor={lineColor}
        darkMode={darkMode}
        eventTextAlignCenter={eventTextAlignCenter}
        showSlider={showSlider}
        
        arrowsSize={arrowsSize}
      />
        </div>
    )
}

export default TimelineComponent
