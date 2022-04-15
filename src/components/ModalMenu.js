import React from "react";
import { Link } from "react-router-dom";

const ModalMenu = (props) => {

    return(
        <div className="modal-menu">
            <ul className="modal-menu__list">
                <li className="modal-menu__item">
                    <Link to="/my_cities">My Cities</Link>
                </li>
                <li className="modal-menu__item">
                    <a href="#" onClick={props.changeDisplayUnit}>Unit of Temperature Measurement</a>
                </li>
            </ul>
        </div>
    )
}

export default ModalMenu