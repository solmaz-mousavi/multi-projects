import { useEffect, useState } from "react";
import "animate.css";
import "./aos.scss";
import { InView } from "react-intersection-observer";
type AosPropsType = {
  children?: React.ReactNode;
  aosStyle: string;
  once?: boolean;
  className?: string;
  unMountStyle?: string;
};
function Aos({
  children,
  aosStyle,
  once = false,
  className,
  unMountStyle,
}: AosPropsType) {
  const [unMount, setUnMount] = useState(false);
  const [repeat, setRepeat] = useState<boolean>(true);
  const repeatHandler = () => {
    if (once) {
      setTimeout(function () {
        setRepeat(false);
      }, 1000);
    }
  };
  useEffect(() => {
    return () => {
      setUnMount(true);
      setTimeout(function () {}, 1000);
    };
  }, [unMount]);

  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <div className={className}>
            <div
              className={`${
                !repeat
                  ? ""
                  : `${
                      inView
                        ? `animate__animated animate__${aosStyle}`
                        : "hidden"
                    }`
              } ${
                unMount ? `animate__animated animate__${unMountStyle}` : "ttt"
              }`}
              onAnimationEnd={repeatHandler}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default Aos;
