import { Form, Link, NavLink, redirect, useActionData } from "react-router-dom";
import "./form.css";
import { loginAPI } from "../Context/api";
import ErrorAuthModal from "./ErrorAuthModal";
import { useState, useEffect } from "react";

function Login(props) {
  const [errModal, setErrModal] = useState(false);
  let data = useActionData();

  const errorModalHandler = () => {
    if (data) {
      setErrModal(true);
    }
  };

  if (!data) {
    data = "Welcome you are successfully logged in!";
  }

  useEffect(() => {
    setTimeout(() => {
      setErrModal(false);
    }, 1500);
  }, [errModal]);
  return (
    <>
      <div className="login-form">
        <Link to={"/"}>
          <p className="link-to-home">Back to home page</p>
        </Link>
        {errModal && <ErrorAuthModal data={data} />}
        <Form method="post" autoComplete="off">
          <p>Login to your Account</p>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="please enter your email address"
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="please enter your password"
          />
          <button className="submit-btn" onClick={errorModalHandler}>
            Submit
          </button>
          <p className="login-form-p">
            Don't have an account! <NavLink to={"/signup"}>SignUp</NavLink>
          </p>
        </Form>
      </div>
    </>
  );
}

export default Login;

export async function loginAction({ request, params }) {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(loginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    return response;
  }
  return redirect("/");
}
