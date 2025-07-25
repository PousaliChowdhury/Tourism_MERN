import React, {useEffect} from 'react'
import './Feature.css'

import { Link } from 'react-router-dom'

import bestprice from '../Assets/bestprice.png'
import travel from '../Assets/travel.png'
import insurance from '../Assets/insurance.png'
import video1 from '../Assets/video1.mp4'




import Aos from 'aos'
import 'aos/dist/aos.css'




const Feature = () => {




    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])






  return (
    <section className='about section'>
        <div className='secContainer'>
            <h2 data-aos="fade-up" data-aos-duration="2000" className='title'>
                Why Us?
            </h2>


            <div className='mainContent container grid'>
                <div data-aos="fade-up" data-aos-duration="2000" className='singleItem'>
                    <img src={bestprice} alt="Name" />


                    <h3>Get Best Prices</h3>


                    <p>
                    Pay through our application and save thousands and get amazing rewards.
                    </p>


                </div>


                <div data-aos="fade-up" data-aos-duration="2500" className='singleItem'>
                    <img src={travel} alt="Name" />


                    <h3>Plan Your Trip</h3>


                    <p>
                    Plan your dream trip effortlessly with our all-in-one service—luxury stays, fine dining, and top attractions, perfectly arranged for you.
                    </p>


                </div>


                <div data-aos="fade-up" data-aos-duration="3000" className='singleItem'>
                    <img src={insurance} alt="Name" />


                    <h3>Travel Insurance</h3>


                    <p>
                    Covers medical expenses, lost luggage, cancellations and other losses that you can incur while travelling.
                    </p>


                </div>
            </div>


<Link to="/SignUp">

            <div className='videoCard container'>
                <div className='cardContent grid'>
                


                    <div data-aos="fade-right" data-aos-duration="2000" className='cardText'>
                    <h2>Experience the ultimate adventure</h2>
                    <p>
                        Keep travelling and explore new places with us.
                    </p>
                </div>
              


                <div data-aos="fade-left" data-aos-duration="2000" className='cardVideo'>
                    <video src={video1} autoPlay loop muted type='video1/mp4' />
                </div>
            </div>
            </div> </Link>
        </div>
    </section>
  )
}


export default Feature
