export default function Home() {
  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <h1 className="md:text-6xl text-4xl font-light">
            Crafting Tomorrow&apos;s Anthems
          </h1>
          <p className="md:text-3xl text-xl">
            Welcome to Eve Records, where innovation meets electronic
            excellence. Explore our curated releases, join our global community,
            and experience the future of music.
          </p>
          <a
            href="https://store.recoverworld.com/store?search=&label=7"
            target="_blank"
            className="md:text-3xl text-xl text-red-500 hover:text-red-600 font-bold transition duration-100 ease-in-out"
          >
            Visit MP3/WAV Store &gt;&gt;
          </a>
        </div>
      </section>
    </div>
  );
}
