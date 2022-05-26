import React from 'react'
import "./home.css"
import {Typography} from "@mui/material"


function Home() {
  return (
<>
<div className="homeCon" id="home" >

<div className="homeContent"  data-aos="fade-down">
<Typography variant="h3" className="homeTypo"  data-aos="flip-down">Food Made with Love</Typography>
<p className="fs-4"  data-aos="fade-up-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis quod vero ipsum voluptas praesentium optio delectus illo error magnam asperiores neque cupiditate aliquam adipisci, vel exercitationem id harum officiis!</p>
<button  data-aos="fade-down-right">Order Now</button>
</div>



<img  data-aos="fade-up-right" src="https://media.istockphoto.com/photos/burger-picture-id182744943?b=1&k=20&m=182744943&s=170667a&w=0&h=yrmQbTtYbX1u6dgIKyqNSNRHXZCof8jHABKTAOWi7_c=" alt="" />

</div>
</>
  )
}

export default Home