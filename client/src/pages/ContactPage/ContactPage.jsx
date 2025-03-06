import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/shared/buttons/PrimaryButton/PrimaryButton";
import "./ContactPage.css";
import RightArrow from '../../assets/icons/arrow-right-white.png'
import FAQs from '../../components/FAQs/FAQs.jsx'
import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedIn from '../../assets/icons/linkedin.png'
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';
export default function ContactPage() {
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState('contact');
    return () => {
      setSideBarState('');
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="ContactPage">
      <form onSubmit={handleSubmit(onSubmit)} className="ContactForm">
        <p className="FormHeading">Contact Us</p>
        <div className="input-field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
            })}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-field">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        </div>

        <div className="input-field">
          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Enter Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
            className={errors.message ? "error" : ""}
          ></textarea>
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>

        <div className="SubmitButton">
          <PrimaryButton text="Send Message" type="submit" padding="0.8em 6.35em" width="100%"/>
        </div>
      </form>

      <div className="PageContent">

      <div className="StayConnected">
          <h1>Stay Connected</h1>
          <p>Have questions or need support? Reach out to us via email, phone, or our contact form. We’re here to ensure your experience with CuraLink is smooth and hassle-free!</p>
        </div>

        <div className="SocialMedia">
          <b>Contact Us Via Social Media </b>
          <div className="icons">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedIn} alt="" />
          </div>
        </div>

        <div className="SupportEmail">
          <b>Our Support Email</b>
          <a href="">support@curalink.com</a>
        </div>

        <div className="SupportPageRedirect">
          <p className="NeedAssistance">Need Assistance?</p>
          <p className="NeedAssistanceDescription">If you have any questions or need help with our services, visit our Support Page for detailed guidance. Whether you're a patient or a doctor, we’re here to ensure your experience with CuraLink is seamless and hassle-free.</p>
          <button className="AssistanceButton">Go to Support Page <img src={RightArrow} alt="" /></button>
        </div>
      </div>

      <div className="faq-section">
          <FAQs/>
      </div>
    </div>
  );
}
