"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        process.env
          .NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env
          .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name:
            formData.name,

          from_email:
            formData.email,

          message:
            formData.message,
        },
        process.env
          .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
      py-32
      relative
      "
    >
      <div className="container mx-auto px-6">

        <div
          className="
          text-center
          mb-16
          "
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-500
            "
          >
            Contact
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            Get In
            <span className="gradient-text">
              {" "}
              Touch
            </span>
          </h2>
        </div>

        <div
          className="
          max-w-3xl
          mx-auto
          glass
          rounded-3xl
          p-8
          border
          border-white/10
          "
        >
          <form
            onSubmit={
              handleSubmit
            }
            className="
            space-y-6
            "
          >
            {/* Name */}

            <div>
              <label
                className="
                mb-2
                block
                font-medium
                "
              >
                Name
              </label>

              <div
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                bg-white/5
                "
              >
                <User size={18} />

                <input
                  type="text"
                  name="name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="Your Name"
                  className="
                  flex-1
                  bg-transparent
                  outline-none
                  "
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                className="
                mb-2
                block
                font-medium
                "
              >
                Email
              </label>

              <div
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                bg-white/5
                "
              >
                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="you@example.com"
                  className="
                  flex-1
                  bg-transparent
                  outline-none
                  "
                />
              </div>
            </div>

            {/* Message */}

            <div>
              <label
                className="
                mb-2
                block
                font-medium
                "
              >
                Message
              </label>

              <div
                className="
                flex
                gap-3
                px-4
                py-3
                rounded-xl
                bg-white/5
                "
              >
                <MessageSquare
                  size={18}
                />

                <textarea
                  rows={6}
                  name="message"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="Write your message..."
                  className="
                  flex-1
                  bg-transparent
                  outline-none
                  resize-none
                  "
                />
              </div>
            </div>

            {/* Success */}

            {success && (
              <div
                className="
                p-4
                rounded-xl
                bg-green-500/20
                text-green-400
                "
              >
                Message sent
                successfully 🚀
              </div>
            )}

            {/* Button */}

            <button
              disabled={loading}
              className="
              w-full
              flex
              justify-center
              items-center
              gap-3
              py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              font-semibold
              hover:scale-[1.02]
              transition
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}

              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}