import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
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
    <ReactVisibilitySensor>
      {({ isVisible }: { isVisible: boolean }) => (
        <div>
          {isVisible && repeat ? (
            <CountUp end={end} onEnd={repeatHandler} />
          ) : (
            <>{end.toLocaleString()}</>
          )}
        </div>
      )}
    </ReactVisibilitySensor>
  );
}
export default CounterUp;
