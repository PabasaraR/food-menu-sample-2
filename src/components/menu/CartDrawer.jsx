
"use client";

export default function CartDrawer({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onPlaceOrder,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="max-h-[85svh] w-full max-w-lg overflow-hidden rounded-t-3xl border border-white/10 bg-[#0D1B14] shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <h2
              id="cart-title"
              className="font-serif text-2xl text-[#F7F0E3]"
            >
              Your Cart
            </h2>

            <p className="mt-1 text-xs text-white/45">
              Review your order
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl text-white/70 hover:bg-white/10"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="max-h-[45svh] space-y-4 overflow-y-auto p-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 border-b border-white/10 pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-[#D6B477]">
                  Rs. {item.price.toLocaleString("en-LK")}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onDecrease(item.id)}
                    aria-label={`Decrease ${item.name}`}
                    className="h-7 w-7 rounded-full border border-white/15 text-white"
                  >
                    −
                  </button>

                  <span className="min-w-4 text-center text-sm text-white">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => onIncrease(item.id)}
                    aria-label={`Increase ${item.name}`}
                    className="h-7 w-7 rounded-full border border-white/15 text-white"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="ml-auto text-xs text-red-300/80 hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="whitespace-nowrap text-xs font-semibold text-white">
                Rs. {(item.price * item.quantity).toLocaleString("en-LK")}
              </p>
            </div>
          ))}
        </div>

        {/* Checkout */}
        <div className="border-t border-white/10 bg-[#10251C] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-white/60">
              Total
            </span>

            <span className="font-serif text-2xl text-[#D6B477]">
              Rs. {total.toLocaleString("en-LK")}
            </span>
          </div>

          <button
            type="button"
            onClick={onPlaceOrder}
            className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#D6B477] px-5 text-xs font-bold uppercase tracking-[0.15em] text-[#10251C] transition hover:bg-[#F0D39A] active:scale-[0.98]"
          >
            Place Order ↗
          </button>

          <p className="mt-3 text-center text-[10px] text-white/35">
            Your order will be sent through WhatsApp
          </p>
        </div>

      </div>
    </div>
  );
}
