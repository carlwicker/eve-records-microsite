export default function Home() {
  const content = {
    title: "Crafting Tomorrow's Anthems",
    description:
      "Welcome to Eve Records, where innovation meets electronic excellence. Explore our curated releases, join our global community, and experience the future of music.",
    link: {
      url: "https://store.recoverworld.com/store?search=&label=7",
      text: "Visit MP3/WAV Store >>",
    },
  };

  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="xl:w-2/3 w-full align-middle flex flex-col self-center gap-8">
          <h1 className="md:text-6xl text-4xl font-light">{content.title}</h1>
          <p className="md:text-3xl text-xl">{content.description}</p>
          <a
            href={content.link.url}
            target="_blank"
            className="md:text-3xl text-xl text-red-500 hover:text-red-600 font-bold transition duration-100 ease-in-out"
          >
            {content.link.text}
          </a>
        </div>
      </section>
    </div>
  );
}
