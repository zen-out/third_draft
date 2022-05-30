import React from "react";
import HourglassTags from "./HourglassTags";

export default function InfoCard() {
  return (
    <div className="tile">
      <div className="box">
        <div className="level">
          <div className="level-left-item">
            <div className="has-text-left">
              <p className="title is-4"> Table Name </p>
            </div>
          </div>
          <div className="level-right-item has-text-right">
            <i className="icon icon-focus"></i>
          </div>
        </div>
        <div className="level">
          <div className="level-left-item has-text-left">
            <p className="subtitle is-5 has-text-weight-light">started</p>
            <p className="title is-5 has-text-weight-bold">2022_05_31</p>
          </div>
          <div className="level-right-item has-text-right">
            <p className="subtitle is-5 has-text-weight-light">deadline</p>
            <p className="title is-5 has-text-weight-bold">
              xccelerate, hire me!!
            </p>
          </div>
        </div>
        <div className="content">
          <div>
            <HourglassTags
              status="doing"
              importance="high"
              usefulness="high"
              difficulty="pls pls easy please please, sam please."
              public="public"
            />
          </div>
          <p className="is-size-6 has-text-weight-light">
            {/* {{#task_array}}
       <li>{{name}}</li>

       {{/task_array}} */}
          </p>
          {/* <Tag_End end="March 27 2022" /> */}
        </div>
      </div>
    </div>
  );
}
