import { useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "animate.css";
import "./aos.scss";
type AosPropsType = {
  children?: React.ReactNode;
  aosStyle: string;
  once?: boolean;
  className?: string;
};

function Aos({ children, aosStyle, once = false, className }: AosPropsType) {
  const ref = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState<boolean>(true);
  const repeatHandler = () => {
    if (once) {
      setTimeout(function () {
        setRepeat(false);
      }, 1000);
    }
  };
  return (
    <ReactVisibilitySensor
      ref={ref}
      partialVisibility={true}
      offset={{ top: 10 }}
      active={true}
    >
      {({ isVisible }: { isVisible: boolean }) => (
        <div className={className}>
          <div
            className={`${
              !repeat
                ? ""
                : `${
                    isVisible
                      ? `animate__animated animate__${aosStyle}`
                      : "hidden"
                  }`
            }`}
            onAnimationEnd={repeatHandler}
          >
            {children}
          </div>
        </div>
      )}
    </ReactVisibilitySensor>
  );
}

export default Aos;
