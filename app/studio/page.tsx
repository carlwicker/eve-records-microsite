import Image from "next/image";

export default function StudioPage() {
  return (
    <div className="pb-16 pt-32">
      <section className="flex w-full justify-center">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <h1 className="lg:text-6xl text-4xl font-bold uppercase">Studio</h1>
          <p className="md:text-3xl text-xl">
            Our studio is the beating heart of everything we do.
          </p>

          <p className="md:text-3xl text-xl">
            Whether you&apos;re an emerging talent looking to refine your sound
            or a seasoned artist seeking to push the boundaries of your
            creativity, our client services have got you covered.
          </p>

          <Image
            src="/img/studio.jpg"
            width={1024}
            height={600}
            sizes="100vw"
            alt="Studio"
          />

          <p className="md:text-3xl text-xl">
            Need your tracks to hit harder, shine brighter, and stand out from
            the crowd? Our digital mastering service will ensure your music
            reaches its full potential, ready to captivate your audience.
          </p>

          <p className="md:text-3xl text-xl">
            Want to elevate your productions to the next level? Our
            collaborative production work brings together a team of experienced
            professionals dedicated to realizing your artistic vision.
          </p>

          <p className="md:text-3xl text-xl">
            Struggling to achieve that perfect mix? Our full mixdown service
            will fine-tune every element of your track, ensuring it sounds
            crystal clear and ready for the dancefloor.
          </p>

          <p className="md:text-3xl text-xl">
            Prefer the warmth and character of analog sound? Our analog stem
            treatment brings vintage vibes and modern techniques together. Our
            dedicated SSL, Drawmer and Lexicon hardware will add just the right
            amount of colour to your mix.
          </p>

          <p className="md:text-3xl text-xl">
            Whether you are looking for precision, innovation, or a touch of
            old-school charm, get in touch!
          </p>

          <a
            className="md:text-3xl text-xl text-red-900 hover:text-red-600 font-bold transition duration-300 ease-in-out py-20"
            href="mailto:studio@recoverworld.com"
          >
            studio@recoverworld.com
          </a>
        </div>
      </section>
    </div>
  );
}
