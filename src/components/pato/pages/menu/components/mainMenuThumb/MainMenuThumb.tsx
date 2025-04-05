import "./mainMenuThumb.scss";
type MainMenuThumbPropsType = {
  image?: string;
  title: string;
  price: number;
  desc: string;
};
function MainMenuThumb({ image, title, desc, price }: MainMenuThumbPropsType) {
  return (
    <div className="pato-menu-category-container">
      <div className="pato-menu-item-container">
        <div className="menu-item-image pato-image-hover-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="menu-item-details">
          <p className="menu-item-title pato-desc">{title}</p>
          <p className="menu-item-desc pato-desc">{desc}</p>
          <p className="menu-item-price pato-desc">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default MainMenuThumb;
