"use client";

import {
  useState,
} from "react";

import {
  MessageCircle,
  Send,
  X,
} from "lucide-react";

interface Message {
  role:
    | "user"
    | "assistant";

  content: string;
}

export default function Chatbot() {
  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role:
          "assistant",

        content:
          "Hi 👋 Ask anything about Afrin.",
      },
    ]);

  async function sendMessage() {
    if (!message.trim())
      return;

    const userMessage = {
      role: "user" as const,
      content: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const response =
      await fetch(
        "/api/chatbot",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      );

    const data =
      await response.json();

    setMessages((prev) => [
      ...prev,
      {
        role:
          "assistant",

        content:
          data.answer,
      },
    ]);

    setMessage("");
  }

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        text-white
        shadow-xl
        flex
        items-center
        justify-center
        "
      >
        {open ? (
          <X />
        ) : (
          <MessageCircle />
        )}
      </button>

      {/* Chat Window */}

      {open && (
        <div
          className="
          fixed
          bottom-24
          right-6
          z-50
          w-[350px]
          h-[500px]
          rounded-3xl
          glass
          border
          border-white/10
          flex
          flex-col
          "
        >
          <div
            className="
            p-4
            border-b
            border-white/10
            "
          >
            <h3
              className="
              font-bold
              "
            >
              Portfolio AI
            </h3>
          </div>

          <div
            className="
            flex-1
            overflow-y-auto
            p-4
            space-y-4
            "
          >
            {messages.map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className={`
                  p-3
                  rounded-xl
                  ${
                    item.role ===
                    "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-white/10"
                  }
                  max-w-[80%]
                  `}
                >
                  {
                    item.content
                  }
                </div>
              )
            )}
          </div>

          <div
            className="
            p-4
            border-t
            border-white/10
            flex
            gap-2
            "
          >
            <input
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              placeholder="Ask about Afrin..."
              className="
              flex-1
              px-4
              py-2
              rounded-xl
              bg-white/10
              outline-none
              "
            />

            <button
              onClick={
                sendMessage
              }
              className="
              px-4
              rounded-xl
              bg-blue-500
              text-white
              "
            >
              <Send
                size={18}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}