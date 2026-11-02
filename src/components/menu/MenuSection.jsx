
"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menu";
import ProductCard from "./ProductCard";

export default function MenuSection({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0].id
  );

  const currentCategory = menuCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#F7F0E3]"
    >

      {/* GREEN TOP HEADING */}
      <div className="relative overflow-hidden bg-[#07110E] px-4 pb-8 pt-10 text-center sm:pb-10 sm:pt-14">

        {/* GOLD SIDE DECORATIONS */}
        <img
          src="/images/decorations/gold-leaves.png"
          alt=""
          className="pointer-events-none absolute -left-8 top-0 w-36 opacity-90 sm:w-56"
        />

        <img
          src="/images/decorations/gold-leaves.png"
          alt=""
          className="pointer-events-none absolute -right-8 top-0 w-36 -scale-x-100 opacity-90 sm:w-56"
        />

        <div className="relative z-10 mx-auto max-w-5xl">

          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#E6BD65] sm:text-xs">
            ✦ The Urban Kitchen ✦
          </p>

          <div className="my-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D6B477] sm:w-20" />
            <span className="text-2xl text-[#E6BD65]">✧</span>
            <span className="h-px w-10 bg-[#D6B477] sm:w-20" />
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-[#FFFDF5] drop-shadow-lg sm:text-5xl md:text-6xl">
            {currentCategory.name}
          </h2>

          <p className="mt-3 text-xs tracking-widest text-[#E6BD65] sm:text-sm">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* CREAM MENU BODY */}
      <div className="relative bg-[#F7F0E3] px-3 py-7 sm:px-6 sm:py-10">

        {/* OUTER DECORATIVE BORDER */}
        <div className="pointer-events-none absolute inset-2 rounded-[28px] border-2 border-[#D6B477]/70 sm:inset-4 sm:rounded-[38px]" />
        <div className="pointer-events-none absolute inset-3 rounded-[24px] border border-[#D6B477]/40 sm:inset-5 sm:rounded-[34px]" />

        <div className="relative z-10 mx-auto max-w-7xl">


        {/* CATEGORY NAVIGATION */}
        <div className="mb-8 w-full min-w-0">

          <p className="mb-4 text-center font-serif text-sm italic text-[#9B753A] sm:text-base font-weight-bold">
            ✦ Explore Our Categories ✦
          </p>

          {/* SCROLL CONTAINER */}
          <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-[#D6B477]/50 bg-[#EFE4CE]/50 px-1 py-3 shadow-[inset_0_2px_5px_rgba(120,80,20,0.06)]">

            <div
              className="
                flex w-full min-w-0 flex-nowrap
                gap-2 overflow-x-auto overscroll-x-contain
                px-2 pb-2
                touch-pan-x snap-x snap-mandatory
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                sm:flex-wrap sm:justify-center
                sm:overflow-visible sm:pb-0
              "
            >
              {menuCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      shrink-0 snap-start whitespace-nowrap
                      rounded-full border px-4 py-2.5
                      text-[10px] font-bold
                      transition-all duration-300
                      active:scale-95 sm:px-5 sm:text-xs
                      ${
                        isActive
                          ? "border-[#A97832] bg-gradient-to-b from-[#F2D58E] to-[#D6B477] text-[#10251C] shadow-[0_3px_0_#A77932,0_5px_10px_rgba(80,50,10,0.15)]"
                          : "border-[#D6B477]/70 bg-[#FFFDF5] text-[#173D30] shadow-sm hover:bg-[#F3E5C6]"
                      }
                    `}
                  >
                    {isActive && <span className="mr-1">✦</span>}
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SWIPE INDICATOR */}
          <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
            <span className="h-px w-6 bg-[#D6B477]/60" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A17B42]">
              Swipe to explore
            </span>
            <span className="h-px w-6 bg-[#D6B477]/60" />
          </div>

        </div>


          {/* CATEGORY SUBHEADING */}
          <div className="mb-6 text-center">
            <span className="font-serif text-sm italic text-[#9B753A]">
              ✦ Carefully prepared for you ✦
            </span>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78613C]">
              {currentCategory.products.length} Delicious Selections
            </p>
          </div>

          {/* FOOD CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {currentCategory.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
              />
            ))}
          </div>

        </div>
      </div>

      {/* GREEN BOTTOM DECORATION */}
      <div className="relative h-20 overflow-hidden bg-[#07110E] sm:h-28">

        <img
          src="/images/decorations/gold-leaves.png"
          alt=""
          className="absolute -bottom-12 -left-5 w-36 opacity-90 sm:w-52"
        />

        <img
          src="/images/decorations/gold-leaves.png"
          alt=""
          className="absolute -bottom-12 -right-5 w-36 -scale-x-100 opacity-90 sm:w-52"
        />

        <div className="relative z-10 flex h-full items-center justify-center">
          <p className="font-serif text-xs italic tracking-[0.2em] text-[#E6BD65]">
            The Urban Kitchen · Crafted for Food Lovers
          </p>
        </div>
      </div>

    </section>
  );
}
