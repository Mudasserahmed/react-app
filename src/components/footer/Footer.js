import React from "react";
import "./footer.css";
import { Name } from "../../App";
export default function Footer() {
  return (
    <>
      <footer style={{marginTop:'2rem'}}className="page-footer font-small special-color-dark pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <form className="form-inline">
                <input
                  className="form-control form-control-sm mr-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i className="fas fa-search" aria-hidden="true"></i>
              </form>
            </div>
            <div className="col-md-6 mb-4">
              <form className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-outline-white my-0"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://reactjs.org/" target="_blank"> react.com</a>
        </div>
      </footer>
    </>
  );
}
