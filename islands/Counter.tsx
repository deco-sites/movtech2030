import { useEffect, useState } from "preact/hooks";
import { useId } from "preact/hooks";
const formatNumber = (num: number): string => {
  const options = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 1 };

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toLocaleString('en-US') + 'B'; // Bilhões
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toLocaleString('en-US') + 'M'; // Milhões
  
  } else {
    return num.toLocaleString('en-US'); // Menos de mil
  }
};
const Counter = ({ number }: { number: number }) => {
  const [current, setCurrent] = useState(0); 
  const [isVisible, setIsVisible] = useState(false); 
  const id = useId(); 

  useEffect(() => {
   
    const animateCounter = () => {
      const increment = number / 100;
      const interval = setInterval(() => {
        setCurrent((prev) => {
          const nextValue = prev + increment;
          if (nextValue >= number) {
            clearInterval(interval);
            return number; 
          }
          return nextValue;
        });
      }, 30);
    };

    if (isVisible) {
      animateCounter();
    }
  }, [isVisible, number]); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      });
    });

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    
    return () => {
      observer.disconnect();
    };
  }, [id]); 
  return <div id={id} class={`text-primary font-bold text-5xl lg:text-[3.5rem]`}>+{formatNumber(Math.floor(current)).replaceAll(`,`,`.`)}</div>;
};

export default Counter;
