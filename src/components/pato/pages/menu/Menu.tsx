import Header from "../../templates/header/Header";
import MenuThumb from "./components/menuThumb/menuThumb";
import MainMenuThumb from "./components/mainMenuThumb/MainMenuThumb";
import "./menu.scss";
import { useOutletContext } from "react-router-dom";
import { PatoDataType } from "../../../../dataTypes/patoData.type";

function Menu() {
	const patoData = useOutletContext<PatoDataType>();
  return (
    <section className="pato-menu-container">
      <Header title="pato menu" section={true} />

      {patoData?.menu && (
        <>
          <div className="pato-menu-category-wrapper container">
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
                <div className="pato-menu-category-wrapper container">
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
