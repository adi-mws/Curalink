import React, { useState } from 'react';
import './PatientRegistrationForm.css';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton';
import eyeIcon from '../../../assets/icons/eye.png';
import eyeSlashIcon from '../../../assets/icons/eye-slash.png';

export default function PatientRegistrationForm(margin="0px",boxShadow="none") {
  const [showPassword, setShowPassword] = useState(false);
  const styles = {
    margin:margin,
    boxShadow:boxShadow
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful");
  };

  return (
    <div style={styles} className="PatientRegistrationForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-1">
          <div className="input-field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              style={{ outline: errors.name ? "2px solid var(--red-color)" : "none" }}
              {...register("name", {
                required: { value: true, message: "You need to enter your name" },
                minLength: { value: 3, message: "Name should at least contain 3 characters." },
                maxLength: { value: 20, message: "Name must not exceed 20 characters." },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              style={{ outline: errors.email ? "2px solid var(--red-color)" : "none" }}
              {...register("email", {
                required: { value: true, message: "You need to enter your email" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="input-field password">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              style={{ outline: errors.password ? "2px solid var(--red-color)" : "none" }}
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 6, message: "Password should be at least 6 characters long" },
              })}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              <img className="eye-icon" src={showPassword ? eyeSlashIcon : eyeIcon} alt="" />
            </button>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <div className="input-field">
            <label>Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm password"
              style={{ outline: errors.confirmPassword ? "2px solid var(--red-color)" : "none" }}
              {...register("confirmPassword", {
                required: { value: true, message: "Please confirm your password" },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>
        </div>
        <div className="div-2">
          <div className="input-field">
            <label>Gender</label>
            <select
              style={{ outline: errors.gender ? "2px solid var(--red-color)" : "none" }}
              {...register("gender", {
                required: { value: true, message: "Please select your gender" },
              })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div>
          <div className="input-field">
            <label>Date of Birth</label>
            <input
              type="date"
              style={{ outline: errors.dob ? "2px solid var(--red-color)" : "none" }}
              {...register("dob", {
                required: { value: true, message: "Date of Birth is required" },
              })}
            />
            {errors.dob && <p className="error">{errors.dob.message}</p>}
          </div>
          <div className="input-field">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              style={{ outline: errors.address ? "2px solid var(--red-color)" : "none" }}
              {...register("address", {
                required: { value: true, message: "Address is required" },
              })}
            />
            {errors.address && <p className="error">{errors.address.message}</p>}
          </div>
          <div className="input-field">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              style={{ outline: errors.phoneNumber ? "2px solid var(--red-color)" : "none" }}
              {...register("phoneNumber", {
                required: { value: true, message: "Phone number is required" },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
          </div>
        </div>
        <div className="div-3">
          <label>
            <input
              type="checkbox"
              {...register("terms", {
                required: { value: true, message: "You must agree to the terms" },
              })}
            />
            <span>
              I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
            </span>
          </label>
          {errors.terms && <p className="error">{errors.terms.message}</p>}
          <PrimaryButton text="Register" padding=".6em 3em" borderRadius="5px" type="submit" />
        </div>
      </form>
    </div>
  );
}
