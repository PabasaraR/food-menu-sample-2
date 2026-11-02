
const WHATSAPP_NUMBER = "94776704556";

export function sendWhatsAppOrder(cart, tableNumber) {
  if (!cart.length || !tableNumber) return;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderLines = cart.map((item, index) =>
    `${index + 1}. ${item.name}` +
    `   ${item.quantity} x Rs. ${item.price.toLocaleString("en-LK")} = Rs. ${(item.price * item.quantity).toLocaleString("en-LK")} \n`
  );

  const message = [
    "Hello The Urban Kitchen! 👋",
    "",
    `TABLE NUMBER: ${tableNumber}`,
    "",
    "NEW FOOD ORDER",
    "------------------------",
    "",
    ...orderLines,
    "",
    "------------------------",
    `TOTAL: Rs. ${total.toLocaleString("en-LK")}`,
    "",
    "Please confirm my order. Thank you!",
  ].join("\n");

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}