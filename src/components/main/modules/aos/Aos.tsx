import { useEffect, useRef, useState } from "react";
import "./aos.scss";
type AosPropsType = {
  children?: React.ReactNode;
  aosStyle?: "fadeUp" | "fadeDown";
  className?: string;
};

function Aos({ children, aosStyle, className }: AosPropsType) {
  const ref = useRef<HTMLDivElement>(null);
let 	elementBottomHeight :  any;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (elementBottomHeight && elementBottomHeight-5 <= window.innerHeight) {
      setIsVisible(true);
    }
  }, [elementBottomHeight]);

	useEffect(() => {
		elementBottomHeight = ref.current?.getBoundingClientRect().bottom;
    if (elementBottomHeight && elementBottomHeight-200 <= window.innerHeight) {
      setIsVisible(true);
    }
		console.log(elementBottomHeight);
  }, []);

  return (
    <div
      className={`${className} ${isVisible ? `${aosStyle}` : "hidden"}`}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default Aos;
