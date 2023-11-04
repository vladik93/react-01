import "./Task.css";
import React from "react";

const Task = () => {
  return (
    <div className="task">
      <img src="./photos/profile_1.jpg" className="image task-image" />
      <div className="task-details">
        <p className="task-detail">Description</p>
        <h2 className="task-detail">Text Content Here...</h2>
        <p className="task-detail">Date Here</p>
      </div>
      <div className="task-actions">
        <button className="button task-button">
          <img src="./icons/trash_bin.svg" className="icon" />
        </button>
        <button className="button task-button">
          <img src="./icons/edit.svg" className="icon" />
        </button>
        <button className="button task-button">
          <img src="./icons/settings.svg" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Task;
