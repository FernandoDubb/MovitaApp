export type EmotionType = "feliz" | "triste" | "enojado" | "ansioso" | "motivado";

export const EMOTIONS: Record<EmotionType, string[]> = {
  feliz: [
    "La felicidad no es un destino, es el camino.",
    "Hoy es un buen día para sonreír.",
    "Lo que haces con alegría, vuelve multiplicado.",
  ],
  triste: [
    "Está bien sentirse mal, pero no te quedes ahí.",
    "Lágrimas hoy, fuerza mañana.",
    "Incluso las noches más oscuras terminan con un amanecer.",
  ],
  enojado: [
    "Respira. No todo merece tu energía.",
    "Tu paz vale más que cualquier discusión.",
    "No dejes que un mal momento arruine tu día.",
  ],
  ansioso: [
    "Un paso a la vez, vas bien.",
    "Respira profundo, lo estás haciendo mejor de lo que crees.",
    "No tienes que tener todo resuelto hoy.",
  ],
  motivado: [
    "Cree en ti, eres capaz de mucho más.",
    "Si el plan no funciona, cambia el plan, no la meta.",
    "Hazlo por la persona en la que te quieres convertir.",
  ],
};
