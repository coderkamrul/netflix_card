import React from 'react'
import Sdata from './Sdata.jsx';
import Card from './Card.jsx';

const Amazon = () => {
    return (
        <Card
          key={Sdata[2].id}
          imgsrc={Sdata[2].imgscr}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
        />
      );
}
export default Amazon;