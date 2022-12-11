import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cpl8yvw",
        "template_35b0sh9",
        form.current,
        "SwjZaoypAaPjK0BYj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contactme">
      <div className="hero bg-slate-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Contact Me!</h1>
            <p className="py-6 text-white">
              I would love hear form you. Connect with for more information
              about me and my project, email me and i will contact with with you
              for further discussion and information.
            </p>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Message</label>
                  <textarea
                    name="message"
                    className="input input-bordered h-36"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
