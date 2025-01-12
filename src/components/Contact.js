import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbydSYCrqpn9u80hRF16pKn_P8UAxBFSoeVA-HOid-ibAraK9icrVbRv3h_SMpNmcOd9/exec";
    const form = document.forms["contact-form"];
    const btnSend = document.querySelector(".btn-send");
    const btnLoad = document.querySelector(".btn-load");
    const alrtSuccess = document.querySelector(".alrt-success");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // ketika submit diklik
      // tampilkan tombol loading, hilangkan submit
      btnLoad.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log("Success!", response);
          btnLoad.classList.toggle("d-none");
          btnSend.classList.toggle("d-none");
          alrtSuccess.classList.toggle("d-none");
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
  };

  return (
    <section className="contact-color text-light" id="contact">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form name="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input name="name" type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input name="email" type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="Message" className="form-label">
                  Message
                </label>
                <textarea name="message" className="form-control" id="Message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-secondary mb-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
