import React, { useState } from "react";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";
import userSlice from "./features/userSlice";
import { store } from "./app/store";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then( (userAuth) => {
        store.dispatch( 
            login( {
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
        );
    }).catch((error) => alert(error));

  };

  const register = () => {
    if (!name) {
      return alert("Please enter full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
            store.dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
    }).catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (if first time user)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>

      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
