const Footer = () => {

    const footerLinks=(element)=>{
        const allFooterLinks = document.querySelectorAll(".footerLinks")

        switch(element){
            case 0:
                allFooterLinks.forEach((item,index) => 
                index===0 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                break;
                case 1:
                    allFooterLinks.forEach((item,index) => 
                    index===1 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                    break;
                    case 2:
                    allFooterLinks.forEach((item,index) => 
                    index===2 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                    break;
                    case 3:
                        allFooterLinks.forEach((item,index) => 
                        index===3 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                        break;
                    case 4:
                        allFooterLinks.forEach((item,index) => 
                        index===4 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                        break;
                    case 5:
                    allFooterLinks.forEach((item,index) => 
                    index===5 ? (item.style.opacity=1):(item.style.opacity = 0.2) );
                    break;

                default:
                    allFooterLinks.forEach((item)=>(item.style.opacity=1))
                break;
        }

    }
const linksbacktoNormal =()=>{
    const allFooterLinks = document.querySelectorAll(".footerLinks")
    allFooterLinks.forEach((item)=>(item.style.opacity=1))

}
  return (
    <>
    <footer>
        <h1>lets
            <br />
                #ConnectOnCutting?
        </h1>
    <aside onMouseLeave={linksbacktoNormal}>
        <a href="" className="footerLinks" onMouseOver={()=>footerLinks(0)} data-cursorpointermini={true}>Home</a>
        <a href="/story" className="footerLinks" onMouseOver={()=>footerLinks(1)} data-cursorpointermini={true}>Story</a>
        <a href="/media" className="footerLinks" onMouseOver={()=>footerLinks(2)} data-cursorpointermini={true}>Media</a>
        <a href="/franshise" className="footerLinks" onMouseOver={()=>footerLinks(3)} data-cursorpointermini={true}>Franchise</a>
        <a href="/event" className="footerLinks" onMouseOver={()=>footerLinks(4)} data-cursorpointermini={true}>Event</a>
        <a href="/chaiwalacares" className="footerLinks" onMouseOver={()=>footerLinks(5)} data-cursorpointermini={true}>Chai Wala Cares</a>
    </aside>
    <div>
        <h5>Email</h5>
        <a href="mailto:info@site.com">info@site.com</a>
        <a href="mailto:info@site.com">franchise@site.com</a>
        <h5>For More Projects : metaaffinity.net</h5>
    </div>
    <div>
        <h5>phone</h5>
        <a href="tel:+123456789">+123456789</a>
    </div>

<p> COPYRIGHT 2022 MBA CHAIWALA. MADE BY IMRAN</p><br />



    </footer>

<div className='footer'></div>  
    </>
  )
}

export default Footer