export default function ContactPage() {
  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="w-2/3  align-middle flex flex-col self-center gap-8">
          <h1 className="font-bold text-6xl uppercase">Contact</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-2 text-black font-bold"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 text-black font-bold"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-2 text-black font-bold"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 font-bold transition duration-300 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
