import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { search } from '../Redux/restaurantSlice';

function Header() {
  const dispatch  = useDispatch()
  return (
    <>
    <div style={{backgroundColor:"orange"}}>
    <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <Link to="/" style={{textDecoration:"none", color:"black", fontWeight:"bolder"}}>FOOD CIRCLE</Link></Navbar.Brand>
          <i class="fa-solid fa-magnifying-glass me-2"></i>
          <input type="text"className='form-control w-25 bg-light text-dark' onChange={(e)=>dispatch(search(e.target.value))} style={{marginLeft:"-370px"}} />
          <img 
          height={"50px"}
          width={"50px"}
          src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png" alt="" />
         
        </Container>
      </Navbar>
    </div>
         
    </>
  )
}

export default Header