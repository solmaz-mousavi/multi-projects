import { PackageType } from "../../../../dataTypes/mainDataType";
import Button from "../../modules/button/Button";
import Icon from "../../modules/icon/Icon";
import "./contactInfo.scss";
type ContactInfoPropsType = {
  data: PackageType[];
};
function ContactInfo({ data }: ContactInfoPropsType) {
  return (
    <>
      <div className="contactInfo-container">
        <div className="contactInfo-image">
          <img src="/assets/images/main/profile.JPG" alt="profile" />
        </div>
        <div className="contactInfo-right">
          <div className="contactInfo-info">
            <div className="contactInfo-name">
              <p>Solmaz Mousavi</p>
              <Icon name="MdOutlineLocationOn" color="#fff" />
              <span>UI, Tehran, Iran</span>
            </div>
            <div className="contactInfo-contact">
              <div className="contactInfo-phone">
                <Icon  name="MdOutlinePhoneEnabled" color="#fff" />
                <Icon  name="MdOutlineWhatsapp" color="#fff" />
                <Icon  name="TbBrandTelegram" color="#fff" />
                <a href="#">+989123456789</a>
              </div>
              <div className="contactInfo-email">
                <Icon name="MdOutlineMailOutline" color="#fff" />
                <a href="#">solmaz@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="contactInfo-package">
						<p>skills:</p>
            {data &&
              data.map((item, index) => (
                <Button
                  key={index}
                  color="transparent"
                  iconName={item.iconName}
                  iconColor={item.color}
                  text={item.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
