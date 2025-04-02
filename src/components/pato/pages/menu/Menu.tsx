import useFetch from "../../../../hooks/useFetch";
import Aos from "../../../main/modules/aos/Aos";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import "./menu.scss";

function Menu() {
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
  return (
    <section className="pato-menu-container">
      <div className="pato-header pato-menu-header">
        <Aos aosStyle="fadeInUp" once={true}>
          <h3 className="pato-title">pato menu</h3>
        </Aos>
      </div>

      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData?.menu && (
        <>
          <div className="pato-menu-category-wrapper">
            {patoData.menu
              .filter((item) => !item.main)
              .map((item2) => (
                <div className="pato-menu-category-container">
                  <h3 className="pato-subtitle">{item2.category}</h3>
                  {item2.items.map((menuItem) => (
                    <div className="menu-item-container">
                      <div className="menu-item-details">
                        <p className="menu-item-title pato-desc">
                          {menuItem.title}
                        </p>
                        <p className="menu-item-price pato-desc">
                          ${menuItem.price}
                        </p>
                      </div>

                      <p className="menu-item-desc pato-desc">
                        {menuItem.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
          </div>

          {patoData.menu
            .filter((item) => item.main)
            .map((item2) => (
              <>
                <div className="pato-header">
                  <h3 className="pato-title">{item2.category}</h3>
                </div>

                <div className="pato-menu-category-wrapper">
                  {item2.items.map((menuItem) => (
                    <div className="pato-menu-category-container">
                      <div className="pato-menu-item-container">
                        <div className="menu-item-image pato-image-hover-wrapper">
                          <img src={menuItem.image} alt={menuItem.title} />
                        </div>
                        <div className="menu-item-details">
                          <p className="menu-item-title pato-desc">
                            {menuItem.title}
                          </p>
                          <p className="menu-item-desc pato-desc">
                            {menuItem.desc}
                          </p>
                          <p className="menu-item-price pato-desc">
                            ${menuItem.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
        </>
      )}
    </section>
  );
}

export default Menu;
