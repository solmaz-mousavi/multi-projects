import { useState } from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
type CounterUpPropsType = {
  end: number;
  once: boolean;
};

function CounterUp({ end, once }: CounterUpPropsType) {
  const [repeat, setRepeat] = useState<boolean>(true);
  const repeatHandler = () => {
    if (once) {
      setRepeat(false);
    }
  };
  return (
    <InView>
      {({ inView, ref }) => (
        <div>
          {inView && repeat ? (
            <CountUp end={end} onEnd={repeatHandler} />
          ) : (
            <>{end.toLocaleString()}</>
          )}
        </div>
      )}
    </InView>
  );
}
export default CounterUp;
