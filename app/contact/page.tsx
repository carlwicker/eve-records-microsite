"use client";

import { useRef, useEffect, use, useState, RefObject } from "react";

export default function ContactPage() {
  const nameRef = useRef(null) as RefObject<HTMLInputElement>;
  const emailRef = useRef(null) as RefObject<HTMLInputElement>;
  const messageRef = useRef(null) as RefObject<HTMLTextAreaElement>;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <form className="w-full" onSubmit={handleSubmit}>
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
      </section>
    </div>
  );
}
