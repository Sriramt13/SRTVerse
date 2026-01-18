import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9eiavm",
        "template_wp8n7ik",
        form.current,
        "aoF7yEp3OTwSjAJn4"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-[#050010] to-[#0a0020]"
    >
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(120,80,255,0.25)]">
        <p className="text-purple-400 tracking-widest text-sm mb-3 text-center">
          [ CONTACT ]
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
          Let’s Connect
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-500 resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-black
                       bg-gradient-to-r from-purple-500 to-pink-500
                       hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
