export default function Home() {
  return (
    <div>
      <section className="flex w-full justify-end py-60">
        <div className="xl:w-1/2  align-middle flex flex-col self-center gap-8">
          <h1 className="text-6xl font-bold p-4">
            Crafting Tomorrow's Anthems
          </h1>
          <p className="text-3xl p-4">
            Welcome to Eve Records, where innovation meets electronic
            excellence. Explore our curated releases, join our global community,
            and experience the future of music.
          </p>
          <a
            href="https://store.recoverworld.com/store?search=&label=7"
            target="_blank"
            className="text-3xl p-4 text-red-900 hover:text-red-600 font-bold transition duration-300 ease-in-out"
          >
            Visit MP3/WAV Store &gt;&gt;
          </a>
        </div>
      </section>
    </div>
  );
}
