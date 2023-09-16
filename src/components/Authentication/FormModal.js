import { useContext, useState } from "react";
import AuthContext from "../Context/auth-context";
import FormDesign from "./FormDesign";

function FormModal(props) {
  //const ctx = useContext(AuthContext);

  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={props.closeModal}></div>
        <div className="modal-content">
          <div className="modal-design">
            <FormDesign />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormModal;
