import { useEffect } from "react";
import "./errorAuthModal.css";
import { useRouteError } from "react-router";

function ErrorAuthModal(props) {
  return (
    <>
      {
        <div className={`errorAuthModal ${!props.data ? "isLogin" : ""}`}>
          <p>{`${
            props.data ? props.data : "Welcome you are successfully logged in!"
          }`}</p>
        </div>
      }
    </>
  );
}
export default ErrorAuthModal;
