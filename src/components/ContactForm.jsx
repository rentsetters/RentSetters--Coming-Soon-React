import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzml2OKNT_RZmJ8NwPT5E9FS2BZH9HfkrIdmnPjEwGkjAQ7e3EesxvusPu5dunWi-0/exec";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      setLoading(false);
      alert("Error sending message.");
    }
  }

  function resetForm() {
    setSubmitted(false);
  }

  return (
    <section id="contact" className="flex justify-center py-20 px-4 bg-[#fdfbfa]">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-10 animate-fade-slide">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b1b1b] text-center mb-10">
          Get in Touch / Send Enquiry
        </h1>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 text-xl font-semibold mb-6">
              Thank you! We'll get back soon.
            </p>

            <button
              onClick={resetForm}
              className="bg-[#ff6a00] hover:bg-[#e45e00] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Send Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help you?"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full flex items-center justify-center gap-2 
                text-white text-lg font-semibold py-3 rounded-md transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#ff6a00] hover:bg-[#e45e00]"
                }
              `}
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
