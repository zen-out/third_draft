import React from "react";
import ProgressCard from "../components/ProgressCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function ProjectList() {
  return (
    <div className="row">
      hi
      <div className="row" style="min-height: 100vh;">
        <div className="col one">
          <Navbar />
        </div>
        <div className="cols eleven">
          <Header title="Dashboard" />
          <div className="tile is-ancestor">
            <div className="tile is-half is-vertical">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <ProgressCard
                    percentage="70%"
                    end="March 27, 2022"
                    start="Dec 1, 2021"
                    table_name="problem"
                  />
                </div>
                <div className="tile is-child">
                  <ProgressCard
                    percentage="70%"
                    end="March 27, 2022"
                    start="Dec 1, 2021"
                    table_name="problem"
                  />
                  <div className="tile is-child">
                    <ProgressCard
                      percentage="70%"
                      end="March 27, 2022"
                      start="Dec 1, 2021"
                      table_name="problem"
                    />
                  </div>
                </div>
                <div className="tile is-vertical">
                  <div className="tile">{/* info card */}</div>
                </div>
              </div>
              <div className="tile is-half is-vertical">
                <div className="tile">{/* info card */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
