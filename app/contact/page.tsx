import { Resend } from "resend";

export default function ContactPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    "use server";
    const resend = new Resend(process.env.RESEND_API);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "carlwicker@gmail.com",
      subject: "Eve Records Website Contacat Form",
      html: "<p>Message</p>",
    });

    console.log(data, error);
  }

  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="w-2/3  align-middle flex flex-col self-center gap-8">
          <h1 className="font-bold text-6xl uppercase">Contact</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
