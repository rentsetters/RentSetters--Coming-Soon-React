import React, { useEffect, useState } from "react";

export default function ComingSoon({
  logo = "/logo png1.png",
  instagram = "https://www.instagram.com/rent.setters/",
  facebook = "https://www.facebook.com/profile.php?id=61583524947267",
  whatsapp = "https://wa.me/918075088842",
}) {
  const launchDate = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate() + 30,
      0,
      0,
      0
    )
  );
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff <= 0)
      return { days: 0, hours: 0, mins: 0, secs: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return { days, hours, mins, secs };
  }

  function validatePhone(phone) {
    // Example: 10-15 digits (add/correct pattern as required)
    const phoneRegex = /^[0-9]{8,15}$/;
    return phoneRegex.test(phone);
  }

  function handleSubscribe(e) {
    e.preventDefault();
    setPhoneError("");
    if (!name || !phone) {
      return;
    }
    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number (digits only, 8-15 characters).");
      return;
    }
    // Replace with your deployed Google Apps Script Web App URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwtDC6dNDrm1SushKTUA_DrOj2RdHWFnk37FPhPICRdSBCdQsvDSKPeAhhgINdWjIyV/exec";
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    setLoading(true);
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubscribed(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setLoading(false);
      });
  }

  // Reset form to allow another response
  function handleAnotherResponse() {
    setName("");
    setPhone("");
    setSubscribed(false);
    setPhoneError("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 via-slate-900 to-black text-white px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-20 -top-20 w-72 h-72 bg-linear-to-br from-purple-600 to-pink-500 opacity-30 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="animate-blob animation-delay-2000 absolute right-0 top-40 w-96 h-96 bg-linear-to-br from-teal-400 to-indigo-600 opacity-25 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <img src={logo} alt="logo" className="w-16 h-16 object-contain rounded-md shadow-lg bg-white/5 p-2" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">RentSetters</h1>
            <p className="text-sm text-gray-300">
              Luxury homes & modern spaces — launching soon.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/6 rounded-2xl p-8 shadow-lg backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                We're building something beautifull...
              </h2>
              <p className="mt-4 text-gray-300">
                Sign up to be the first to know when we go live. Follow us or message directly on WhatsApp for quick enquiries.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">
                  <span className="text-sm">Instagram</span>
                </a>
                <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">
                  <span className="text-sm">Facebook</span>
                </a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
            <div>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                    className="bg-white/5 placeholder-gray-400 py-3 px-4 rounded-lg border border-white/6 focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className={`bg-white/5 placeholder-gray-400 py-3 px-4 rounded-lg border border-white/6 focus:outline-none ${phoneError ? "border-red-500" : ""}`}
                    required
                  />
                  {phoneError && <span className="text-red-400 text-sm">{phoneError}</span>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 font-semibold shadow text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-start gap-3">
                  <p className="mt-3 text-sm text-green-300">
                    Sent! Thank you! We'll reach out to you shortly.
                  </p>
                  <button
                    onClick={handleAnotherResponse}
                    className="mt-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white text-sm"
                  >
                    Send another response
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/3 p-4 rounded-xl w-full md:w-auto mt-3.5">
              <h2 className="text-3xl font-extrabold">Coming Soon!!!</h2>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Or contact us directly on WhatsApp for property enquiries & quick replies.
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/6 pt-6 flex items-center justify-between gap-4">
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} RentSetters. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href={instagram} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">Instagram</a>
            <span className="text-gray-600">|</span>
            <a href={facebook} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">Facebook</a>
            <span className="text-gray-600">|</span>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
