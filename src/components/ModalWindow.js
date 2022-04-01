import React from "react";

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div className="modal__exit">
        <button className="modal__cross cross" onClick={props.changeCardMode}>
          <img src="./images/icons/cross.png" />
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
