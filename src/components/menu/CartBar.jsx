
export default function CartBar({ cart, onOpen }) {
  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (itemCount === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4">
      <button
        type="button"
        onClick={onOpen}
        className="mx-auto flex w-full max-w-lg items-center justify-between rounded-2xl border border-[#F0D39A]/30 bg-[#173D30] px-5 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition hover:bg-[#204A39] active:scale-[0.99]"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6B477] text-lg text-[#10251C]">
            🛒
          </span>

          <div>
            <p className="text-sm font-bold text-white">
              View Cart · {itemCount} items
            </p>

            <p className="mt-0.5 text-xs text-white/60">
              Rs. {total.toLocaleString("en-LK")}
            </p>
          </div>
        </div>

        <span className="text-sm font-bold text-[#D6B477]">
          View →
        </span>
      </button>
    </div>
  );
}
