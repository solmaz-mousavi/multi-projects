import { useContext } from "react";
import "./footer.scss";
import {
  IFormInputType,
  ValuesType,
} from "../../../../dataTypes/formData.type";
import { MdArrowRightAlt } from "react-icons/md";
import {
  emailValidator,
  requiredStringValidator,
} from "../../../../validators/rules";
import { ButtonType } from "../../../../dataTypes/buttonData.type";
import Form from "../../../main/modules/form/Form";
import {
  NavbarDataType,
  SocialDataType,
} from "../../../../dataTypes/mainData.type";
import Icon from "../../../main/modules/icon/Icon";
import { NavLink, useNavigate } from "react-router-dom";
import { BlogDataType } from "../../../../dataTypes/academiaData.type";
import {
  FaCalendarAlt,
  FaMap,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { ModalContext } from "../../../../contexts/ModalContext";

function Footer({
  socialData,
  navbarData,
  blogData,
}: {
  socialData: SocialDataType[];
  navbarData: NavbarDataType[];
  blogData: BlogDataType[];
}) {
  const navigate = useNavigate();

  // subscribe form info:
  const { setShowModal, setModalDetails } = useContext(ModalContext);
  const inputs: IFormInputType[] = [
    {
      tag: "input",
      type: "text",
      placeholder: "Enter Email Address",
      className: "academia-footer-input",
      variant: "transparent",
      border: false,

      name: "email",
      initialvalue: "",
      validators: [requiredStringValidator(), emailValidator()],
    },
  ];
  const buttons: ButtonType[] = [
    {
      type: "submit",
      variant: "transparent",
      icon: { name: "FaPaperPlane" },
      className: "academia-footer-btn",
      border: false,
    },
  ];
  const submitHandler: (values: ValuesType) => void = (items) => {
    console.log(items);

    setModalDetails({
      desc: "Your email have been submitted successfully.",
      icon: { name: "MdCheck", variant: "success" },
      button: [
        {
          title: "OK",
          variant: "success",
          clickHandler: () => setShowModal(false),
        },
      ],
    });
    setShowModal(true);
  };

  return (
    <section className="academia-footer-container">
      {/* subscribe form: */}
      <div className="academia-footer-top">
        <div className="academia-container">
          <div className="academia-footer-top-details">
            <h3>Newsletter - Stay tune and get the latest update</h3>
            <p className="academia-desc">
              Far far away, behind the word mountains
            </p>
          </div>
          <Form
            inputs={inputs}
            buttons={buttons}
            submitHandler={submitHandler}
          />
        </div>
      </div>

      <div className="academia-footer-content">
        <div className="academia-container">
          {/* logo and info */}
          <div className="academia-footer-item">
            <div className="academia-footer-logo-container">
              <h2 className="academia-footer-logo">academia</h2>
              <p>Online Education & Learning</p>
            </div>
            <p className="academia-desc">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <div className="academia-footer-social-container">
              {socialData &&
                socialData.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Icon
                      key={item.id}
                      name={item.iconName}
                      className="academia-social"
                    />
                  </a>
                ))}
            </div>
          </div>

          {/* address, phone, email */}
          <div className="academia-footer-item">
            <h3 className="academia-title-sm">Have a Question?</h3>

            <div className="academia-footer-contact-container">
              <div className="academia-footer-contact">
                <FaMap className="academia-icon" />
                <p className="academia-desc">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>

              <div className="academia-footer-contact">
                <FaPhoneAlt className="academia-icon" />
                <a className="academia-desc" href="tel:+23923929210">
                  +2 392 3929 210
                </a>
              </div>

              <div className="academia-footer-contact">
                <FaPaperPlane className="academia-icon" />
                <a className="academia-desc" href="mailto:info@yourdomain.com">
                  info@yourdomain.com
                </a>
              </div>
            </div>
          </div>

          {/* quick links */}
          <div className="academia-footer-item">
            <h3 className="academia-title-sm">Quick Links</h3>

            <nav className="academia-footer-navbar-container">
              {navbarData &&
                navbarData.map((item) => (
                  <div key={item.id}>
                    <MdArrowRightAlt className="academia-icon" />
                    <NavLink
                      to={`/academia/${item.route}`}
                      className={(link) =>
                        link.isActive
                          ? "active academia-footer-navbar-link"
                          : "academia-footer-navbar-link"
                      }
                    >
                      {item.title}
                    </NavLink>
                  </div>
                ))}
            </nav>
          </div>

          {/* recent blogs */}
          <div className="academia-footer-item">
            <h3 className="academia-title-sm">Recent Posts</h3>

            <div className="academia-footer-blog-container">
              {blogData &&
                blogData.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="academia-footer-blog"
                    onClick={() => navigate("/academia/blog")}
                  >
                    <div className="academia-footer-blog-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="academia-footer-blog-details-wrapper">
                      <div>
                        <FaCalendarAlt className="academia-icon" />
                        <span>{item.date}</span>

                        <FaUser className="academia-icon" />
                        <span>{item.author}</span>
                      </div>
                      <div className="academia-desc">{item.title}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="academia-footer-bottom">
        <p className="academia-desc">
          Copyright <>&#xa9;</> 2025 All rights reserved | This template is made
          with <>&#x2764;</> by Colorlib
        </p>
      </div>
    </section>
  );
}

export default Footer;
