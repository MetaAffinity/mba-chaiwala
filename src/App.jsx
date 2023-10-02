import {useEffect, useState} from 'react'
import "./styles/App.scss"
import "./styles/Intro.scss"
import "./styles/Section.scss"
import "./styles/Footer.scss"
import "./styles/misc.scss"
import "./styles/mediaQuery.scss"

import freshTopic2img from "./assets/story.png"
import freshTopicimg from "./assets/academy.png"
import tedTalksimg from "./assets/in-the-news.gif"
import franchiseimg from "./assets/franchise.gif"
import mapimg from "./assets/locations.png"
import courcesimg from "./assets/image2.png"
import albumImg from "./assets/mba-cares.gif"
import baratImg from "./assets/image1.png"
import chaiwalaImg from "./assets/image3.png"

import IntroVideo from './componenets/IntroVideo'
import Section from './componenets/Section'
import Footer from './componenets/Footer'
import data from "./data/data.json"
import Misc from './componenets/Misc'
import Loader from "./componenets/Loader";


// $yellow:#fff100;
// $pink:#ed1e79;
// $red:#d20120;
// $white:#fff;
// $brown:#6d3d0f;
const yellow = "#fff100", pink = "#ed1e79", white="#fff", brown = "#6d3d0f"

const App = () => {

const {freshTopic, freshTopic2, tedTalks, franchise,map, courses,album,barat,chaiwala} = data;

const [loading, setLoading] = useState(true);

const dotCursor = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.top = `${e.pageY - 14}px`;
  cursor.style.left = `${e.pageX - 14}px`;

  const element = e.target;
  if(element.getAttribute("data-cursorpointer")){
    cursor.classList.add("cursorHover")
  }else if (element.getAttribute("data-cursorpointermini")) {
    cursor.classList.add("cursorHoverMini");
  }
  else{
    cursor.classList.remove("cursorHover")
    cursor.classList.remove("cursorHoverMini")
  }
}
useEffect(() => {
  window.addEventListener("mousemove", dotCursor);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => {
    window.removeEventListener("mousemove", dotCursor);
  };
}, []);

  return (
    <div>
{loading && <Loader />}
    <IntroVideo />
    {/* Fresh Topic*/ }
    <Section 
    h3={freshTopic.heading} 
    text={freshTopic.text} 
    btnTxt={freshTopic.btn} 
    imgSrc={freshTopicimg}
    
    backgroundColor={pink} 
    headingColor={yellow} 
    textcolor={yellow} 
    btnBgColor={yellow} 
    btnColor={pink}
    />
    {/*freshTopic 2*/}
    <Section 
    h3={freshTopic2.heading} 
    text={freshTopic2.text} 
    btnTxt={freshTopic2.btn} 
    imgSrc={freshTopic2img}
    
    backgroundColor={pink} 
    headingColor={yellow} 
    textcolor={yellow} 
    btnBgColor={yellow} 
    btnColor={pink}
    />
{/*tedTalks*/ }
  <Section 
    h3={tedTalks.heading} 
    text={tedTalks.text} 
    btnTxt={tedTalks.btn} 
    imgSrc={tedTalksimg}
    
    backgroundColor={yellow} 
    headingColor={pink} 
    textcolor={pink} 
    btnBgColor={pink} 
    btnColor={yellow}
    />

    {/*franchise*/ }
  <Section 
    h3={franchise.heading} 
    text={franchise.text} 
    btnTxt={franchise.btn} 
    imgSrc={franchiseimg}
    
    backgroundColor={white} 
    headingColor={pink} 
    textcolor={brown} 
    btnBgColor={brown} 
    btnColor={yellow}
    />

        {/*map*/ }
  <Section 
    h3={map.heading} 
    text={map.text} 
    imgSrc={mapimg}
    backgroundColor={pink} 
    headingColor={yellow} 
    textcolor={yellow} 
    btnBgColor={pink} 
    btnColor={yellow}
    hasBtn={false}
    />

            {/*cource*/ }
  <Section 
    h3={courses.heading} 
    text={courses.text} 
    imgSrc={courcesimg}
    imgSize={"30%"}
    btnTxt={courses.btn}
    backgroundColor={yellow} 
    headingColor={pink} 
    textcolor={pink} 
    btnBgColor={pink} 
    btnColor={yellow}
    />

                {/*album*/ }
  <Section 
    h3={album.heading} 
    text={album.text} 
    imgSrc={albumImg}
    btnTxt={album.btn}
    backgroundColor={white} 
    headingColor={pink} 
    textcolor={brown} 
    btnBgColor={brown} 
    btnColor={yellow}
    />

    {/* barat */ }
  <Section 
    h3={barat.heading} 
    text={barat.text} 
    imgSrc={baratImg}
    btnTxt={barat.btn}
    backgroundColor={pink} 
    headingColor={yellow} 
    textcolor={yellow} 
    btnBgColor={yellow} 
    btnColor={pink}
    />

        {/* chaiwala */ }
  <Section 
    h3={chaiwala.heading} 
    text={chaiwala.text} 
    imgSrc={chaiwalaImg}
    btnTxt={chaiwala.btn}
    backgroundColor={white} 
    headingColor={pink} 
    textcolor={brown} 
    btnBgColor={brown} 
    btnColor={yellow}
    />

    <Footer />
    <Misc />
    </div>
  )
}

export default App