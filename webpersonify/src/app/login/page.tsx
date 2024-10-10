import React from "react";

const Login = () => {
  return (
    <div className="kt-grid kt-grid--ver kt-grid--root">
      <div
        className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-login-v1"
        id="kt_login_v1"
      >
        <div className="kt-grid__item">
          <div className="kt-login-v1__head">
            <div className="kt-login-v1__logo">
              <a href="login.jsp">
                {/* <img src="assets/media/logos/logo-4.png" alt="" /> */}
              </a>
            </div>
            <div className="kt-login-v1__signup">
              <h4 className="kt-login-v1__heading">Don't have an account?</h4>
              <a href="registration">Sign Up |</a>
              <a href="registration?type=free-trial">
                <button type="button" className="btn btn-primary">
                  Free Trial
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="kt-grid__item kt-grid kt-grid--ver kt-grid__item--fluid">
          <div className="kt-login-v1__body">
            <div className="kt-login-v1__section">
              <div className="kt-login-v1__info">
                <h3 className="kt-login-v1__intro">
                  Create Unique Experiences
                </h3>
                <p>Relevant to your audience</p>
              </div>
            </div>
            <div className="kt-login-v1__seaprator"></div>
            <div className="kt-login-v1__wrapper">
              <div className="kt-login-v1__container">
                <h3 className="kt-login-v1__title">Welcome</h3>

                <div
                  id="loginMessage"
                  className="alert-text"
                  style={{ display: "none" }}
                >
                  <span style={{ color: "#ffffff" }}>
                    Login failure message
                  </span>
                </div>

                <div id="loginFormContainer" className="alert-text">
                  <form
                    className="kt-login-v1__form kt-form"
                    action="/wem/login"
                    method="post"
                  >
                    <input type="hidden" name="pageName" value="login" />
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="userName"
                        autoComplete="true"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="true"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-9 col-form-label">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-outline checkbox-success">
                            <input
                              type="checkbox"
                              name="remember-me"
                              id="myCheck"
                            />
                            <span></span> Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="kt-login-v1__actions">
                      <a href="forgotpassword" className="kt-login-v1__forgot">
                        Forgot Password?
                      </a>
                      <button
                        type="submit"
                        className="btn btn-pill btn-elevate"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="kt-login-v1__seaprator"></div>
          </div>
        </div>
        <div className="kt-grid__item">
          <div className="kt-login-v1__footer">
            <div className="kt-login-v1__copyright">
              <a
                href="https://www.onwardpath.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2024&nbsp;©&nbsp;OnwardPath
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
