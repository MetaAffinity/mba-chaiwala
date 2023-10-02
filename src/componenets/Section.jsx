import { easeIn, motion } from "framer-motion"
const Section = ({h3, text, hasBtn=true, btnTxt, imgSrc, imgSize="70%", backgroundColor, headingColor, textcolor, btnBgColor, btnColor }) => {
  

    {/* For inline:  initial={{y:"100%", opacity:0,}} whileInView={{y:0, opacity:1}} */}
  const headinAnimOptions = {
    initial:{
        y:"-100%",
        opacity: 0,
    },
    whileInView:{
        y:0,
        opacity:1,
    },
  };
  const textAnimOptions = {
    ...headinAnimOptions,
    transition:{
        delay:0.3,
    }
  };
  const buttonAnimOptions = {
    initial:{
        y:"100%",
        opacity: 0,
    },
    whileInView:{
        y:0,
        opacity:1,
    },
    transition:{
        delay:0.3,
        ease:"easeIn",
    }
  };
  const imgAnimOptions = {
    initial:{
        scale:0.1,
        opacity: 0,
    },
    whileInView:{
        scale:1,
        opacity:1,
    },
    transition:{
        delay:0.3,
    }
  };
    return (
    <section className='section' style={{backgroundColor}}>
        <div>
            <motion.h3 style={{color:headingColor}} data-cursorpointer={true} {...headinAnimOptions}>{h3}</motion.h3>
            <motion.p style={{color:textcolor}} data-cursorpointer={true} {...textAnimOptions}>{text}</motion.p>
            {hasBtn && <motion.button style={{color:btnColor, backgroundColor:btnBgColor}} data-cursorpointer={true} {...buttonAnimOptions}>{btnTxt}</motion.button>}
            <motion.div {...imgAnimOptions}> 
                <img src={imgSrc} alt="imgsrc" style={{width:imgSize}} />
            </motion.div>
        </div>
        
    </section>
  )
}

export default Section