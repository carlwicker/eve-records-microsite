import { FaUserLarge, FaDeezer, FaFileArrowDown } from "react-icons/fa6";

export default function MasteringPage() {
  return (
    <div className="py-32">
      <section className="flex w-full justify-center flex-col">
        <div className="w-2/3 align-middle flex flex-col self-center gap-8">
          <h1 className="text-6xl font-bold uppercase">Mastering</h1>

          <p className="text-3xl">Get a free preview of your mastered track</p>

          <div className="pt-40">
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

          <div className="flex flex-col gap-12 items-center py-40 text-2xl">
            <h2 className="font-bold text-4xl uppercase ">
              Why master your music?
            </h2>
            <div className="flex flex-col items-center gap-2">
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

          <div className="text-3xl flex flex-col gap-20">
            <h4 className="font-bold text-3xl uppercase">
              Frequently Asked Questions
            </h4>

            <div className="text-3xl flex flex-col gap-5">
              <b>Who is this for?</b>

              <p>
                This is for artists and producers like you, no matter if you are
                a bedroom producer or a Grammy-winner. This is for anyone who
                wants peace of mind that their tracks sound great everywhere.
                You can focus on producing great music instead of running around
                testing your tracks on different speakers all day.
              </p>
            </div>

            <div className="text-3xl flex flex-col gap-5">
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

            <div className="text-3xl flex flex-col gap-5">
              <b>How should I prepare my tracks before uploading?</b>
              <p>For optimal results, follow these 3 steps:</p>
              <ol className="list-decimal flex flex-col p-10">
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

            <div className="text-3xl flex flex-col gap-5">
              <b>Is this free to try?</b>
              <p>
                Yes, you can upload and test the mastering tool with as many
                tracks as you like for free! You will receive a free preview of
                your mastered track. If you like the free preview, you can
                choose to purchase the fully mastered version. You will never be
                charged automatically.
              </p>
            </div>

            <div className="text-3xl flex flex-col gap-5">
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

            <div className="text-3xl flex flex-col gap-5">
              <b>I have a question, who can I contact?</b>
              <p>
                For any questions specific to mastering, please contact{" "}
                <a
                  href="mailto:recoverworld-support@masterchannel.ai"
                  className="hover:text-red-600 transition text-red-400 duration-300 ease-in-out"
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
