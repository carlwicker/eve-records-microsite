export default function AboutPage() {
  return (
    <div className="pb-16 pt-32">
      <section className="flex w-full justify-center">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <h1 className="md:text-6xl text-4xl font-light pb-16 ">
            Redefining the Sound of Tomorrow
          </h1>
          <p className="md:text-3xl text-xl">
            Embark on an unparalleled journey through the pulsating realms of
            electronic music with us. Beyond being a record label, we are a
            multifaceted powerhouse, encompassing record labels, a pioneering
            publishing company, an immersive{" "}
            <a
              href="https://store.recoverworld.com/store?search=&label=7"
              target="_blank"
              className="hover:text-red-600 transition text-red-500 duration-100 ease-in-out"
            >
              online MP3/WAV store
            </a>
            , and comprehensive consultancy services.
          </p>
          <p className="md:text-3xl text-xl">
            Our commitment to excellence extends to artist management and
            top-tier recording and mastering facilities, ensuring every sonic
            creation reaches its fullest potential. With a focus on innovation
            and pushing the boundaries of sound, we invite you to join us in
            shaping the future of electronic music.
          </p>
        </div>
      </section>
    </div>
  );
}
