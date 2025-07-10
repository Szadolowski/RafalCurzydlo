import React from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3965387e-161a-443f-8abf-9fff2ce6b9a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-full p-4 mt-10 rounded-lg bg-neutral-800">
      <h2 className="w-full text-2xl font-bold text-center text-neutral-400">CONTACT</h2>
      <p className="w-full text-center text-neutral-400">
        If you have any questions, feel free to reach out to me via this form.
      </p>
      <div className="w-full h-full p-6 mx-auto mt-10 ">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center w-full gap-4 "
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="h-8 font-sans w-1/2 font-normal rounded-sm bg-neutral-700 text-neutral-100 p-1.5 placeholder:text-neutral-400 placeholder:font-normal placeholder:font-sans"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            required
            className="h-8 font-sans font-normal w-1/2 rounded-sm bg-neutral-700 text-neutral-100 p-1.5 placeholder:text-neutral-400 placeholder:font-normal placeholder:font-sans"
          />
          <textarea
            rows="4"
            placeholder="Message"
            name="message"
            required
            className=" font-sans font-normal rounded-sm w-1/2 bg-neutral-700 text-neutral-100 p-1.5 placeholder:text-neutral-400 placeholder:font-normal placeholder:font-sans"
          ></textarea>

          <button
            type="submit"
            className="p-2 transition-colors duration-300 bg-orange-800 w-fit rounded-2xl text-neutral-100 hover:bg-orange-700"
          >
            Submit Form
          </button>
        </form>
      </div>
      <span className="w-full mt-4 text-center text-neutral-600">{result}</span>
    </section>
  );
}

export default Contact;
