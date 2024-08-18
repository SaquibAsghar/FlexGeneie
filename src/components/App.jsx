import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fbAuth } from "../config/firebase/firebaae.config";
import {
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const { pathname } = useLocation();
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  const onBoarding = pathname.match(/onboarding/gi);
  console.log(onBoarding);
  let showSignupForm;
  if (!onBoarding || onBoarding !== "onboarding") {
    showSignupForm = false;
  }
  if (Array.isArray(onBoarding) && onBoarding[0] === "onboarding") {
    showSignupForm = true;
  }
  console.log(showSignupForm);
  const onCredentialSubmit = (e) => {
    e.preventDefault();
    const userObj = {};
    console.log("clicked");
    const { value: userEmailVal, name: userEmail } = userEmailRef.current;
    const { value: userPasswordVal, name: userPassword } =
      userPasswordRef.current;
    userObj[userEmail] = userEmailVal;
    userObj[userPassword] = userPasswordVal;
    if (userNameRef.current) {
      const { value: userUserNameVal, name: userName } = userNameRef.current;
      userObj[userName] = userUserNameVal;
    }
    console.log(userObj);
    if (!showSignupForm) {
      signInWithEmailAndPassword(
        fbAuth,
        userObj[userEmail],
        userObj[userPassword]
      )
        .then((userCred) => console.log("userCred=> ", userCred))
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;
          console.log({
            errorCode,
            errorMessage,
          });
        });
      return;
    }
    createUserWithEmailAndPassword(
      fbAuth,
      userObj[userEmail],
      userObj[userPassword]
    )
      .then((userCredentials) => console.log("userCred => ", userCredentials))
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log({
          errorCode,
          errorMessage,
        });
      });
  };
  return (
    <div>
      <header className="text-xl text-[#d6d6d6]"></header>
      <main
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg")',
        }}
        className="fixed inset-0 -z-10"
      ></main>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#00000064]"></div>
      <div>
        <img src="./assets/images/logo.png" alt="flixGenie logo" width={200} />
        <p className="text-white">Welcome to the FlixGenie</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-500 text-white">
            <span className="text-white">
              {showSignupForm ? "Sign Up" : "Sign In"}
            </span>
            <form onSubmit={onCredentialSubmit} method="post">
              {showSignupForm && (
                <div>
                  <input
                    ref={userNameRef}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border-2 border-gray-300 p-2 focus:outline-none w-full text-black"
                  />
                </div>
              )}
              <div>
                <input
                  ref={userEmailRef}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border-2 border-gray-300 p-2 focus:outline-none w-full text-black"
                />
              </div>
              <div>
                <input
                  ref={userPasswordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 p-2 mt-4 focus:outline-none w-full text-black"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-red-700 text-white p-2 mt-4 rounded-sm w-full"
                >
                  {showSignupForm ? "Sign Up" : "Sign In"}
                </button>
                <span className="block">
                  <input type="checkbox" name="rememberUser" id="rememberUse" />
                  <label htmlFor="rememberUse" className="text-white">
                    Remember Me
                  </label>
                  <a href="#" className="text-white">
                    Need help?
                  </a>
                </span>
                <div>
                  {showSignupForm ? (
                    <Link to="/">Already exist? Sign In Now</Link>
                  ) : (
                    <Link to="/onboarding">New to Netflix? Sign Up Now</Link>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
