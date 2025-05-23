import { MenuDataType } from "../../../../../../dataTypes/patoData.type";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../main/modules/button/Button";
import Aos from "../../../../../main/modules/aos/Aos";
import "./menu.scss";

function Menu({ data }: { data: MenuDataType[] }) {
  const navigate = useNavigate();
  return (
    <section className="pato-home__menu-container">
      <div className="pato-home__menu-header">
        <p className="pato-top-title">Discover</p>
        <h2 className="pato-title">our menu</h2>
      </div>
      <div className="pato-home__menu-content">
        {data &&
          data.map((item, index) => (
            <div
              onClick={() => navigate("/pato/menu")}
              className={`category_${index} pato-home__menu-category  pato-image-hover-wrapper`}
							key={item.id}
            >
              <Aos aosStyle="fadeInUp" once={true}>
                <img src={item.image} alt="" />
                <Button
                  text={item.category}
                  variant="pato-light"
                  border={false}
                  className="pato-home__menu-category-btn"
                />
              </Aos>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Menu;
