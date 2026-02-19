import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="foot-panel1">
          Back to Top
        </div>

        <div className="foot-panel2">
          <ul>
            <p>Get to Know</p>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relationship</a>
            <a href="#">Amazon Device</a>
            <a href="#">Amazon Science</a>
          </ul>

          <ul>
            <p>Connect with Us</p>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </ul>

          <ul>
            <p>Make Money with Us</p>
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell under Amazon Accelerator</a>
            <a href="#">Protect and Build Your Brand</a>
            <a href="#">Amazon Global Selling</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
          </ul>

          <ul>
            <p>Let Us Help You</p>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">100% Purchase Protection</a>
            <a href="#">Amazon App Download</a>
          </ul>
        </div>

        <div className="foot-panel3">
          <div className="logo"></div>
        </div>

        <div className="foot-panel4">
          <div className="pages">
            <a href="#">Conditions For Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choice</a>
          </div>

          <div className="copyright">
            © 1996-2024, Amazon.com Inc or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
