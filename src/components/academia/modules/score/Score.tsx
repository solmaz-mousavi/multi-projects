
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Score({ score }: { score: number }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="score-container">
      {stars.map((item, index) => {
        if (item <= score) {
          return <FaStar className="score-icon" key={index} />;
        } else if (item < score + 1) {
          return <FaStarHalfAlt className="score-icon" key={index} />;
        } else {
          return <FaRegStar className="score-icon" key={index} />;
        }
      })}
    </div>
  );
}

export default Score;
