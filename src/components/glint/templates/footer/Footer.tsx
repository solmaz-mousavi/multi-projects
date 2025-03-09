import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top__left">
          <h3>Glint.</h3>
          <p>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </div>
        <div className="footer-top__right">
          <h3>Get Notified</h3>
          <p>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>
          <div className="subscribe-container">
            <input type="text" />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__left">© Copyright Glint 2022</div>
        <div className="footer-bottom__right">Site Template by Colorlib</div>
      </div>
    </div>
  );
}

export default Footer;
