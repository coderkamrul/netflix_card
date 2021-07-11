import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Sdata from "./Sdata";
import Netflix from './Netflix';
import ('./index.css');


ReactDOM.render( 
    <>

    <h1 className="heading_style">List of top Netflix series in 2020</h1>
    
    <Netflix />
    </>,
    document.getElementById('root')
    );