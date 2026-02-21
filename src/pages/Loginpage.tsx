import React, { useState } from "react";
import '../styles/Loginpage.css';
import { useLogin } from "../hooks/login/useLogin.ts";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect } from "react";

const MySwal = withReactContent(Swal);


const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate, isPending, isError, error } = useLogin();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };



  const onButtonEvent = () => {
    if (!username && !password) {
      // alert('Username is required');
      MySwal.fire({
        icon: 'warning',
        text: 'Username and Password is required!',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'swal-mygradient'
        },
        confirmButtonText: 'OK',
      });
      return;
    } else if (!username) {
      MySwal.fire({
        text: 'Username is required!',
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: 'swal-mygradient'
        },
        confirmButtonText: 'OK',
      });
      return;
    }
    else if (!password) {
      MySwal.fire({
        text: 'Password is required',
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: 'swal-mygradient'
        },
        confirmButtonText: 'OK',
      });
      return;
    }
    mutate({ username, password });
  };

  useEffect(() => {
    if (isError && error) {
      const resData = (error as any)?.response?.data;

      const errors: string[] = resData?.errors || [];

      // Build HTML content for Swal
      const html = (() => {
        if (errors.length === 0) return "";

        if (errors.length === 1) {
          // Single error - just show as plain text (no list)
          return errors[0];
        }

        // Multiple errors - show as bulleted list
        return `<ul style="text-align:left; margin:0 auto; padding-left:1.2rem; max-width:300px;">
            ${errors.map((e) => `<li>${e}</li>`).join("")}
          </ul>`;
      })();

      MySwal.fire({
        html, // use html instead of text
        icon: "error",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
        },
        confirmButtonText: "OK",
      });
    }
  }, [isError, error]);

  return (
    <>

      <div
        className="login-wrapper"
        style={{ backgroundImage: `url(/p88.jpg)` }}
      >
        <div className="login-card">
          {/* Left section */}
          <div className="login-left">
            {/*<img src={'/p1.png'} alt="illustration" />*/}
          </div>
          {/* Right section */}
          <div className="login-right">
            <h2>Welcome To EINS ManageX</h2>
            <p>Please enter your login details</p>
            <input className="login-input" type="text" placeholder="Username" value={username} onChange={(data) => setUsername(data.target.value)} />
            <div className="password-field ">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(data) => setPassword(data.target.value)}
              />
              <span className="toggle-eye" onClick={togglePassword}>
                <i className={showPassword ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"}></i>
              </span>
            </div>
            <div className="login-options">

              <span className="forgot">Forgot Password?</span>
            </div>

            <button className="login-btn" type="button" onClick={onButtonEvent} disabled={isPending}>{isPending ? (
              <><span className="spinner"></span> Logging in...
              </>
            ) : (
              "Log In"
            )}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
