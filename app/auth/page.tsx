"use client";

import { useState } from "react";
import Nav from "@/components/navbars/nav";
import Alert from "@/components/alert";
import { signUp, logIn } from "../actions/auth-actions";
import { useActionState } from "react";
import { LoadingSpinner } from "@/components/spinner/spinner";
import SignIn from "@/components/auth-components/auth-components";
import "../../styles/globals.css";

const Login = () => {
  const [registerState, registerAction, registerPending] = useActionState(
    signUp,
    undefined
  );
  const [loginState, loginAction, loginPending] = useActionState(
    logIn,
    undefined
  );
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleForm = () => setIsSignUpActive(!isSignUpActive);

  return (
    <div className="w-full h-screen">
      <Nav
        withLogout={false}
        isSignUpActive={isSignUpActive}
        toggle={toggleForm}
      />
      <div className="flex justify-center mt-24 md:mt-52">
        <div className="max-w-md left-1/2 p-6">
          <h1 className="text-3xl font-bold text-center mb-9">
            Welcome to Pollinate!
          </h1>
          {isSignUpActive ? (
            <form action={registerAction}>
              {registerPending ? <LoadingSpinner /> : ""}
              {registerState?.errors?.name && (
                <Alert>{registerState.errors.name}</Alert>
              )}
              {registerState?.errors?.email && (
                <Alert>{registerState.errors.email}</Alert>
              )}
              {registerState?.errors?.password && (
                <Alert>
                  {registerState?.errors?.password
                    ?.map((error, i) => error)
                    .join(" ")}
                </Alert>
              )}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full text-black p-3 mb-3 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full text-black p-3 mb-3 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full text-black text-black p-3 mb-3 border rounded"
              />
              <button
                type="submit"
                disabled={registerPending}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
              >
                {registerPending ? "Submitting" : "Sign Up"}
              </button>
            </form>
          ) : (
            <form action={loginAction}>
              {loginPending ? <LoadingSpinner /> : ""}

              {loginState?.errors?.email && (
                <Alert>{loginState.errors.email}</Alert>
              )}
              {loginState?.errors?.password && (
                <Alert>
                  {loginState?.errors?.password
                    ?.map((error, i) => error)
                    .join(" ")}
                </Alert>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full text-black p-3 mb-3 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full text-black text-black p-3 mb-3 border rounded"
              />
              <button
                type="submit"
                disabled={loginPending}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
              >
                {loginPending ? "Submitting" : "Log in"}
              </button>
            </form>
          )}
          {!isSignUpActive && (
            <>
              <h1 className="text-center mt-3">OR</h1>
              <SignIn />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
