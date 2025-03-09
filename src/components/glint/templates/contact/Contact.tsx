import { SocialDataType } from "../../../../dataTypes/glintDataType";
import Aos from "../../../main/modules/aos/Aos";
import Button from "../../../main/modules/button/Button";
import Icon from "../../../main/modules/icon/Icon";
import Input from "../../../main/modules/input/Input";
import "./contact.scss";

function Contact({ data }: { data: SocialDataType[] }) {
  return (
    <section id="Contacts" className="section-container contacts-container">
			<div className="decoration"></div>
      <Aos aosStyle="fadeInUp" className="contacts-header" once={true}>
        <div>
          <p className="top-title contacts-header__top">Contact Us</p>
          <p className="main-title contacts-header__title">Reach out for a new project or just say hello</p>
        </div>
				</Aos>
			<div className="contacts-bottom-wrapper">

      <div className="form-container">
        <form action="#">
					{/* <Input type="text" color="transparent" placeholder="Your Name" width="full"/>
					<Input type="email" color="transparent" placeholder="Your Email" width="full"/>
					<Input type="text" color="transparent" placeholder="Subject" width="full"/> */}
          <button className="fullWidth" type="submit">submit</button>
        </form>
      </div>
      <div className="info-container" style={{color:"#fff"}}>
        <h4 className="info-top-title">Contact Info </h4>
        <h5 className="info-title">Where to Find Us </h5>
        <p className="info-desc">1600 Amphitheatre Parkway Mountain View, CA 94043 US</p>
        <h5 className="info-title">Email Us At</h5>
        <p className="info-desc">contact@glintsite.com info@glintsite.com</p>
        <h5 className="info-title">Call Us At</h5>
        <p className="info-desc">Phone: (+63) 555 1212 Mobile: (+63) 555 0100 Fax: (+63) 555 0101</p>
				<div className="social-container">
					{data && data.map((item, index)=> (
						<Button
						icon={{name:`${item.iconName}`}}
						variant="light"
						transparent={true}
						border={false}
						className="contacts-info-social"
						// tooltip={{content:`${item.socialName}`, color:"#fff", position:"bottom"}}
						/>
					))}
				</div>
			</div>
      </div>
    </section>
  );
}

export default Contact;
