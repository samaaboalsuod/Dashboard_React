import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import LogoGlow from './../Components/LogoGlow';
import RememberCheck from './../Components/RememberCheck';
import Button from '../Components/Button';

import showIcon from "../Assets/showIcon.svg";
import hideIcon from "../Assets/hideIcon.svg";

import { supabase } from "../Supabase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setAuthError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setAuthError(error.message);
    } else {
      navigate("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="loginPage">
      <div className="loginCard">

        <LogoGlow />

        <div className="loginForm">

          {/* EMAIL */}
          <div className="fieldGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: null });
              }}
              onKeyDown={handleKeyDown}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>

          {/* PASSWORD */}
          <div className="fieldGroup">
            <label>Password</label>

            <div className="passwordWrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: null });
                }}
                onKeyDown={handleKeyDown}
              />

              <img
                src={showPassword ? hideIcon : showIcon}
                alt="toggle password"
                className="passwordIcon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {errors.password && (
              <span className="errorText">{errors.password}</span>
            )}
          </div>

          {authError && <div className="authError">{authError}</div>}

          <div className="loginBtnWrap">
            <Button
              BtnText={loading ? "Logging in..." : "Log in"}
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>

          <RememberCheck
            checked={remember}
            onChange={() => setRemember(!remember)}
          />

        </div>
      </div>
    </div>
  );
};

export default Login;
