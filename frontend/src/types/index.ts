// Este arquivo serve para compartilhar tipos entre vários componentes
// Assim o TypeScript entende que é a mesma coisa em todo lugar.

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
}

export interface RoutineItem {
  id?: string;        // Opcional pois ao criar ainda não tem ID do banco
  tempId?: number;    // Usado apenas no frontend para controlar a lista
  exerciseId: string;
  sets: number;
  reps: number;
  exercise?: Exercise; // Opcional pois ao salvar só mandamos o ID
}