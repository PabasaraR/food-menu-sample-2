
const highlights = [
  "Fresh Ingredients",
  "Bold Flavours",
  "Made with Passion",
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#07110E] px-5 pb-7 pt-7 text-[#F7F0E3] sm:px-8 sm:py-10 lg:min-h-screen lg:px-16">

      {/* Background lighting */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-[#D6B477]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-emerald-700/10 blur-[110px]" />

      {/* Decorative light */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D6B477]/50 to-transparent blur-sm" />

      <div className="mx-auto w-full max-w-6xl">

        {/* BRAND IDENTITY */}
        <header className="mb-8 animate-[brand-reveal_1s_ease-out_both] text-center sm:mb-10 lg:mb-12 lg:text-left">

          <div className="flex items-center justify-center gap-3 lg:justify-start">

            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#D6B477]" />

            <h1 className="font-serif text-[clamp(1.55rem,7vw,3rem)] font-bold tracking-[0.12em] text-[#F7F0E3] drop-shadow-[0_0_12px_rgba(214,180,119,0.35)]">
              THE URBAN KITCHEN
            </h1>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#D6B477]" />

          </div>

          <div className="mt-2 flex items-center justify-center gap-2 lg:justify-start">
            <span className="text-[9px] text-[#D6B477]">✦</span>

            <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#D6B477]/80">
              Crafted for food lovers
            </p>

            <span className="text-[9px] text-[#D6B477]">✦</span>
          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* TEXT CONTENT */}
          <div className="animate-[text-reveal_1s_ease-out_200ms_both] text-center lg:text-left">

            <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">

              <span className="h-px w-6 bg-[#D6B477]/70" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6B477] sm:text-xs">
                Welcome to a world of flavour
              </p>

              <span className="h-px w-6 bg-[#D6B477]/70 lg:hidden" />

            </div>

            {/* Main heading */}
            <h2 className="font-serif text-[clamp(2.7rem,10.5vw,6.4rem)] leading-[0.97] tracking-[-0.045em]">

              TASTE THE

              <span className="relative mt-1 block whitespace-nowrap text-[0.91em] italic text-[#D6B477] drop-shadow-[0_0_8px_rgba(214,180,119,0.35)]">

                EXTRAORDINARY.

                {/* Small sparkle */}
                <span className="absolute -right-1 -top-5 text-sm not-italic text-[#F0D39A] drop-shadow-[0_0_10px_rgba(240,211,154,0.9)] sm:-right-4 sm:-top-7 sm:text-xl">
                  ✦
                </span>

              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[320px] text-[13px] leading-6 text-[#B7BDB6] sm:text-sm lg:mx-0">
              Great food. Unforgettable flavour.
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-3 lg:justify-start">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/55 sm:text-[10px]"
                >
                  <span className="text-[10px] text-[#D6B477]">✦</span>
                  {item}
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">

              <a
                href="#menu"
                className="group relative flex min-h-14 w-full max-w-xs items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#C9A467] via-[#E5C58B] to-[#C9A467] px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#10251C] shadow-[0_0_25px_rgba(214,180,119,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(214,180,119,0.35)] active:scale-[0.97]"
              >

                {/* Button shine */}
                <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-full" />

                <span className="relative">
                  Explore Menu
                </span>

                <span className="relative text-base transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>

              </a>

            </div>

          </div>

          {/* FOOD IMAGE */}
          <div className="relative mx-auto w-full max-w-[390px] animate-[image-reveal_1.3s_cubic-bezier(0.16,1,0.3,1)_350ms_both] lg:max-w-none">

            {/* Outer gold frame */}
            <div className="absolute -inset-2 rotate-2 rounded-[2rem] border border-[#D6B477]/25 shadow-[0_0_30px_rgba(214,180,119,0.06)] transition-transform duration-700 hover:rotate-0 sm:-inset-3" />

            <div className="group relative aspect-[5/4] overflow-hidden rounded-[1.7rem] border border-[#D6B477]/20 bg-[#14241B] shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:aspect-[4/3] lg:aspect-[4/5] lg:rounded-[2rem]">

              <img
                src="/images/menu-items/chicken-nasi-gorengspi.png"
                alt="Signature Chicken Nasi Goreng at The Urban Kitchen"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110E]/90 via-transparent to-transparent" />

              {/* Image highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#D6B477]" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D6B477]">
                    Signature Dish
                  </p>
                </div>

                <h3 className="font-serif text-2xl text-white drop-shadow-lg sm:text-3xl">
                  Chicken Nasi Goreng
                </h3>

              </div>
            </div>

            {/* Floating fresh badge */}
            <div className="absolute -left-2 top-4 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#D6B477]/50 bg-[#10251C]/95 text-center shadow-[0_0_25px_rgba(214,180,119,0.15)] backdrop-blur-md sm:-left-5 sm:top-8 sm:h-24 sm:w-24">

              <div>
                <p className="font-serif text-xl text-[#D6B477] sm:text-2xl">
                  100%
                </p>

                <p className="mt-0.5 text-[7px] uppercase tracking-widest text-white/70">
                  Fresh
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#menu"
          className="mt-9 flex animate-[text-reveal_1s_ease-out_700ms_both] flex-col items-center gap-2 text-white/35 transition-colors hover:text-[#D6B477] lg:mt-12"
        >

          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <span className="animate-bounce text-lg">
            ↓
          </span>

        </a>

      </div>
    </section>
  );
}
