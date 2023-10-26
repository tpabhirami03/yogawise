
import { Button } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel data-bs-theme="dark">
       <Carousel.Item>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:'url("https://i.pinimg.com/originals/6c/9c/bb/6c9cbb2b1f9aeeccd530cb4e3b3e3294.jpg")',
               backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
                <h1>Healthy <span class="text-info">Lifestyle</span></h1>
                <p id='sp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis architecto maiores necessitatibus quos omnis? Magnam animi porro voluptate adipisci quam magni cupiditate, optio quidem? Eum, dignissimos dolorem! Id, tenetur?</p>

                <a href="#"  id='a1'>Learn More</a>

                
            

        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:'url("https://images.onlymyhealth.com//imported/images/2023/January/20_Jan_2023/main_yoga.jpg")',
               backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
                <h1>Healthy <span class="text-info">Lifestyle</span></h1>
                <p id='sp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis architecto maiores necessitatibus quos omnis? Magnam animi porro voluptate adipisci quam magni cupiditate, optio quidem? Eum, dignissimos dolorem! Id, tenetur?</p>

                <a href="#"  id='a1'>Learn More</a>

                
            

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:'url("https://www.sleepfoundation.org/wp-content/uploads/2021/01/yoga-outside.jpg")',
               backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
                <h1>Increased<span class="text-info">Flexibility</span></h1>
                <p id='sp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit, in deleniti beatae aliquid voluptas quia quam dolorem consectetur, accusantium reiciendis quas alias, minima blanditiis nemo culpa rem ea architecto.</p>
                <a href="#" id='a1'>Learn More</a>




        </div>
      </Carousel.Item>
    </Carousel>

    

    
  );
}

export default Home;