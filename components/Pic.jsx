import React from 'react'
import "./Pic.css";
import gal1 from "../Assets/gal1.jpg";
 import gal2 from "../Assets/gal2.jpg";
 import gal3 from "../Assets/gal3.jpg";
 import gal4 from "../Assets/gal4.jpg";
  import gal5 from "../Assets/gal5.jpeg";
  import gal6 from "../Assets/gal6.jpg";
 import gal7 from "../Assets/gal7.jpg";
 import gal8 from "../Assets/gal8.jpg";
 import gal9 from "../Assets/gal9.jpg";
 import gal11 from "../Assets/gal11.jpg";
 import fd1 from "../Assets/fd1.jpg";
 import fd2 from "../Assets/fd2.jpg";
 import fd3 from "../Assets/fd3.jpg";
 import fd from "../Assets/fd.jpg";
  import fd5 from "../Assets/fd5.jpg";
  import fd6 from "../Assets/fd6.jpg";
 import fd7 from "../Assets/fd7.jpg";
 import fd8 from "../Assets/fd8.jpg";
 import fd9 from "../Assets/fd9.jpg";
 import fd10 from "../Assets/fd10.jpg";
 import fd11 from "../Assets/fd11.jpg";
 import fd12 from "../Assets/fd12.jpg";
 import fd13 from "../Assets/fd13.jpg";
 import fes1 from "../Assets/fes1.jpg";
 import fes2 from "../Assets/fes2.jpg";
 import fes3 from "../Assets/fes3.jpg";
 import fes4 from "../Assets/fes4.jpg";
 import fes5 from "../Assets/fes5.jpg";
 import fes6 from "../Assets/fes6.jpg";
 import fes7 from "../Assets/fes7.jpg";
 import fes8 from "../Assets/fes8.jpg";
 import fes9 from "../Assets/fes9.jpg";
 import fes10 from "../Assets/fes10.jpg";

 
const Pic =() =>{
    return(
        <>
           
            <section className="Gallery" id="Gallery">
                <div className="heading">
                    <br></br>
                    <br></br>
                    <h1 className='tour'><b><u>Tourist Places</u></b></h1>
                    <br></br>
                </div>

                <div className="box-container">
                    <div className="box">
                        <img src={gal1} alt=""></img>
                       
                        <h3>Hawa Mahal</h3>

                    </div>
                    <div className="box">
                        <img src={gal2} alt=""></img>
                       
                        <h3>Red Fort</h3>

                    </div>
                    <div className="box">
                        <img src={gal3} alt=""></img>
                       
                        <h3>Char Minar</h3>

                    </div>
                    <div className="box">
                        <img src={gal4} alt=""></img>
                       
                        <h3>Switzerland</h3>

                    </div>
                    <div className="box">
                        <img src={gal5} alt=""></img>
                       
                        <h3>Dubai</h3>

                    </div>
                    <div className="box">
                        <img src={gal6} alt=""></img>
                       
                        <h3>Maldives</h3>

                        <div className="box">
                        <img src={gal7} alt=""></img>
                       
                        <h3>Bali</h3>

                        <div className="box">
                        <img src={gal8} alt=""></img>
                       
                        <h3>Gangtok</h3>

                        <div className="box">
                        <img src={gal9} alt=""></img>
                       
                        <h3>Nepal</h3>
 
                          <div className="box">
                        <img src={gal11} alt=""></img>
                       
                        <h3>Benaras</h3>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="Gallery" id="Gallery">
                <div className="heading" >
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1><b><u>Food</u></b></h1>
                    <br></br>
                </div>

                <div className="box-container">

                    <div className="box">
                        <img className='ri' src={fd1} alt=""></img>
                       
                        <h3>Biriyani</h3>

                    </div>
                    <div className="box">
                        <img src={fd2} alt=""></img>
                       
                        <h3>Sushi</h3>

                    </div>
                    <div className="box">
                        <img src={fd3} alt=""></img>
                       
                        <h3>Pani Puri</h3>

                    </div>
                    <div className="box">
                        <img src={fd} alt=""></img>
                       
                        <h3>Taccos</h3>

                    </div>
                    <div className="box">
                        <img src={fd5} alt=""></img>
                       
                        <h3>Noodles</h3>

                    </div>
                    <div className="box">
                        <img src={fd13} alt=""></img>
                       
                        <h3>Jap chae</h3>

                    </div>
                    <div className="box">
                        <img src={fd11} alt=""></img>
                       
                        <h3>Pizza</h3>

                    </div>
                    <div className="box">
                        <img src={fd6} alt=""></img>
                       
                        <h3>Momos</h3>

                    <div className="box">
                        <img src={fd7} alt=""></img>
                       
                        <h3>Dosa</h3>

                    <div className="box">
                        <img src={fd8} alt=""></img>
                       
                        <h3>Jalebi</h3>

                    <div className="box">
                        <img src={fd9} alt=""></img>
                       
                        <h3>Pav Bhaji</h3>
 
                    <div className="box">
                        <img className='ni' src={fd10} alt=""></img>
                       
                        <h3>Waffel</h3>

                    <div className="box">
                        <img className='ni' src={fd12} alt=""></img>
                       
                        <h3>Pad Thai</h3>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>                  
                </div>
            </section>

            <section className="Gallery">
                <div className="heading">
                    <br></br>
                    <br></br>
                    <h1><b><u>Festivals</u></b></h1>
                    <br></br>
                </div>

                <div className="box-container">
                    <div className="box">
                        <img  src={fes1} alt=""></img>
                       
                        <h3>Christmas</h3>

                    </div>
                     <div className="box">
                        <img src={fes2} alt=""></img>
                       
                        <h3>Durga Puja</h3>

                    </div>
                    <div className="box">
                        <img src={fes3} alt=""></img>
                       
                        <h3>Kanto</h3>

                    </div>
                    <div className="box">
                        <img src={fes6} alt=""></img>
                       
                        <h3>Glastonbury</h3>

                    </div>
                    <div className="box">
                        <img src={fes5} alt=""></img>
                       
                        <h3>Diwali</h3>

                    </div>
                    <div className="box">
                        <img src={fes4} alt=""></img>
                       
                       <h3>Songkran</h3>

                    <div className="box">
                        <img src={fes7} alt=""></img>
                       
                        <h3>Seoul Lantern</h3>

                    <div className="box">
                        <img src={fes8} alt=""></img>
                       
                        <h3>Holi</h3>

                    <div className="box">
                        <img src={fes9} alt=""></img>
                       
                        <h3>Avignon</h3>
                    <div className="box">
                        <img className='ni'  src={fes10} alt=""></img>
                       
                        <h3>Dragon Boat</h3>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            </section>
        </>  
    )
}
export default Pic
