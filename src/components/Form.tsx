"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    toast.success(
      <div className="toastMessage">
        <h2>Message Sent!</h2>
        <p> Thanks for completing the form. We'll be in touch soon</p>
      </div>,
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              fill="#fff"
              d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
            />
          </svg>
        ),
      }
    );
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="two-column-layout-lg">
          <div>
            <div className="grid-flow">
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                className={`${styles.input} ${
                  errors.firstName && styles.inputError
                }`}
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: true,
                })}
              />
            </div>
            {errors.firstName && (
              <span role="alert" className={styles.errorMessage}>
                This Field is required
              </span>
            )}
          </div>
          <div>
            <div className="grid-flow">
              <label className={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input
                className={`${styles.input} ${
                  errors.lastName && styles.inputError
                }`}
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: true,
                })}
              />
            </div>
            {errors.lastName && (
              <span role="alert" className={styles.errorMessage}>
                This Field is required
              </span>
            )}
          </div>
        </div>
        <div className="grid-flow">
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            className={`${styles.input} ${errors.email && styles.inputError}`}
            type="text"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          {errors.email && (
            <span role="alert" className={styles.errorMessage}>
              Please enter a valid email address
            </span>
          )}
        </div>

        <div className="grid-flow">
          <label className={styles.label} htmlFor="queryType">
            Query Type
          </label>
          <div className="two-column-layout-lg">
            <label htmlFor="queryType1" className={styles.radioWrapper}>
              <input
                type="radio"
                id="queryType1"
                value="GeneralEnquiry"
                {...register("queryType", {
                  required: true,
                })}
              />
              <span>General Enquiry</span>
            </label>
            <label htmlFor="queryType2" className={styles.radioWrapper}>
              <input
                type="radio"
                id="queryType2"
                value="SupportRequest"
                {...register("queryType", {
                  required: true,
                })}
              />
              <span>Support Request</span>
            </label>
          </div>
          {errors.queryType && (
            <span role="alert" className={styles.errorMessage}>
              Please select a query type
            </span>
          )}
        </div>
        <div className="grid-flow">
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={`${styles.input} ${errors.email && styles.inputError}`}
            {...register("message", {
              required: true,
            })}
            rows={4}
            id="message"
            
          ></textarea>
          {errors.message && (
            <span role="alert" className={styles.errorMessage}>This field is required</span>
          )}
        </div>
        <div className="grid-flow">
          <label htmlFor="consent" className={styles.checkBoxWrappper}>
            <input
              type="checkbox"
              aria-label="Consent "
              id="consent"
              {...register("consent", {
                required: true,
              })}
              value="I consent to being contacted by the team"
            />{" "}
            <span className={styles.label}>
              I consent to being contacted by the team
            </span>
          </label>
          {errors.consent && (
            <span role="alert" className={styles.errorMessage}>
              To submit this form, please consent to being contacted
            </span>
          )}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        closeButton={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
};

export default Form;
