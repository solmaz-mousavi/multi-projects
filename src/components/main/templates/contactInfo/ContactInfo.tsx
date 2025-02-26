import { PackageType } from "../../../../dataTypes/mainDataType";
import Button from "../../modules/button/Button";
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
              <Button color="transparent" iconName="MdOutlineLocationOn" iconColor="#fff" />
              <span>UI, Tehran, Iran</span>
            </div>
            <div className="contactInfo-contact">
              <div className="contactInfo-phone">
                <Button color="transparent" iconName="MdOutlinePhoneEnabled" iconColor="#fff" />
                <Button color="transparent" iconName="MdOutlineWhatsapp" iconColor="#fff" />
                <Button color="transparent" iconName="TbBrandTelegram" iconColor="#fff" />
                <span>+989123456789</span>
              </div>
              <div className="contactInfo-email">
                <Button color="transparent" iconName="MdOutlineMailOutline" iconColor="#fff" />
                <span>solmaz@gmail.com</span>
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
