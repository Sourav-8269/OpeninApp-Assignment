import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const ScrollDownTransition = () => {
    const router = useRouter();
    const scrollRef = useRef(null);
  
    const handleScrollDown = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const remainingHeight = scrollHeight - clientHeight;
      window.scrollTo({
        top: remainingHeight,
        behavior: 'smooth',
      });
    };
  
    const handleNextPage = () => {
      router.push('/next-page'); // Replace '/next-page' with your desired destination URL
    };
  
    return (
      <div ref={scrollRef} className="scroll-down-transition">
        <button onClick={handleScrollDown} className="scroll-down-button">
          Scroll Down
        </button>
        <button onClick={handleNextPage} className="next-page-button">
          Next Page
        </button>
      </div>
    );
  };
  
  export default ScrollDownTransition;
  