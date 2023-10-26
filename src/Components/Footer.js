import React from 'react'
import { Facebook, Twitter ,Instagram, Youtube } from 'react-feather'


function Footer() {
  return (
        <div className="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-content text-center">
                     <p>All Right Reserved</p>
                 
                                 <Facebook className='fb' /> 
                                   <Twitter  className='tw'/> 
                                   <Instagram className='in' />  
                                   <Youtube className='yo' />
                     
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Footer