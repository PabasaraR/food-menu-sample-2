
"use client";

export default function ProductCard({ product, onAdd }) {
  const hasPrice = Number(product.price) > 0;

  return (
    <article className="
      group relative isolate flex min-w-0 items-stretch gap-3
      overflow-hidden rounded-[22px]
      border-2 border-[#C99B4B]
      bg-gradient-to-br from-[#FFFDF6] via-[#F8F0DF] to-[#EDE0C6]
      p-2.5
      shadow-[0_3px_0_#A97A35,0_7px_16px_rgba(75,48,12,0.16),inset_0_1px_0_white]
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_5px_0_#A97A35,0_13px_24px_rgba(75,48,12,0.22)]
      sm:gap-4 sm:rounded-[26px] sm:p-3
    ">

      {/* INNER GOLD BORDER */}
      <div className="
        pointer-events-none absolute inset-[4px] -z-10
        rounded-[17px] border border-[#D6B477]/50
      " />

      {/* FOOD IMAGE */}
      <div className="
        relative w-[45%] shrink-0 self-stretch
        overflow-hidden rounded-[16px]
        border-2 border-[#C99B4B]
        bg-[#E8DDC5]
        shadow-[0_3px_8px_rgba(55,35,10,0.25)]
      ">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* IMAGE GOLD FRAME */}
        <div className="
          pointer-events-none absolute inset-0
          rounded-[14px] border border-white/30
        " />
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="
        relative flex min-w-0 flex-1 flex-col
        justify-center py-2 pr-1
      ">

        {/* DECORATIVE GOLD LEAF */}
        <img
          src="/images/decorations/gold-leaves.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-5 -top-5
            h-16 w-16 rotate-[15deg] object-contain
            opacity-45 transition duration-500
            group-hover:opacity-75
            sm:h-20 sm:w-20
          "
        />

        {/* PRODUCT NAME */}
        <h3 className="
          relative z-10 max-w-[95%]
          font-serif text-[15px] font-bold leading-[1.25]
          text-[#10251C]
          sm:text-lg sm:leading-6
        ">
          {product.name}
        </h3>

        {/* SMALL GOLD DECORATION */}
        <div className="my-2 flex items-center gap-2">
          <span className="h-px w-7 bg-[#C99B4B]" />
          <span className="text-[9px] text-[#B1843D]">✦</span>
        </div>

        {/* DECORATIVE PRICE LABEL */}
        <div
          className="
            relative flex min-h-10 items-center justify-center
            border border-[#C08C35]
            bg-gradient-to-b from-[#FBE9B9] via-[#EBC875] to-[#F5DFA7]
            px-2 py-2
            shadow-[0_3px_5px_rgba(110,75,20,0.18),inset_0_1px_2px_white]
            sm:min-h-11 sm:px-3
          "
          style={{
            clipPath:
              "polygon(5% 0,95% 0,100% 18%,100% 82%,95% 100%,5% 100%,0 82%,0 18%)",
          }}
        >
          <span className="
            whitespace-nowrap font-serif text-sm font-bold
            text-[#38240C] sm:text-lg
          ">
            {hasPrice
              ? `Rs. ${product.price.toLocaleString("en-LK")}`
              : "Price Coming Soon"}
          </span>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          type="button"
          disabled={!hasPrice}
          onClick={() => onAdd(product)}
          className="
            mt-3 flex min-h-10 w-full items-center
            justify-center gap-2 rounded-xl
            border border-[#B68A45]
            bg-gradient-to-b from-[#194B34] to-[#082D1D]
            px-2 py-2
            text-[9px] font-bold uppercase tracking-[0.1em]
            text-[#FFF5DC]
            shadow-[0_3px_0_#052014,0_5px_9px_rgba(0,0,0,0.15)]
            transition-all duration-300
            hover:brightness-110
            active:translate-y-[2px] active:shadow-none
            disabled:cursor-not-allowed disabled:opacity-40
            sm:text-[10px]
          "
        >
          <span className="text-base text-[#E9C678]">＋</span>
          Add to Cart
        </button>

      </div>

      {/* GOLD CORNER DETAIL */}
      <span className="
        pointer-events-none absolute bottom-2 left-2
        text-[10px] text-[#B78C47]/70
      ">
        ✦
      </span>

    </article>
  );
}
