import { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const [triggered, setTriggered] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 80%",
      onEnter: () => setTriggered(true),
      once: true,
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {triggered ? (
                <CountUp end={item.value} suffix={item.suffix} duration={2.5} />
              ) : (
                0
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
