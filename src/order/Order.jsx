import "./order.css"
import Typography from "@mui/material/Typography"

import Aos from "aos"


function Order() {


Aos.init()
  
  return (
  <div className="orderCon" id="order">

<Typography variant="h3" className="text-warning">Order <strong>Now</strong></Typography>

<div className="orderContent">
  
<img data-aos="fade-up-left" src="https://media.istockphoto.com/photos/smiling-waitress-serving-dessert-in-restaurant-picture-id1359351220?b=1&k=20&m=1359351220&s=170667a&w=0&h=ke4CkSierAX7DITriX1TugRiYUHVXsISbboitev6KDM=" alt="" />


<div className="orderBox" data-aos="fade-down">

<div className="orderInput">
  <input type="text" data-aos="fade-left"/>
  <input type="text" data-aos="fade-left"/>
  <input type="text"  data-aos="fade-up-right"/>
  <input type="text"  data-aos="fade-up-right"/>
</div>


<textarea   data-aos="fade-up-left"></textarea>

<button  data-aos="fade-up-right">Order Hire! now</button>

</div>
</div>


  </div>
  )
}

export default Order