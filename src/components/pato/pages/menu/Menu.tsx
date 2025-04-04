import useFetch from "../../../../hooks/useFetch";
import Error from "../../../main/templates/error/Error";
import Loader from "../../../main/templates/loader/Loader";
import Header from "../../templates/header/Header";
import MenuThumb from "./modules/menuThumb/menuThumb";
import MainMenuThumb from "./modules/mainMenuThumb/MainMenuThumb";
import "./menu.scss";

function Menu() {
  const { patoData, pending, error } = useFetch({
    url: "/data/patodb.json",
    project: "pato",
  });
  return (
    <section className="pato-menu-container">
      <Header title="pato menu" section={true} />

      {error && <Error error={error} fullScreen={true} />}
      {pending && <Loader type="data" fullScreen={true} />}
      {patoData?.menu && (
        <>
          <div className="pato-menu-category-wrapper">
            {patoData.menu
              .filter((item) => !item.main)
              .map((item2) => (
                <div className="pato-menu-category-container" key={item2.id}>
                  <h3 className="pato-subtitle">{item2.category}</h3>
                  {item2.items.map((menuItem) => (
                    <MenuThumb {...menuItem} key={menuItem.id} />
                  ))}
                </div>
              ))}
          </div>

          {patoData.menu
            .filter((item) => item.main)
            .map((item2) => (
              <div key={item2.id}>
                <Header title={item2.category} />
                <div className="pato-menu-category-wrapper">
                  {item2.items.map((menuItem) => (
                    <MainMenuThumb key={menuItem.id} {...menuItem} />
                  ))}
                </div>
              </div>
            ))}
        </>
      )}
    </section>
  );
}

export default Menu;
