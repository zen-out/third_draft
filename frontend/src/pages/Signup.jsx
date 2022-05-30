import React from "react";

export default function Signup() {
  return (
    <div>
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head"></div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-5 has-text-centered">
                <blockquote>Look at the Time</blockquote>
                <span className="is-italic"> // </span>
              </div>
              <div className="column is-6 is-offset-1">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-4 has-text-centered">
                      Join <i className="icon icon-key_info"></i>
                    </h1>
                    <form className="signup_form">
                      <div className="field">
                        <div className="control has-icons-left effect-1">
                          <input
                            className="input is-link"
                            type="text"
                            placeholder="First name"
                            name="name"
                          />
                          <span className="focus-border"></span>
                          <span className="icon is-small is-left">
                            <i className="icon icon-nerd"></i>
                          </span>
                        </div>
                        <p className="help is-warning">e.g., lezzles</p>
                      </div>{" "}
                      <div className="field">
                        <div className="control has-icons-left effect-1">
                          <input
                            className="input is-link"
                            type="text"
                            placeholder="Last name"
                            name="name"
                          />
                          <span className="focus-border"></span>
                          <span className="icon is-small is-left">
                            <i className="icon icon-cute"></i>
                          </span>
                        </div>
                        <p className="help is-info">e.g., peterson</p>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left effect-1">
                          <input
                            className="input is-link"
                            type="text"
                            placeholder="email"
                            name="email"
                          />
                          <span className="focus-border"></span>
                          <span className="icon is-small is-left">
                            <i className="icon icon-profile"></i>
                          </span>
                        </div>
                        <p className="help is-success">
                          e.g., im_a_ball_007@hotmail.com
                        </p>
                      </div>
                      <div className="field">
                        <div className="control has-icons-left effect-1">
                          <input
                            className="input is-link"
                            type="password"
                            name="password"
                            placeholder="password"
                          />
                          <span className="focus-border"></span>
                          <span className="icon is-small is-left">
                            <i className="icon icon-problem"></i>
                          </span>
                        </div>
                        <p className="help is-danger">
                          super secret password, don't worry, there's a hash
                          function here
                        </p>
                      </div>
                      <span className="vertical">
                        <button
                          type="submit"
                          className="button shadow mb-1 is-inverted is-info effect-2"
                        >
                          start
                          <i className="icon icon-send"></i>
                        </button>
                      </span>
                      <a href="/login" className="help is-6 mt-2">
                        already a user? login here
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <aside></aside>
          </div>
        </div>
      </section>
    </div>
  );
}
