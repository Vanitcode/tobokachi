// FSRS-5 tal y como lo implementa swift-fsrs (la librería que usa la app): mismas fórmulas
// y los mismos 19 parámetros. Aquí solo hace falta calcular el siguiente intervalo de una tarjeta.
const W = [
  0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234, 1.616, 0.1544, 1.0824, 1.9813,
  0.0953, 0.2975, 2.2042, 0.2407, 2.9466, 0.5034, 0.6567,
];
const FACTOR = 19 / 81;
const DECAY = -0.5;
const RETENTION = 0.9;

/** Probabilidad de recordar la tarjeta t días después, con estabilidad S (días) */
export const retrievability = (t: number, S: number) => Math.pow(1 + (FACTOR * t) / S, DECAY);

/** Días hasta que R baja a la retención objetivo (90 %) */
const interval = (S: number) => Math.max(1, Math.round((S / FACTOR) * (Math.pow(RETENTION, 1 / DECAY) - 1)));

/**
 * Intervalos (en días) para Again, Hard, Good y Easy de una tarjeta en repaso,
 * con estabilidad S, dificultad D y vista hace `elapsed` días.
 */
export function nextIntervals(S: number, D: number, elapsed: number): [number, number, number, number] {
  const R = retrievability(elapsed, S);
  const forget = W[11] * Math.pow(D, -W[12]) * (Math.pow(S + 1, W[13]) - 1) * Math.exp((1 - R) * W[14]);
  const growth = Math.exp(W[8]) * (11 - D) * Math.pow(S, -W[9]) * (Math.exp((1 - R) * W[10]) - 1);
  const I = [forget, S * (1 + growth * W[15]), S * (1 + growth), S * (1 + growth * W[16])].map(interval);
  // Como en la app: cada botón siempre da más días que el anterior
  I[0] = Math.min(I[0], I[1]);
  I[1] = Math.max(I[1], I[0] + 1);
  I[2] = Math.max(I[2], I[1] + 1);
  I[3] = Math.max(I[3], I[2] + 1);
  return I as [number, number, number, number];
}
