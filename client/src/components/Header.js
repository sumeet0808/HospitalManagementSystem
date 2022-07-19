import React from "react";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "./login";
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a class="navbar-brand" href="/">
          <i class="fa fa-user-plus" aria-hidden="true"></i> Global Hospital{" "}
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={logout}
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="logout.js">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
