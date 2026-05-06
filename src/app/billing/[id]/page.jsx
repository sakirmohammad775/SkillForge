"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { coursesData } from "@/data/courses";

export default function Billing() {
  const { id } = useParams();
  const router = useRouter();
  const course = coursesData.find((c) => c.id === id);
  const [user, setUser] = useState(null);
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, []);

  if (!course)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p className="font-black uppercase">Course not found</p>
      </div>
    );

  const handleChange = (e) =>
    setCard({ ...card, [e.target.name]: e.target.value });

  const handlePay = async (e) => {
    e.preventDefault();
    if (!card.name || !card.number || !card.expiry || !card.cvv) return;
    setPaying(true);

    try {
      // Simulate payment processing (2 seconds)
      await new Promise((r) => setTimeout(r, 2000));

      // Save enrollment to database
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          courseCategory: course.category,
          courseImage: course.image,
          price: course.price,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message); // e.g. "Already enrolled"
        setPaying(false);
        return;
      }

      setPaid(true);
    } catch (err) {
      alert("Payment failed. Try again.");
    } finally {
      setPaying(false);
    }
  };

  if (paid) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-4xl mx-auto">
            ✅
          </div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
            You are Enrolled!
          </h1>
          <p className="text-gray-400 text-sm">
            Welcome to{" "}
            <span className="text-white font-black">{course.title}</span>. Your
            learning journey starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all"
            >
              Browse More Courses
            </Link>
            <Link
              href="/"
              className="px-8 py-4 rounded-2xl border border-white/10 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link
          href={`/courses/${id}`}
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-pink-500 transition-colors mb-10"
        >
          ← Back to Course
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Payment Form */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                Payment Details
              </h2>

              <form onSubmit={handlePay} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={card.name}
                    onChange={handleChange}
                    placeholder="Sakir Mohammad"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={card.number}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                      Expiry
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={card.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                      CVV
                    </label>
                    <input
                      type="password"
                      name="cvv"
                      value={card.cvv}
                      onChange={handleChange}
                      placeholder="•••"
                      maxLength={3}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={paying}
                  className="w-full bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-pink-500/20 active:scale-[0.98] disabled:opacity-50 mt-2"
                >
                  {paying ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay $${course.price} Now →`
                  )}
                </button>
              </form>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              <span>🔒</span> Secured by 256-bit SSL Encryption
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 space-y-6 sticky top-10">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
                Order Summary
              </h2>

              {/* Course Card */}
              <div className="flex gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 rounded-2xl object-cover border border-white/10 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-white font-black text-sm uppercase tracking-tight truncate">
                    {course.title}
                  </p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {course.category}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-white">${course.price}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/5">
                  <span className="text-white font-black text-xs uppercase tracking-widest">
                    Total
                  </span>
                  <span className="text-2xl font-black text-white">
                    ${course.price}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {[
                  "Lifetime Access",
                  "Verified Certificate",
                  "Money-back Guarantee",
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
