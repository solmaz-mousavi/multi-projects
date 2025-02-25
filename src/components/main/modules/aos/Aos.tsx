import ReactVisibilitySensor from "react-visibility-sensor";
import "animate.css";
import { useState } from "react";
type AosPropsType = {
  children?: React.ReactNode;
  aosStyle: string;
  once: boolean;
  className?: string;
};

function Aos({ children, aosStyle, once = false, className }: AosPropsType) {
  const [repeat, setRepeat] = useState<boolean>(true);
  const repeatHandler = () => {
    if (once) {
      setRepeat(false);
    }
  };
  return (
    <ReactVisibilitySensor>
      {({ isVisible }: { isVisible: boolean }) => (
        <div className={className}>
          {isVisible && repeat ? (
            <div
              className={`animate__animated animate__${aosStyle}`}
              onAnimationEnd={repeatHandler}
            >
              {children}
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
      )}
    </ReactVisibilitySensor>
  );
}

export default Aos;
