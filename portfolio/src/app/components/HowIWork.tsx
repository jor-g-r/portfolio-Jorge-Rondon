import type { Content } from "@/content/types";

// Pillar 1 of the brand: the agent workflow, told as principles. No employer internals here.
export default function HowIWork({ content }: { content: Content["howIWork"] }) {
  return (
    <section
      className="border-b border-solid border-dark-500 z-10 relative"
      id="how-i-work"
    >
      <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>

      <div className="container mx-auto px-8 xl:px-[68px] py-20 z-30 relative">
        <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center">
          {content.title}
        </h2>
        <p className="mx-auto max-w-3xl text-center text-white-100 leading-8 pt-6">
          {content.intro}
        </p>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
          {content.principles.map((item, index) => (
            <li
              key={item.title}
              className="p-5 bg-card-gradient border border-stone-800 hover:border-neutral-700 rounded-md shadow-lg"
            >
              <span className="condensed text-primary text-sm tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="condensed text-xl lg:text-2xl font-bold pt-1 pb-2">
                {item.title}
              </h3>
              <p className="text-white-100 leading-6">{item.text}</p>
            </li>
          ))}
        </ol>

        <figure className="mx-auto max-w-3xl pt-16 text-center">
          <blockquote className="text-xl lg:text-2xl font-light leading-9 text-white-100">
            “{content.quote.text}”
          </blockquote>
          <figcaption className="condensed uppercase tracking-widest text-sm text-neutral-400 pt-4">
            {content.quote.source}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
