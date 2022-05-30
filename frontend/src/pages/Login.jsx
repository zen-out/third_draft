import React from "react";

export default function Login() {
  return (
    <div>
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head"></div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-5 has-text-centered">
                <blockquote>
                  don't avoid what the universe is telling you to do, boss.{" "}
                </blockquote>
                <span className="is-italic"> - look at the Time</span>
              </div>
              <div className="column is-6 is-offset-1">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-4 has-text-centered">
                      welcome back <i className="icon icon-fire"></i>
                    </h1>
                    <form className="signup_form">
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
                          wowmom_007@hotmail.com
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
                          did you remember to write it down?
                        </p>
                      </div>

                      <span className="vertical">
                        {" "}
                        <button
                          type="submit"
                          className="button shadow mb-1 is-inverted is-info effect-2"
                        >
                          start&nbsp;&nbsp;
                          <i className="icon icon-send"></i>
                        </button>
                      </span>
                      <a href="/signup" className="help is-6 mt-2">
                        register
                      </a>

                      <a href="/forgot_pass" className="help is-6 mt-2">
                        forgot password
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
