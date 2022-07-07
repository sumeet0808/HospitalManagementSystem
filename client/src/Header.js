import * as React from "react";

// importing material UI components

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">
        <i class="fa fa-user-plus" aria-hidden="true"></i> Global Hospital{" "}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="1">
              <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
        <form
          class="form-inline my-2 my-lg-0"
          method="post"
          action="search.php"
        >
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Enter contact number"
            aria-label="Search"
            name="contact"
          />
          <input
            type="submit"
            class="btn btn-outline-light"
            id="inputbtn"
            name="search_submit"
            value="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
