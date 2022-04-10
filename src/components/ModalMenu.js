import React from "react";

const ModalMenu = (props) => {

    return(
        <div className="modal-menu">
            <ul className="modal-menu__list">
                <li className="modal-menu__item">
                    <a href="#">My Cities</a>
                </li>
                <li className="modal-menu__item">
                    <a onClick={props.changeDisplayUnit} href="#">Unit of Temperature Measurement</a>
                </li>
            </ul>
        </div>
    )
}

export default ModalMenu