import React from 'react'
import ReactDOM from 'react-dom';
import Sdata from './Sdata.jsx'
import Card from './Card.jsx'

function ncard(val) {
    return (
        <Card 
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}/>
    )
}

const Netflix = () => {
    return (
        Sdata.map(ncard)
        )
}
export default Netflix;