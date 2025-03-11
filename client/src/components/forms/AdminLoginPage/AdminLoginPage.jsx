import React, { useState } from "react";
import "./AdminLoginPage.css";
import eyeIcon from "../../../assets/icons/eye.png";
import { useForm } from "react-hook-form";
import eyeSlashIcon from "../../../assets/icons/eye-slash.png";
import PrimaryButton from "../../shared/buttons/PrimaryButton/PrimaryButton";

const AdminLoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="AdminLoginPage">
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
          <PrimaryButton
            text="Login"
            width="27.9em"
            padding=".8em 4em"
            borderRadius="5px"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
