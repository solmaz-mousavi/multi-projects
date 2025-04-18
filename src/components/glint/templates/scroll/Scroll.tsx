import { useEffect, useState } from "react";
import { FaAngleDown, FaAnglesUp } from "react-icons/fa6";
import { ScrollDataType } from "../../../../dataTypes/glintData.type";
import "./scroll.scss";
type ScrollPropsType = {
  scrollPosition: number;
  data: ScrollDataType;
};

// ---- Two sections are overlapping, where one remains fixed and the other dynamically
// ---- adjusts its height based on the main page sections.

function Scroll({ scrollPosition, data }: ScrollPropsType) {
  const [breakPointsData, setBreakPointsData] = useState<number[]>([]);
  const [fixIndex, setFixIndex] = useState<number>(0);
  const [dynIndex, setDynIndex] = useState<number>(0);
  const [breakPointShift, setBreakPointShift] = useState<number>(0);

  // ---- create an array of breakpoints based on sections' height ----
  useEffect(() => {
    let scrollBreakPoints: number[] = [];
    let sectionHeight = 0;

    if (data) {
      data.scrollBreakpoints.forEach((item) => {
        const element = document.getElementById(item.id) as HTMLElement;
        sectionHeight += element.clientHeight;
        scrollBreakPoints.push(sectionHeight);
      });
      setBreakPointsData(scrollBreakPoints);
    }
  }, [data]);

  // ---- determine the position of a scroll component relative to visible sections on the screen
  useEffect(() => {
    if (breakPointsData.length) {
      const sectionIndex = breakPointsData.findIndex(
        (item) => item >= window.innerHeight + scrollPosition
      );

      if (sectionIndex === 0) {
        setFixIndex(0);
        setDynIndex(0);
      } else if (sectionIndex === -1) {
        setFixIndex(0);
        setDynIndex(breakPointsData.length - 1);
      } else {
        setFixIndex(sectionIndex);
        setDynIndex(sectionIndex - 1);
      }

      setBreakPointShift(
        window.innerHeight + scrollPosition - breakPointsData[dynIndex]
      );
    }
  }, [scrollPosition, data, breakPointsData, dynIndex]);

  // ---- scroll down and up btns' handler ----
  const scrollDownHandler = () => {
    const newPosition = scrollPosition + window.innerHeight;
    document
      .getElementById("glint")
      ?.scrollTo({ top: newPosition, behavior: "smooth" });
  };
  const scrollTopHandler = () => {
    document.getElementById("glint")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ---- determine colors of elements ----
  const styleHandler = (index: number) => {
    const styleIndex = Number(data.scrollBreakpoints[index].styleIndex);
    return data.scrollStyles[styleIndex];
  };

  return (
    <>
      {data && (
        <>
				{/* ------------ dynamic section ------------ */}
          <div
            className="glint-scroll-container"
            style={{
              height: `${Math.max(0, 80 - breakPointShift)}px`,
              bottom: `${Math.min(80, breakPointShift)}px`,
            }}
          >
            {/* ---- scroll down btn ---- */}
            <div className="scroll-down">
              <button onClick={scrollDownHandler}>
                <span
                  className="scroll-icon"
                  style={{
                    color: `#${styleHandler(dynIndex).iconColor}`,
                  }}
                >
                  <FaAngleDown />
                </span>
                <span
                  style={{
                    color: `#${styleHandler(dynIndex).txtColor}`,
                  }}
                >
                  scroll down
                </span>
              </button>
            </div>

            {/* ---- spacer ---- */}
            <div
              className="scroll-spacer"
              style={{
                backgroundColor: `#${styleHandler(dynIndex).iconColor}`,
              }}
            ></div>

            {/* ---- scroll up btn ---- */}
            <div className="scroll-up">
              <button onClick={scrollTopHandler}>
                <span
                  style={{
                    color: `#${styleHandler(dynIndex).txtColor}`,
                  }}
                >
                  go top
                </span>
                <span
                  className="scroll-icon"
                  style={{
                    color: `#${styleHandler(dynIndex).iconColor}`,
                  }}
                >
                  <FaAnglesUp />
                </span>
              </button>
            </div>
          </div>

{/* ------------ fix section ------------ */}
          <div className="glint-scroll-container" style={{ zIndex: "1" }}>

            {/* ---- scroll down btn ---- */}
            <div className="scroll-down">
              <button onClick={scrollDownHandler}>
                <span
                  className="scroll-icon"
                  style={{
                    color: `#${styleHandler(fixIndex).iconColor}`,
                  }}
                >
                  <FaAngleDown />
                </span>
                <span
                  style={{
                    color: `#${styleHandler(fixIndex).txtColor}`,
                  }}
                >
                  scroll down
                </span>
              </button>
            </div>

						            {/* ---- spacer ---- */}
            <div
              className="scroll-spacer"
              style={{
                backgroundColor: `#${styleHandler(fixIndex).iconColor}`,
              }}
            ></div>

						            {/* ---- scroll up btn ---- */}
            <div className="scroll-up">
              <button onClick={scrollTopHandler}>
                <span
                  style={{
                    color: `#${styleHandler(fixIndex).txtColor}`,
                  }}
                >
                  go top
                </span>
                <span
                  className="scroll-icon"
                  style={{
                    color: `#${styleHandler(fixIndex).iconColor}`,
                  }}
                >
                  <FaAnglesUp />
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Scroll;
