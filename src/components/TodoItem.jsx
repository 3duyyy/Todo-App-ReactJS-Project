import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  return (
    <div
      className="todo-item"
      onClick={() => props.handleTodoItemClick(props.id)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id);
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImportant && <p>⭐</p>}
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isImportant: PropTypes.bool,
  isCompleted: PropTypes.bool,
  handleCompleteCheckboxChange: PropTypes.func,
  id: PropTypes.string,
  handleTodoItemClick: PropTypes.func,
};

export default TodoItem;
