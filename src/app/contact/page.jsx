"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Message sent successfully!");
    
    // reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-20">

      {/* 🔥 HERO */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500">
            Have questions? We had love to hear from you.
          </p>
        </div>
      </section>

      {/* 🔥 CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        
        {/* LEFT INFO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Reach out to us for any queries, support, or collaboration.
          </p>

          <div className="space-y-2 text-sm text-gray-500">
            <p>📧 Email: support@skillforge.com</p>
            <p>📞 Phone: +880 1234-567890</p>
            <p>📍 Location: Bangladesh</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="border rounded-xl p-6 space-y-4 shadow-sm"
        >
          <h3 className="text-lg font-semibold">Send Message</h3>

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition"
          >
            Send Message
          </button>
        </form>

      </section>

      {/* 🔥 MAP / EXTRA */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Our Location
        </h2>
        <p className="text-gray-500">
          We are based in Bangladesh and serve globally 🌍
        </p>
      </section>

    </div>
  );
}