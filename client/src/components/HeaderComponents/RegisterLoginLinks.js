import React from 'react'
import { Link } from 'react-router-dom';


const RegisterLoginLinks = () => {
  return (
    <div class="container">
      <a
        class="navbar-brand js-scroll-trigger"
        href="/"
        style={{
          marginTop: "10px",
          marginLeft: "105px",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        <ul class="navbar-nav ml-auto">
          <li
            class="nav-item"
            style={{
              marginRight: "40px",
              marginTop: "8px",
              marginLeft: "820px",
            }}
          >
            <Link to="/">
              <a
                class="nav-link js-scroll-trigger"
                href="index.php"
                style={{
                  color: "black",
                  fontFamily: "IBM Plex Sans, sans-serif",
                }}
              >
                <h6>HOME</h6>
              </a>
            </Link>
          </li>

          <li
            class="nav-item"
            style={{
              marginRight: "40px",
              marginTop: "-44px",
              marginBottom: "180px",
              marginLeft: "900px",
            }}
          >
            <Link to="/about">
              <a
                class="nav-link js-scroll-trigger"
                href="services.html"
                style={{
                  color: "black",
                  fontFamily: "IBM Plex Sans, sans-serif",
                }}
              >
                <h6>ABOUT US</h6>
              </a>
            </Link>
          </li>

          <li
            class="nav-item"
            style={{
              marginTop: "-224px",
              marginBottom: "180px",
              marginLeft: "1000px",
            }}
          >
            <Link to="/contact">
              <a
                class="nav-link js-scroll-trigger"
                href="contact.js"
                style={{
                  color: "black",
                  fontFamily: "IBM Plex Sans, sans-serif",
                }}
              >
                <h6>CONTACT</h6>
              </a>
            </Link>
          </li>
        </ul>
      </a>

      <div class="container"></div>
    </div>
  );
}

export default RegisterLoginLinks