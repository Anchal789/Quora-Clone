import React from "react";
import "./Widgets.css";
import WidgetOptions from "../WidgetsOptions/WidgetsOptions";

const Widget = () => {
  return (
    <div className="widget">
      <span>
        <div className="widget_header">
          <h4>Space to follow</h4>
        </div>
        <WidgetOptions />
      </span>
    </div>
  );
};

export default Widget;
