import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "linear-gradient(#e66465, #9198e5)",
        backgroundSize: "cover",
      }}
      //   style="background: -webkit-linear-gradient(left, #3931af, #00c6ff); background-size: cover;"
    >
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="mainNav"
      >
        <div class="container">
          <a
            class="navbar-brand js-scroll-trigger"
            href="/"
            style={{
              marginTop: "10px",
              marginLeft: "-65px",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
            // style="margin-top: 10px;margin-left:-65px;font-family: 'IBM Plex Sans', sans-serif;"
          >
            <h4>
              <i class="fa fa-user-plus" aria-hidden="true"></i>GLOBAL HOSPITALS
            </h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class="nav-item"
                style={{ marginRight: "40px" }}
                // style="margin-right: 40px;"
              >
                <Link to="/">
                  <a
                    class="nav-link js-scroll-trigger"
                    href="index.php"
                    style={{
                      color: "white",
                      fontFamily: "IBM Plex Sans, sans-serif",
                    }}
                    // style="color: white;font-family: 'IBM Plex Sans', sans-serif;"
                  >
                    <h6>HOME</h6>
                  </a>
                </Link>
              </li>

              <li
                class="nav-item"
                style={{ marginRight: "40px" }}
                // style="margin-right: 40px;"
              >
                <Link to="/about">
                  <a
                    class="nav-link js-scroll-trigger"
                    href="services.html"
                    style={{
                      color: "white",
                      fontFamily: "IBM Plex Sans, sans-serif",
                    }}
                    // style="color: white;font-family: 'IBM Plex Sans', sans-serif;"
                  >
                    <h6>ABOUT US</h6>
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact">
                  <a
                    class="nav-link js-scroll-trigger"
                    href="contact.js"
                    style={{
                      color: "white",
                      fontFamily: "IBM Plex Sans, sans-serif",
                    }}
                    // style="color: white;font-family: 'IBM Plex Sans', sans-serif;"
                  >
                    <h6>CONTACT</h6>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
