"use client";

import { useRef, RefObject, useEffect, useState } from "react";

export default function ContactPage() {
  const nameRef = useRef(null) as RefObject<HTMLInputElement>;
  const emailRef = useRef(null) as RefObject<HTMLInputElement>;
  const messageRef = useRef(null) as RefObject<HTMLTextAreaElement>;

  const [formData, setFormData] = useState({
    name: nameRef.current?.value || "",
    email: emailRef.current?.value || "",
    message: messageRef.current?.value || "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("THIS:", JSON.stringify(formData));

    try {
      const response = await fetch("https://everecords.co.uk/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle successful response
        console.log("Form submitted successfully", formData);
      } else {
        // Handle error response
        console.error("Failed to submit form");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error occurred", error);
    }
  }

  return (
    <div className="py-32">
      <section className="flex w-full">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <form
            className="w-full lg:w-2/3 self-center"
            onSubmit={handleSubmit}
            onChange={() => {
              setFormData({
                name: nameRef.current?.value || "",
                email: emailRef.current?.value || "",
                message: messageRef.current?.value || "",
              });
            }}
          >
            <div className="flex flex-wrap mb-6">
              <div className="w-full ">
                <input
                  className="w-full bg-gray-200 text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  className=" w-full bg-gray-200 text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-full">
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  ref={messageRef}
                  name="message"
                  placeholder="Message"
                  rows={7}
                  required
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
