import { useState } from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
type CounterUpPropsType = {
  end: number;
  once: boolean;
  className?: string;
};

// When a <div> is placed between two component tags,
// it should start incrementing numerically from 1 to
// a specified end number as soon as it appears on the screen

function CounterUp({ end, once, className }: CounterUpPropsType) {
  const [repeat, setRepeat] = useState<boolean>(true);
  const repeatHandler = () => {
    if (once) {
      setRepeat(false);
    }
  };
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView && repeat ? (
            <CountUp
              end={end}
              onEnd={repeatHandler}
              className={className ? className : ""}
            />
          ) : (
            <>{end.toLocaleString()}</>
          )}
        </div>
      )}
    </InView>
  );
}
export default CounterUp;
