// File: helpers.js
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateDamage(baseDamage, roll) {
  const minDamage = baseDamage * 0.8;
  const maxDamage = baseDamage * 1.2;
  const randomDamage = Math.floor(getRandomInt(minDamage, maxDamage));
  return Math.max(0, randomDamage);
}

