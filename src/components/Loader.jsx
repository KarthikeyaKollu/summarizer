import React,{useRef,useEffect} from 'react'
import Lottie from 'lottie-web';
import animationData from '../assets/AI-2.json';

export const Loader = () => {

    const LottieAnimation = ({ autoplay, width, height, className }) => {
        const animationContainer = useRef(null);
      
        useEffect(() => {
          const anim = Lottie.loadAnimation({
            container: animationContainer.current,
            animationData: animationData,
            renderer: "svg",
            loop: true,
            autoplay: autoplay
          });
      
          return () => {
            // Cleanup: Pause and destroy the animation when the component unmounts
            anim.stop();
            anim.destroy();
          };
        }, [autoplay]);
        return <div ref={animationContainer} className={className} style={{ width, height }} />;

    }

  return (
    <div><LottieAnimation autoplay={true} width="150px" height="150px"  /></div>
  )
}

