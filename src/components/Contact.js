import React, { useEffect, useState } from "react";
import { t } from "i18next";
import "../css/Contact.css";

import { validation } from "../common/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { img } from "../assets";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const [inpVal, setinpVal] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setinpVal({ ...inpVal, [e.target.name]: e.target.value });
    console.log(inpVal);
  };

  const touchedHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      toast.success(t("toastSucc"));
    } else {
      toast.error(t("toastErr"));
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERV,
        process.env.REACT_APP_TEMP,
        e.target,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setinpVal({
      name: "",
      email: "",
      message: "",
    });

    setTouched({
      name: false,
      email: false,
      message: false,
    });
  };

  useEffect(() => {
    setError(validation(inpVal));
  }, [inpVal, touched]);

  return (
    <FormStyles touched={touched} inpVal={inpVal}>
      <div className="contact-container container">
        <div className="title">
          <h1>{t("contact")}</h1>
          <span></span>
        </div>

        <ul>
          <li>
            <div>
              <img src={img.phone} alt="phone" />
              <p>{t("phone")}</p>
            </div>

            <span>{t("phoneNum")}</span>
          </li>

          <li>
            <div>
              <img src={img.email} alt="email" />
              <p>{t("email")}</p>
            </div>

            <span>fatemeghafari77[@]gmail.com</span>
          </li>

          <li>
            <div>
              <img src={img.map} alt="map" />
              <p>{t("locationTitle")}</p>
            </div>

            <span>{t("locationText")}</span>
          </li>
        </ul>

        <section className="form-container">
          <p>{t("contactText")}</p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                required
                value={inpVal.name}
                onChange={changeHandler}
                onFocus={touchedHandler}
              />
              <label htmlFor="name">{t("nameInp")}</label>
              {/* <span>fgggg</span> */}
              {error.name && touched.name && <span>{error.name}</span>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
                value={inpVal.email}
                onChange={changeHandler}
                onFocus={touchedHandler}
              />
              <label htmlFor="email">{t("email")}</label>
              {error.email && touched.email && <span>{error.email}</span>}
            </div>

            <div>
              <input
                type="text"
                name="message"
                required
                value={inpVal.message}
                onChange={changeHandler}
                onFocus={touchedHandler}
              />
              <label htmlFor="message">{t("messageInp")}</label>
              {error.message && touched.message && <span>{error.message}</span>}
            </div>

            <button type="submit">{t("submitBtn")}</button>
          </form>
        </section>
      </div>
    </FormStyles>
  );
};

export default Contact;

const FormStyles = styled.div`
  .form-container form div input:valid ~ label,
  .form-container form div input:focus ~ label {
    top: ${(props) => (props.touched ? "-30px" : "")};
    transform: ${(props) => (props.touched ? "scale(0.75)" : "")};
    color: ${(props) => (props.touched ? "#ff6464" : "")};
  }
`;
