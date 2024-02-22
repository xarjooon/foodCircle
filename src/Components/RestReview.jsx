import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Collapse from 'react-bootstrap/Collapse';
import Header2 from './Header2';

function RestReview({selectedRestaurant}) {
    const [open, setOpen] = useState(false);
  return (
   <>

   <button className='btn btn-warning ms-3'   onClick={() => setOpen(!open)} >Click here to see reviews</button>
   <Collapse in={open}>
   <div className='my-2'>
    <hr />
    {
      selectedRestaurant[0]?.reviews.length>0?
      selectedRestaurant[0].reviews.map(item =>(
        <div className='mt-5'>
        <h6>Name:{item.name}</h6>
        <h6>Date:{item.date}</h6>
        <h6>Rating:{item.rating}</h6>
        <h6>Comments:{item.comments}</h6>
    </div>

      )):
      <p>no reviews found</p>
      
      


    }
    
   </div>
   </Collapse>
   </>
  )
}

export default RestReview