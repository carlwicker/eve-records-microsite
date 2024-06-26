import { FaUserLarge, FaDeezer, FaFileArrowDown } from "react-icons/fa6";
import Link from "next/link";

export default function MasteringPage() {
  return (
    <div className="pb-16 pt-32">
      <section className="flex w-full justify-center flex-col">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <h1 className="md:text-6xl text-4xl font-light pb-16">Mastering</h1>

          <p className="md:text-3xl text-xl">
            Get a free preview of your AI mastered track, or use our{" "}
            <Link
              href="./studio"
              className="text-red-500 hover:text-red-600 transition duration-100"
            >
              bespoke studio services
            </Link>{" "}
            to take your music to the next level.
          </p>

          <div className="md:pt-40 pt-20">
            <iframe
              title="mastering"
              style={{
                width: "100%",
                height: "300px",
                border: "none",
              }}
              height="300"
              src="https://partners.masterchannel.ai/partners/recoverworld/embed"
              loading="eager"
            ></iframe>
          </div>

          <div className="flex flex-col gap-12 items-center md:py-40 py-20 md:text-2xl text-xl text-center">
            <h2 className="font-bold text-4xl uppercase ">
              Why master your music?
            </h2>

            <div className="flex gap-10 py-10 xl:flex-row flex-col">
              <div className="flex flex-col  items-center gap-2">
                <h3>
                  <FaUserLarge size={"3rem"} />
                </h3>
                <p>Sound good on any device: speakers, headphones or radio</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3>
                  <FaDeezer size={"3rem"} />
                </h3>
                <p>Optimised for streaming platforms</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <h3>
                  <FaFileArrowDown size={"3rem"} />
                </h3>
                <p>Leave the technical headache to us and focus on creating</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-3xl uppercase">
              Frequently Asked Questions
            </h4>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>Who is this for?</b>

              <p>
                This is for artists and producers like you, no matter if you are
                a bedroom producer or a Grammy-winner. This is for anyone who
                wants peace of mind that their tracks sound great everywhere.
                You can focus on producing great music instead of running around
                testing your tracks on different speakers all day.
              </p>
            </div>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>Why use AI to master my tracks?</b>
              <p>
                Historically, mastering has been the domain of highly skilled
                engineers, who use their ears and specialized equipment to
                perfect the sound of a recording. However, with advances in
                artificial intelligence and machine learning, Masterchannel is
                now challenging the role of the human mastering engineer.
              </p>
              <p>
                Using sophisticated modelling and optimization, this mastering
                AI learns by itself what makes a good master. Top musicians and
                producers have also been involved in the development of this
                system to ensure that it’s capable of producing results that
                meet the highest standards of quality.
              </p>
            </div>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>How should I prepare my tracks before uploading?</b>
              <p>For optimal results, follow these 3 steps:</p>
              <ol className="list-decimal flex flex-col p-8">
                <li>Make sure your mix doesn&apos;t peak above 0dBFS.</li>
                <li>
                  Remove all limiters and other mastering plugins from your
                  master bus.
                </li>
                <li>
                  If you’re not happy with the mastered version, go back to your
                  DAW and tweak your mix and upload again. The AI will pick up
                  on the changes you have made for a better outcome.
                </li>
              </ol>
            </div>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>Is this free to try?</b>
              <p>
                Yes, you can upload and test the mastering tool with as many
                tracks as you like for free! You will receive a free preview of
                your mastered track. If you like the free preview, you can
                choose to purchase the fully mastered version. You will never be
                charged automatically.
              </p>
            </div>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>How do I pay for it?</b>
              <p>
                You can upload and test the mastering tool with as many tracks
                as you like for free. If you want to purchase the fully mastered
                version after listening to the free preview, you will be
                redirected to the checkout. Please note that payments will be
                made to our partner, Masterchannel, and will appear as such on
                your bank statement.
              </p>
            </div>

            <div className="md:text-3xl text-xl flex flex-col gap-5">
              <b>I have a question, who can I contact?</b>
              <p>
                For any questions specific to mastering, please contact{" "}
                <a
                  href="mailto:recoverworld-support@masterchannel.ai"
                  className="hover:text-red-600 transition text-red-500 duration-100 ease-in-out"
                >
                  recoverworld-support@masterchannel.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
