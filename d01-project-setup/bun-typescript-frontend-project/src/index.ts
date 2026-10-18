const message = document.querySelector<HTMLParagraphElement>("#message");

if (!message) {
  throw new Error("Missing #message element");
}

message.textContent = "Running on Bun 🍞";
