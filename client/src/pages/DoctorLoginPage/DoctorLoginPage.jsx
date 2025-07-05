import React, { useState } from "react";
import "./DoctorLoginPage.css";
import DoctorWork from "../../assets/imgs/DoctorWork.png";
import TertiaryButton from "../../components/shared/buttons/TertiaryButton/TertiaryButton";
import PrimaryButton from "../../components/shared/buttons/PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import googleIcon from "../../assets/icons/google-icon.webp";
import eyeIcon from "../../assets/icons/eye.png";
import eyeSlashIcon from "../../assets/icons/eye-slash.png";

const DoctorLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="DoctorLoginPage">
      <div className="first" style={{ gridArea: "box-1" }}>
        <p className="title">Secure Access to Your Doctor's Dashboard</p>
        <p className="text">
          Welcome back! Log in to manage your appointments, consult with
          patients, and access your digital practice with ease.
        </p>
      </div>

      <div className="second" style={{ gridArea: "box-2" }}>
        <div className="backgroundDiv"></div>
        <img src={DoctorWork} alt="doctorWork" />
        <div className="buttons">
          <PrimaryButton text="Explore Doctor Perks" />
          <TertiaryButton text="Register As Doctor" />
        </div>
      </div>

      <div className="third" style={{ gridArea: "box-3" }}>
        <div className="DoctorForm">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="email inputFields">
              <label>Email</label>
              <input
                className={errors.email ? "email-error" : ""}
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div
              className={
                errors.password ? "password-error" : "password inputFields"
              }
            >
              <label>Password</label>
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 8,
                    message: "Password must contain at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must contain at most 20 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
              <button
                className="eye-icon"
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <img src={showPassword ? eyeSlashIcon : eyeIcon} alt="" />
              </button>
            </div>
            <div className="recovery">
              <a>Forgot Password?</a>
            </div>
            <PrimaryButton
              text="Login"
              width="27.9em"
              padding=".8em 4em"
              borderRadius="5px"
              type="submit"
            />
            <p style={{ textAlign: "center", fontSize: "12px" }}>
              Don't have account?{" "}
              <span style={{ color: "var(--primary-color)" }}>
                Join Us as Doctor
              </span>
            </p>
            <p className="or">or</p>
            <button className="googleLogin">
              <img src={googleIcon} alt="" />
              <p>Continue with google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLoginPage;
