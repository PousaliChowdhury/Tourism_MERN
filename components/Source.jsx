import React, { useState } from "react";
import Data from "./Data";
import FilterCard from "./FilterCard";
import Buttons from "./Buttons";
import './Source.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carddes from './Carddes.json';
import { Link } from 'react-router-dom'


const Source = () => {
    let cardArr=Carddes;
    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const filterItem = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
            // comparing category for displaying data
      });
      setItem(newItem);
    };
   
    return(
        <>
          <div className="full">
          <h1 style={{color:'darkblue', padding:'2%'}}> Explore Top Packages</h1>
          <div className='row' style={{margintop:'4%',marginleft:'2%', marginBottom:'0%',paddingLeft:'5%'}}>
          {cardArr.map((eachCard,index)=>(
            <div className='col-md-3'style={{marginBottom:'5%'}}>
            <Card style={{ width: '18rem', height:'54vh'}}>
      <Card.Img style={{height:'30vh'}}variant="top" src={require('../Assets/'+ eachCard.img +'.jpg')} />
      <Card.Body>
        <Card.Title style={{color:'darkblue'}} >{eachCard.title }</Card.Title>
        <Card.Text style={{color:'darkblue',cursor:'pointer'}}>
          {eachCard.text}
        </Card.Text>
        <Link to="/SignUp"><Button variant="primary">Explore More</Button></Link>
        
      </Card.Body>
    </Card>
   
    </div>

          ))}
         
    </div>

    <div className="container-fluid">
      <h1 style={{justifyContent:'center',color:'darkblue' ,padding:'2%'}}>Packages By Interest</h1>
        <div className="row">
         
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Link to="/Booking"><FilterCard item={item} /></Link>
        </div>
      </div>
      </div>
     
        </>
    )
}

export default Source;
