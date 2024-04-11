import Image from "next/image";

export default function StudioPage() {
  return (
    <div className="flex justify-end">
      <div className="w-1/2 flex flex-col gap-10 text-2xl leading-8 font-light py-60">
        <h1 className="text-6xl font-bold p-4">Studio</h1>
        <p className="text-3xl p-4">
          Our studio is the beating heart of everything we do.
        </p>

        <p className="text-3xl p-4">
          Whether you're an emerging talent looking to refine your sound or a
          seasoned artist seeking to push the boundaries of your creativity, our
          client services have got you covered.
        </p>

        <Image src="/img/studio.jpg" width={800} height={600} alt="Studio" />

        <p className="text-3xl p-4">
          Need your tracks to hit harder, shine brighter, and stand out from the
          crowd? Our digital mastering service will ensure your music reaches
          its full potential, ready to captivate your audience.
        </p>

        <p className="text-3xl p-4">
          Want to elevate your productions to the next level? Our collaborative
          production work brings together a team of experienced professionals
          dedicated to realizing your artistic vision.
        </p>

        <p className="text-3xl p-4">
          Struggling to achieve that perfect mix? Our full mixdown service will
          fine-tune every element of your track, ensuring it sounds crystal
          clear and ready for the dancefloor.
        </p>

        <p className="text-3xl p-4">
          Prefer the warmth and character of analog sound? Our analog stem
          treatment brings vintage vibes and modern techniques together. Our
          dedicated SSL, Drawmer and Lexicon hardware will add just the right
          amount of colour to your mix.
        </p>

        <p className="text-3xl p-4">
          Whether you are looking for precision, innovation, or a touch of
          old-school charm, get in touch!
        </p>

        <a
          className="text-3xl p-4 text-red-900 hover:text-red-600 font-bold transition duration-300 ease-in-out"
          href="mailto:studio@recoverworld.com"
        >
          studio@recoverworld.com
        </a>
      </div>
    </div>
  );
}
