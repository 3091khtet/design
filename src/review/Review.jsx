import "./review.css"



function Review () {

    return(
        
       <div className="reviewCon" id="review">
 <h1  data-aos="fade-down">Oure customer <strong>Review</strong></h1>


<div className="reviewContent d-flex">

  
<div className="firstImgCon"  data-aos="zoom-out-down">
    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" />
    <h5>John Dee</h5>
    <div className="stars">
    <i class="ri-star-smile-fill star"></i>
    <i class="ri-star-smile-fill star   "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-line star text-light "></i>
    
        </div>
        <p className="text-danger">consequatur necessitatibus modi numquam delectus sapiente.</p>
</div>
    
        
<div className="secondImgCon"  data-aos="zoom-out-left">
    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" />
    <h5>Dennis Daniel</h5>
    <div className="stars">
    <i class="ri-star-smile-fill star"></i>
    <i class="ri-star-smile-fill star   "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-line star text-info "></i>
    
        </div>
        <p className="text-light">consequatur necessitatibus modi numquam delectus sapiente.</p>
</div>
  

 
        
<div   className="thirdImgCon"  data-aos="zoom-in">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="" />
    <h5>Diana</h5>
    <div className="stars">
    <i class="ri-star-smile-fill star"></i>
    <i class="ri-star-smile-fill star   "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-fill  star "></i>
    <i class="ri-star-smile-line star text-warning "></i>
    
        </div>
        <p className="text-info">consequatur necessitatibus modi numquam delectus sapiente.</p>
</div>
</div>
 
      
<div className="workCon">
    <div className="food"></div>

    <div className="delivery"></div>

<div className="payment"></div>


<div className="enioy"></div>


</div>



       </div>
        
    
    )
}

export default Review