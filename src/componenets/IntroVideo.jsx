
import video from "../assets/MBA Chai Wala.mp4"
const IntroVideo = () => {
  return (
    <div className='intro'>

    <video className="video-background" src={video} muted autoPlay loop controlsList='nodownload'></video>
    <div></div>

    </div>
  )
}

export default IntroVideo