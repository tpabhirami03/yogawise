import React from 'react'
import { Activity, Check, Smile } from 'react-feather'

function Services() {
  return (
    <div className="services section-padding" id="services">
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-header text-center">
                <h2>Our<span>Services</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>

              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="single-service text-center">
               
                <Activity />
                <h2>Anxiety Relief</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam ipsum similique, saepe laudantium voluptate nisi suscipit placeat nesciunt quaerat sequi exercitationem accusantium neque eaque? Enim earum fugit placeat sequi!</p>
                <a href="#">Learn More</a>
                
              </div>
            </div>

            <div class="col-lg-4">
              <div class="single-service text-center">
                <Smile />
                <h2>Reduce Stress</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam ipsum similique, saepe laudantium voluptate nisi suscipit placeat nesciunt quaerat sequi exercitationem accusantium neque eaque? Enim earum fugit placeat sequi!</p>
                <a href="#">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="single-service text-center">
                
                <Check />
                <h2>life Balancing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam ipsum similique, saepe laudantium voluptate nisi suscipit placeat nesciunt quaerat sequi exercitationem accusantium neque eaque? Enim earum fugit placeat sequi!</p>
                <a href="#">Learn More</a>
              </div>
            </div>

          </div>

        </div>
      </div>
  )
}

export default Services