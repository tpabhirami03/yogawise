import React from 'react'
import { Calendar, Clock, Heart, Users } from 'react-feather';






function Status() {
  return (
  
    <div className="stats section-padding " style={{backgroundColor:'rgb(98, 184, 213)'}}>
    <div className="container">
      <div class="row">
        <div class="col-lg-3 col-md-6" style={{color:'white'}}>
          <div class="single-number text-center">
          <Calendar color='white'/>
            
            <h2>1500+</h2>
            <p>Yoga Conducted</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" style={{color:'white'}}>
          <div class="single-number text-center">
            <Heart color='white'/>
            <h2>80+</h2>
            <p>Yoga Classes</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" style={{color:'white'}}>
          <div class="single-number text-center">
           <Clock color='white'/>
            <h2>15+</h2>
            <p>Years Of Experiences</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6" style={{color:'white'}}>
          <div class="single-number text-center">
           <Users color='white'/>
            <h2>5280+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Status