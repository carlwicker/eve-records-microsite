export default function DemosPage() {
  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="w-2/3  align-middle flex flex-col self-center gap-8">
          <h1 className="text-6xl font-bold uppercase">
            Demo Submission Guidelines
          </h1>
          <p className="text-3xl">
            We have a deep appreciation for new music and take pride in the fact
            that many of our latest releases stem from demo submissions. To
            ensure the smoothest process for both you and us, we kindly ask that
            you adhere to a few simple guidelines:
          </p>

          <ol className="list-decimal list-inside">
            <li className="text-3xl p-4">
              <strong className="font-bold">Quality Over Quantity:</strong>{" "}
              Please refrain from submitting works in progress. While we value
              your creative journey, our capacity doesn&apos;t allow us to
              provide extensive production guidance. Share your music with
              trusted peers for feedback before sending it our way. If it meets
              the mark, we&apos;re eager to hear it.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Concise Submissions:</strong> Limit
              your submission to 2 or 3 tracks. If we&apos;re interested in
              more, we&apos;ll reach out. Send us your finest work, and if it
              resonates with us, we`&apos;`ll be sure to contact you.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Submission Format:</strong> Avoid
              attaching files directly to emails, as they congest our inbox and
              are promptly deleted. Refer to the submission requirements
              outlined below for the preferred format.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Comprehensive Information:</strong>{" "}
              Include pertinent details about yourself, such as previous
              releases, web presence, studio information, and a contact number.
              While we appreciate context, please keep it concise and relevant.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Exclusivity:</strong> Aim to keep
              your demos as exclusive as possible. If we choose to sign your
              release, maximizing its sales potential becomes paramount. Thus,
              avoiding widespread internet dissemination prior to submission
              greatly facilitates our efforts.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Submission Format:</strong>{" "}
              Initially, please submit your tracks in streaming formats such as
              SoundCloud or YouTube. This allows us to listen conveniently. If
              we&apos;re intrigued by what we hear, we&apos;ll request a
              full-length 320 MP3. While we strive to provide feedback on
              rejected tracks, please understand that due to the volume of
              submissions, we may not be able to respond to everyone promptly.
            </li>

            <li className="text-3xl p-4">
              <strong className="font-bold">Patience and Persistence:</strong>{" "}
              Given the volume of submissions we receive, it may take up to two
              weeks for us to review your work. Kindly refrain from follow-ups
              during this period, as it could inadvertently prolong the process.
            </li>
          </ol>

          <p className="text-3xl">
            We appreciate your interest and eagerly anticipate the possibility
            of collaborating with you in the future. Best of luck, and we
            eagerly await hearing from you!
          </p>

          <a
            className="text-3xl py-20 text-red-900 hover:text-red-600 font-bold transition duration-300 ease-in-out"
            href="mailto:demos@recoverworld.com"
          >
            demos@recoverworld.com
          </a>
        </div>
      </section>
    </div>
  );
}
