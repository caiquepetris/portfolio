export function sanitize(str) {
  return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

