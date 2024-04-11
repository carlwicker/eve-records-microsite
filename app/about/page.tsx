export default function AboutPage() {
  return (
    <div className="flex justify-end">
      <div className="w-1/2 text-2xl flex gap-10 flex-col py-60">
        <h1
          className="text-6xl font-bold p-4"
          data-scroll
          data-scroll-speed="0.2"
        >
          Redefining the Sound of Tomorrow
        </h1>
        <p className="text-3xl p-4">
          Embark on an unparalleled journey through the pulsating realms of
          electronic music with us. Beyond being a record label, we are a
          multifaceted powerhouse, encompassing record labels, a pioneering
          publishing company, an immersive online record store, and
          comprehensive consultancy services.
        </p>
        <p className="text-3xl p-4">
          Our commitment to excellence extends to artist management and top-tier
          recording and mastering facilities, ensuring every sonic creation
          reaches its fullest potential. With a focus on innovation and pushing
          the boundaries of sound, we invite you to join us in shaping the
          future of electronic music.
        </p>
      </div>
    </div>
  );
}
