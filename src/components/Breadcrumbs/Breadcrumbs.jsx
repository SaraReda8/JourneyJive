import React from "react";
import "../Breadcrumbs/breadcrumbs.css";
import { NavLink } from "react-router-dom";
import { Breadcrumb, Container, Row } from "react-bootstrap";

const Breadcrumbs = (props) => {
  const { title, pagename, childpagename, bgImage } = props;
  
  return (
    <>
      <div className="inner-banner-wrap">
        <div
          className="inner-banner-container"
          style={{ backgroundImage: `url(${bgImage || "../../Assets/Images/bg.jpg"})` }}  // Use dynamic image
        >
          <Container>
            <div className="inner-banner-content">
              <h1 className="fs-1 text-white text-uppercase font-bold">
                {title}
              </h1>
            </div>
          </Container>
        </div>
      </div>
      <div className="navbar-link py-1">
        <Container>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <NavLink to="/">
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
              {childpagename && (
                <Breadcrumb.Item active>{childpagename}</Breadcrumb.Item>
              )}
            </Breadcrumb>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
