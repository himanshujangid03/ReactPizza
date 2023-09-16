import { useEffect, useState } from "react";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { signUpAPI } from "../Context/api";
import ErrorAuthModal from "./ErrorAuthModal";

const SignUp = (props) => {
  const data = useActionData();
  const [errModal, setErrModal] = useState(false);

  const errorModalHandler = () => {
    if (data) {
      setErrModal(true);
    }
  };

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
        <Form method="post">
          <p>Create your new Account</p>
          <label>Name</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="please enter your name"
          />
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
          <label>Password Confirm</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="please confirm your password"
          />
          <button className="submit-btn" onClick={errorModalHandler}>
            Submit
          </button>
          <p className="login-form-p">
            Already have an account! <Link to={`/login`}>Login</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default SignUp;

export async function signUpAction({ request, params }) {
  const data = await request.formData();
  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    passwordConfirm: data.get("passwordConfirm"),
  };

  const response = await fetch(signUpAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 404) {
    return response;
  }
  return redirect("/");
}
