import {useState} from 'react'
import "./food.css"


import Home from "./home/Home"
import Special from "./special/Special"
import Review from './review/Review'
import Order from "./order/Order"



import {MdFastfood} from "react-icons/md"


function Food() {

const [top,setTop]=useState(false)
const menuTop=()=>{
setTop(!top)
}








  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-light" id='nav'>
<div className="container-fluid">
    <a href="#" className="navbar-brand fs-1 "><MdFastfood/>Food</a>

<div className="burger" onClick={menuTop}>
    <div className={top?"one oneActive":"one"}></div>
    <div className={top?"two twoActive":"two"}></div>
    <div className={top?"three threeActive":"three"}></div>
    </div>

<ul className={top?"navbar-nav move":"navbar-nav"} onClick={top&&menuTop}>
    <a href="#home" className="nav-item">Home</a>
    <a href="#special" className="nav-item">Speciality</a>
    
    <a href="#review" className="nav-item">Review</a>
    <a href="#order" className="nav-item">Order</a>
</ul>


</div>
    </nav>


    <Home/>
    <Special/>
    <Review/>
    <Order/>
    </>
  )
}

export default Food