import React from 'react'
import "./special.css"

import {FaHamburger} from "react-icons/fa"
import {MdOutlineLocalPizza} from "react-icons/md"
import {MdOutlineFreeBreakfast} from "react-icons/md"
import {GiFruitBowl} from "react-icons/gi"
import {RiCake2Line} from "react-icons/ri"

import {BiDrink} from "react-icons/bi"

function Special() {
  return (
    <div  className='specialCon container' id="special">

<div className="row"  data-aos="flip-left">

<div className="col">
<img src="https://media.istockphoto.com/photos/burger-picture-id182744943?b=1&k=20&m=182744943&s=170667a&w=0&h=yrmQbTtYbX1u6dgIKyqNSNRHXZCof8jHABKTAOWi7_c=" alt="" />

<div className="titleContent">
<FaHamburger   className="fs-1 text-danger"/>
<h4>Tasty burger</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>

</div>

<div className="col">
<img src="https://media.istockphoto.com/photos/hawaiian-pizza-with-ham-and-pineapple-picture-id1349383878?b=1&k=20&m=1349383878&s=170667a&w=0&h=3AbAQ2fZXl0BYLr11F_E8C_OxM_-VP9ZIFJ8n185sVg=" alt=''/>



<div className="titleContent">
<MdOutlineLocalPizza  className="fs-1 text-danger"/>
<h4>Tasty Pizza</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>

</div>

<div className="col">
<img src="https://media.istockphoto.com/photos/assorted-ice-cream-waffle-cones-in-a-row-colorful-different-flavor-on-picture-id1319628800?b=1&k=20&m=1319628800&s=170667a&w=0&h=km4PeiVz6IlyEBRxFMEE_ey82zrJ3zrAkFZic0IbaA8=" alt="" />


<div className="titleContent">
<MdOutlineFreeBreakfast   className="fs-1 text-info"/>
<h4>Tasty ice-cream</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>

</div>

</div>



<div className="row"  data-aos="flip-up">

<div className="col">
<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500" alt="" />



<div className="titleContent">
<GiFruitBowl className="fs-1 text-success"/>
<h4>Tasty fruits</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>
</div>

<div className="col">
<img src="https://media.istockphoto.com/photos/set-of-different-delicious-cakes-isolated-on-white-picture-id1339241159?b=1&k=20&m=1339241159&s=170667a&w=0&h=axux9xV8r1plaPqtD1tzbFhOi4WvrJb9mIzFyzxP4yM=" alt=''/>




<div className="titleContent">
<RiCake2Line  className="fs-1 text-info"/>
<h4>Tasty Sweets</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>

</div>

<div className="col">
<img src="https://images.unsplash.com/photo-1568309344402-e55115e869fe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" />



<div className="titleContent">
<BiDrink  className="fs-1 text-warning"/>
<h4>Tasty Drinks</h4>
<p>s incidunt, nemo nisi quas, dolorem ab minima eligendi!</p>

</div>
</div>

</div>


    </div>
  )
}

export default Special