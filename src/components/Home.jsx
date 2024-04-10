import React from "react";
import img5 from "../assets/img1.jpg";
import img22 from "../assets/img2.jpg";
import img44 from "../assets/img4.jpg";
import img6 from "../assets/img11.png";
// import img7 from "../assets/img10.jpg";
import vg from "../assets/img3.jpg";
import img1 from "../assets/img12.jpg";
import img2 from "../assets/img5.jpg";
import img3 from "../assets/img7.jpg";
import img4 from "../assets/img8.png"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        
        <Carousel infiniteLoop autoPlay showStatus = {false} showThumbs={false} showArrows={false} interval={1500}>
            <div>
                <img src={img5} alt="img"/> 
            </div>
            <div>
                <img src={img22} alt="img"/>
                {/* <p className="legend">Secure Your Data</p> */}
            </div>
            <div>
                <img src={vg} alt="img"/> 
            </div>
            <div>
                <img src={img44} alt="img"/> 
            </div>
 
        </Carousel>
        
      </div>
      <div className="home2" id="blogs">
        <img src={img6} alt= "Img" />
        <div>
            <p>
            The Indian Army boasts a robust defense system, fortified by cutting-edge technology and strategic initiatives. One crucial aspect of this system is its formidable array of missile defense capabilities. With the successful development and deployment of systems like the Prithvi Air Defence (PAD) and the Advanced Air Defence (AAD) missiles, India has fortified its skies against incoming threats. These systems are designed to intercept and neutralize enemy missiles at various altitudes, providing a multi-layered shield of protection. Additionally, India's indigenous Ballistic Missile Defence (BMD) program showcases the nation's self-reliance in defense technology, reducing dependency on foreign suppliers. Furthermore, the Indian Army's integrated air defense network, equipped with radar systems and surface-to-air missiles, ensures comprehensive coverage against aerial threats. Such advancements underscore India's commitment to bolstering its defense capabilities and safeguarding its sovereignty in the face of evolving security challenges.
            </p>
        </div>
      </div>
      <div className="home3" id="services">
        <h1>Our Services</h1>
        <div className="lwr">
        <div className="elm1">
            <img src = {img2} alt = "students img" id="learn"/> 
            <button src="">Intruder</button>
        </div>
        <div className="elm1">
            <img src = {img3} alt = "experts img"/>
            <button src="">Join Our Room</button>
        </div>
        <div className="elm1">
            <img src = {img1} alt = "community img"/>
            <button src="">About Defence</button>
        </div>
        </div>
        
      </div>
      <div className="home4" id="about">
        <div className="who">
            <h1>Who are we ?</h1>
            <p>## ARMS: Revolutionizing Security with Unrivaled Vigilance!

Imagine a security solution that transcends mere detection – it delivers absolute supremacy against intrusion attempts. That's ARMS. Our cutting-edge technology *PIONEERS* the domain of security, relentlessly scouring for any unauthorized access attempts and *SWIFTLY* capturing visual evidence of perpetrators. With ARMS, no intruder can evade our vigilant watch.

*The moment an unauthorized individual breaches your perimeter, their image is* *IMMEDIATELY* enshrined in our database of unauthorized entries. *COMMAND CENTERS RECEIVE AN INSTANT INFLUX* of alerts, accompanied by a resounding declaration echoing across all designated communication channels.

*Trespassers are* *JOLTED* out of their anonymity. *IDENTIFICATION IS SWIFT. **DETERRENCE IS IMMEDIATE.** ARMS doesn't just manage security threats – it **ERADICATES** them before they even have a chance to escalate!</p>
        </div>
        <div className="what">
            <h1>What we do ?</h1>
            <p>## ARMS: Don't Just See Intruders, *STOP* Them In Their Tracks!

Imagine a security system that doesn't just detect – it *DOMINATES* intrusion attempts.  That's ARMS.  Our advanced computer vision model *HUNTS* for unauthorized personnel, *INSTANTANEOUSLY* capturing their photo evidence.  *NO INTRUDER ESCAPES* our watchful gaze.

*The second a trespasser breaches your perimeter, their image is*  *EMBLAZONED* across our website's unregistered entry list.  *BASE CAMPS RECEIVE AN IMMEDIATE ONSLAUGHT* of alerts, with a clear message *THUNDERING* over the designated channel.  

*Intruders are* *SHATTERED* from anonymity.  *IDENTIFICATION IS SWIFT.  **DETERRENCE IS INSTANTANEOUS.  ARMS doesn't just manage security threats – it **CRUSHES* them before they escalate!</p>
        </div>
      </div>
      <div className="home5" id="contact">
          
      </div>
    </>
  );
};

export default Home;
