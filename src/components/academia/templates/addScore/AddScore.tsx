import "./addScore.scss";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

function AddScore() {
  const stars = [1, 2, 3, 4, 5];
  const [score, setScore] = useState(0);
  useEffect(() => {}, [score]);
  return (
    <div className="academia-add-score-container">
      <div className="academia-comment-title">
        <h3>score the course:</h3>
      </div>

      <div className="academia-add-score">
        {stars.map((item, index) => {
          if (item <= score) {
            return (
              <FaStar
                className="score-icon animate__animated animate__swing"
                key={item}
                onClick={() => setScore(index + 1)}
              />
            );
          } else {
            return (
              <FaRegStar
                className="score-icon animate__animated animate__swing"
                key={item}
                onClick={() => setScore(index + 1)}
              />
            );
          }
        })}
        <p className="score"> ( {score} )</p>
      </div>
    </div>
  );
}

export default AddScore;
