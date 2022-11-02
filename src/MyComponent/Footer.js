import React from "react";

export const Footer = (props) => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "100vh",
  };

  return (
    <div className="container-fluid" style={footerStyle}>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              {props.hTitle}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              {props.fTitle}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              {props.PTitle}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>

          {props.contactUsEnableDisable ? (
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Contact Us
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Only for Admin
              </a>
            </li>
          )}
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
};
