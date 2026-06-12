const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const NUMBERS = '23456789';
const ALL_CHARS = LETTERS + NUMBERS;
const DEFAULT_LENGTH = 6;

const getSecureRandomIndex = (max) => {
  const cryptoApi = window.crypto || window.msCrypto;
  if (!cryptoApi?.getRandomValues) {
    return Math.floor(Math.random() * max);
  }
  const buffer = new Uint32Array(1);
  cryptoApi.getRandomValues(buffer);
  return buffer[0] % max;
};

const shuffleArray = (items) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = getSecureRandomIndex(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const generateCaptchaText = (length = DEFAULT_LENGTH) => {
  const safeLength = Math.max(4, Math.min(length, 8));
  const chars = [
    LETTERS[getSecureRandomIndex(LETTERS.length)],
    NUMBERS[getSecureRandomIndex(NUMBERS.length)],
  ];

  for (let i = chars.length; i < safeLength; i += 1) {
    chars.push(ALL_CHARS[getSecureRandomIndex(ALL_CHARS.length)]);
  }

  return shuffleArray(chars).join('');
};

export const normalizeCaptchaInput = (value) => (
  String(value || '').trim().toUpperCase().replace(/\s/g, '')
);

export const validateCaptchaInput = (expected, userInput) => {
  const normalizedExpected = normalizeCaptchaInput(expected);
  const normalizedUser = normalizeCaptchaInput(userInput);

  if (!normalizedExpected || !normalizedUser) {
    return false;
  }

  return normalizedExpected === normalizedUser;
};

export const drawCaptchaOnCanvas = (canvas, text) => {
  if (!canvas || !text) {
    return;
  }

  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f1f5f9');
  gradient.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 6; i += 1) {
    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 + getSecureRandomIndex(20) / 100})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(getSecureRandomIndex(width), getSecureRandomIndex(height));
    ctx.lineTo(getSecureRandomIndex(width), getSecureRandomIndex(height));
    ctx.stroke();
  }

  const charWidth = width / (text.length + 1);
  [...text].forEach((char, index) => {
    const x = charWidth * (index + 0.75);
    const y = height / 2 + (getSecureRandomIndex(11) - 5);
    const angle = (getSecureRandomIndex(21) - 10) * (Math.PI / 180);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.font = `bold ${22 + getSecureRandomIndex(5)}px "Segoe UI", Arial, sans-serif`;
    ctx.fillStyle = `hsl(${220 + getSecureRandomIndex(40)}, 65%, ${30 + getSecureRandomIndex(15)}%)`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, 0, 0);
    ctx.restore();
  });

  for (let i = 0; i < 40; i += 1) {
    ctx.fillStyle = `rgba(15, 23, 42, ${0.05 + getSecureRandomIndex(10) / 100})`;
    ctx.fillRect(getSecureRandomIndex(width), getSecureRandomIndex(height), 2, 2);
  }
};
