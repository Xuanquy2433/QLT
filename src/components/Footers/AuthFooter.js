import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div  >
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331",marginTop: '50px' }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-3"
            style={{ backgroundColor: "#6351ce" }}
          >
            {/* Left */}
            <div className="me-5">
              <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <NavLink to={''} className="text-white me-4 mr-5">
                <i className="fab fa-facebook-f" />
              </NavLink>
              <NavLink to={''} className="text-white me-4 mr-5">
                <i className="fab fa-twitter" />
              </NavLink>
              <NavLink to={''} className="text-white me-4 mr-5">
                <i className="fab fa-google" />
              </NavLink>
              <NavLink to={''} className="text-white me-4 mr-5">
                <i className="fab fa-instagram" />
              </NavLink>
              <NavLink to={''} className="text-white me-4 mr-5">
                <i className="fab fa-linkedin" />
              </NavLink>
              <NavLink to={''} className="text-white me-4">
                <i className="fab fa-github" />
              </NavLink>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div style={{ textAlign: 'left' }} className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 style={{ fontSize: '1.2em', color: 'white', fontWeight: '600' }} className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 style={{ fontSize: '1.2em', color: 'white', fontWeight: '600' }} className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <NavLink to={''} className="text-white">
                      React js
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to={''} className="text-white">
                      Spring boot
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to={''} className="text-white">
                      ReactStrap
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to={''} className="text-white">
                      Rest API
                    </NavLink>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 style={{ fontSize: '1.2em', color: 'white', fontWeight: '600' }} className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 style={{ fontSize: '1.2em', color: 'white', fontWeight: '600' }} className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" /> BMT , {new Date().getFullYear()}{" "} , VN
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            Copyright  © {new Date().getFullYear()}{" "}      All Rights Reserved
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </>
  );
};

export default Login;
