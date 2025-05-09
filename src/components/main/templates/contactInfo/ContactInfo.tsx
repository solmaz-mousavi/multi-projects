import { PackageType } from "../../../../dataTypes/mainData.type";
import Button from "../../modules/button/Button";
import Icon from "../../modules/icon/Icon";
import "./contactInfo.scss";
type ContactInfoPropsType = {
  data: PackageType[];
};

function ContactInfo({ data }: ContactInfoPropsType) {
  return (
    <>
      <div className="main-contactInfo-container">
        {/* ------------- image ------------- */}
        <div className="contactInfo-image">
          <img src="/assets/images/main/profile.JPG" alt="profile" />
        </div>

        <div className="contactInfo-right">
          {/* ------------- contact info ------------- */}
          <div className="contactInfo-info">
            <div className="main-contactInfo-name">
              <p>Solmaz Mousavi</p>
              <Icon name="MdOutlineLocationOn" />
              <span>UI, Tehran, Iran</span>
            </div>
            <div className="contactInfo-contact">
              <div className="main-contactInfo-phone">
                <Icon name="MdOutlinePhoneEnabled" />
                <Icon name="MdOutlineWhatsapp" />
                <Icon name="TbBrandTelegram" />
                <a href="tel:+989144005634">+989144005634</a>
              </div>
              <div className="main-contactInfo-email">
                <Icon name="MdOutlineMailOutline" />
                <a href="mailto:solmaz@gmail.com">solmaz.mousavi@gmail.com</a>
              </div>
            </div>
          </div>

          {/* ------------- skills ------------- */}
          <div className="contactInfo-package">
            <p>skills:</p>
            {data &&
              data.map((item) => (
                <Button
                  key={item.id}
                  type="link"
                  variant="grey"
                  text={`${item.name}`}
                  icon={{
                    name: `${item.iconName}`,
                  }}
                  className="skills-thumbnail"
                  transparent={true}
                  border={false}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
