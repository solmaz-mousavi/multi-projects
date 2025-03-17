import "./welcome.scss";

function Welcome() {
  return (
    <div className="pato-home-welcome-container">
      <div className="pato-home-welcome__txt">
        <div className="pato-home-welcome__txt-title pato-top-title">Welcome To Italian Restaurant</div>
        <div className="pato-home-welcome__txt-desc">
          Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
          fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
          facilisis ligula sem id neque.
        </div>
      </div>
      <div className="pato-home-welcome__img">
				<img src="/assets/images/pato/welcome.webp" alt="" />
			</div>
    </div>
  );
}

export default Welcome;
