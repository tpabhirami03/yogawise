import React from 'react'
import { Facebook, Instagram, Twitter } from 'react-feather'




function Trainers() {
  return (
    <div className='trainer section-padding' id='trainer'>
        <div className='container'>
            <div className='row'>
                <div class='col-lg-12'>
                    <div class='section-header text-center' > 
                    <h2>Our<span>Trainers</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>

                    </div>

                </div>

            </div>

            <div class="row">
                <div className="col-lg-4">
                    <div className="single-trainer text-center">
                        <div className="card">
                            <img src="https://t3.ftcdn.net/jpg/01/29/57/42/360_F_129574257_dRatFS0QowZBK3bxCA1dqG7ZQeHvYSV2.jpg" alt=""
                            class="card-img-top" />
                            <div className="card-body">
                                <h5 class="card-title">Jane Davis</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis deleniti quam sunt aliquam animi, facere, quibusdam quos quasi praesentium odio illum nam? Quia odit officia et omnis ipsam! Cumque!</p>
                                <Facebook /> 
                                  <Twitter/>
                                   <Instagram /> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-trainer text-center">
                        <div className="card">
                            <img src="https://www.attainbyaetna.com/content/dam/aetna/images/apollo/amir_headshot.jpg" alt=""
                            class="card-img-top" />
                            <div className="card-body">
                                <h5 class="card-title">Nizafir Akd</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis deleniti quam sunt aliquam animi, facere, quibusdam quos quasi praesentium odio illum nam? Quia odit officia et omnis ipsam! Cumque!</p>
                               
                                   <Facebook /> 
                                   <Twitter /> 
                                   <Instagram />                              
                                    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-trainer text-center">
                        <div className="card">
                            <img src="https://images.squarespace-cdn.com/content/v1/5643688ce4b071704e354dc1/1603892664604-NOIBGCEOWW5ME7WE02CB/DSC_2094.jpg?format=1000w" alt=""
                            class="card-img-top" />
                            <div className="card-body">
                                <h5 class="card-title">Kamala James</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis deleniti quam sunt aliquam animi, facere, quibusdam quos quasi praesentium odio illum nam? Quia odit officia et omnis ipsam! Cumque!</p>
                                <Facebook /> 
                                   <Twitter /> 
                                   <Instagram /> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Trainers