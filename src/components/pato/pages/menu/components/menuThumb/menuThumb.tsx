import "./menuThumb.scss";
type MenuThumbPropsType = {
  title: string;
  price: number;
  desc: string;
};

function MenuThumb({ title, price, desc }: MenuThumbPropsType) {
  return (
    <div className="menu-item-container">
      <div className="menu-item-details">
        <p className="menu-item-title pato-desc">{title}</p>
        <p className="menu-item-price pato-desc">${price}</p>
      </div>
      <p className="menu-item-desc pato-desc">{desc}</p>
    </div>
  );
}

export default MenuThumb;
