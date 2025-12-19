// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed completo...');

  const exercises = [
    // --- PEITO ---
    { name: 'Supino Reto (Barra)', muscleGroup: 'Peito' },
    { name: 'Supino Reto (Halteres)', muscleGroup: 'Peito' },
    { name: 'Supino Inclinado (Barra)', muscleGroup: 'Peito' },
    { name: 'Supino Inclinado (Halteres)', muscleGroup: 'Peito' },
    { name: 'Supino Declinado', muscleGroup: 'Peito' },
    { name: 'Supino Máquina', muscleGroup: 'Peito' },
    { name: 'Crucifixo (Halteres)', muscleGroup: 'Peito' },
    { name: 'Crucifixo (Máquina/Voador)', muscleGroup: 'Peito' },
    { name: 'Crossover (Polia Alta)', muscleGroup: 'Peito' },
    { name: 'Crossover (Polia Baixa)', muscleGroup: 'Peito' },
    { name: 'Flexão de Braço', muscleGroup: 'Peito' },
    { name: 'Paralelas (Foco Peito)', muscleGroup: 'Peito' },
    { name: 'Pullover', muscleGroup: 'Peito' },

    // --- COSTAS ---
    { name: 'Puxada Frontal (Aberta)', muscleGroup: 'Costas' },
    { name: 'Puxada Frontal (Triângulo)', muscleGroup: 'Costas' },
    { name: 'Puxada Supinada', muscleGroup: 'Costas' },
    { name: 'Barra Fixa (Pronada)', muscleGroup: 'Costas' },
    { name: 'Barra Fixa (Supinada)', muscleGroup: 'Costas' },
    { name: 'Remada Curvada (Barra)', muscleGroup: 'Costas' },
    { name: 'Remada Curvada (Supinada)', muscleGroup: 'Costas' },
    { name: 'Remada Unilateral (Serrote)', muscleGroup: 'Costas' },
    { name: 'Remada Baixa (Triângulo)', muscleGroup: 'Costas' },
    { name: 'Remada Máquina', muscleGroup: 'Costas' },
    { name: 'Remada Cavalinho', muscleGroup: 'Costas' },
    { name: 'Levantamento Terra', muscleGroup: 'Costas' },
    { name: 'Pulldown (Polia)', muscleGroup: 'Costas' },
    { name: 'Extensão Lombar (Banco)', muscleGroup: 'Costas' },

    // --- PERNAS (Quadríceps/Posterior/Glúteo) ---
    { name: 'Agachamento Livre', muscleGroup: 'Pernas' },
    { name: 'Agachamento Smith', muscleGroup: 'Pernas' },
    { name: 'Agachamento Frontal', muscleGroup: 'Pernas' },
    { name: 'Agachamento Sumô', muscleGroup: 'Pernas' },
    { name: 'Agachamento Búlgaro', muscleGroup: 'Pernas' },
    { name: 'Leg Press 45', muscleGroup: 'Pernas' },
    { name: 'Leg Press Horizontal', muscleGroup: 'Pernas' },
    { name: 'Hack Machine', muscleGroup: 'Pernas' },
    { name: 'Afundo (Passada)', muscleGroup: 'Pernas' },
    { name: 'Cadeira Extensora', muscleGroup: 'Pernas' },
    { name: 'Mesa Flexora', muscleGroup: 'Pernas' },
    { name: 'Cadeira Flexora', muscleGroup: 'Pernas' },
    { name: 'Flexora em Pé', muscleGroup: 'Pernas' },
    { name: 'Stiff', muscleGroup: 'Pernas' },
    { name: 'Levantamento Terra Romeno', muscleGroup: 'Pernas' },
    { name: 'Elevação Pélvica (Barra)', muscleGroup: 'Pernas' },
    { name: 'Elevação Pélvica (Máquina)', muscleGroup: 'Pernas' },
    { name: 'Cadeira Abdutora', muscleGroup: 'Pernas' },
    { name: 'Cadeira Adutora', muscleGroup: 'Pernas' },
    { name: 'Panturrilha Sentado', muscleGroup: 'Pernas' },
    { name: 'Panturrilha em Pé', muscleGroup: 'Pernas' },
    { name: 'Panturrilha no Leg Press', muscleGroup: 'Pernas' },

    // --- OMBROS ---
    { name: 'Desenvolvimento (Barra)', muscleGroup: 'Ombros' },
    { name: 'Desenvolvimento (Halteres)', muscleGroup: 'Ombros' },
    { name: 'Desenvolvimento (Máquina)', muscleGroup: 'Ombros' },
    { name: 'Desenvolvimento Arnold', muscleGroup: 'Ombros' },
    { name: 'Elevação Lateral (Halteres)', muscleGroup: 'Ombros' },
    { name: 'Elevação Lateral (Polia)', muscleGroup: 'Ombros' },
    { name: 'Elevação Frontal (Halteres)', muscleGroup: 'Ombros' },
    { name: 'Elevação Frontal (Barra)', muscleGroup: 'Ombros' },
    { name: 'Crucifixo Inverso (Halteres)', muscleGroup: 'Ombros' },
    { name: 'Crucifixo Inverso (Máquina)', muscleGroup: 'Ombros' },
    { name: 'Facepull', muscleGroup: 'Ombros' },
    { name: 'Remada Alta', muscleGroup: 'Ombros' },
    { name: 'Encolhimento (Halteres)', muscleGroup: 'Ombros' },
    { name: 'Encolhimento (Barra)', muscleGroup: 'Ombros' },

    // --- BÍCEPS ---
    { name: 'Rosca Direta (Barra)', muscleGroup: 'Bíceps' },
    { name: 'Rosca Direta (Halteres)', muscleGroup: 'Bíceps' },
    { name: 'Rosca Direta (Polia)', muscleGroup: 'Bíceps' },
    { name: 'Rosca Alternada', muscleGroup: 'Bíceps' },
    { name: 'Rosca Martelo', muscleGroup: 'Bíceps' },
    { name: 'Rosca Scott (Máquina)', muscleGroup: 'Bíceps' },
    { name: 'Rosca Scott (Barra W)', muscleGroup: 'Bíceps' },
    { name: 'Rosca Concentrada', muscleGroup: 'Bíceps' },
    { name: 'Rosca Inclinada 45º', muscleGroup: 'Bíceps' },

    // --- TRÍCEPS ---
    { name: 'Tríceps Pulley (Barra)', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Pulley (Corda)', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Testa (Barra)', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Testa (Halteres)', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Francês', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Coice', muscleGroup: 'Tríceps' },
    { name: 'Tríceps Banco', muscleGroup: 'Tríceps' },
    { name: 'Paralelas (Foco Tríceps)', muscleGroup: 'Tríceps' },

    // --- ABDOMEN ---
    { name: 'Abdominal Supra (Chão)', muscleGroup: 'Abdomen' },
    { name: 'Abdominal Máquina', muscleGroup: 'Abdomen' },
    { name: 'Abdominal Infra (Elevação de Pernas)', muscleGroup: 'Abdomen' },
    { name: 'Prancha', muscleGroup: 'Abdomen' },
    { name: 'Abdominal Remador', muscleGroup: 'Abdomen' },
    { name: 'Russian Twist', muscleGroup: 'Abdomen' },

    // --- CARDIO ---
    { name: 'Esteira', muscleGroup: 'Cardio' },
    { name: 'Bicicleta Ergométrica', muscleGroup: 'Cardio' },
    { name: 'Elíptico/Transport', muscleGroup: 'Cardio' },
    { name: 'Escada', muscleGroup: 'Cardio' },
    { name: 'Corrida', muscleGroup: 'Cardio' },
    { name: 'Caminhada', muscleGroup: 'Cardio' },
    { name: 'Natação', muscleGroup: 'Cardio' },
  ];

  for (const ex of exercises) {
    // Verifica se já existe pelo nome para não duplicar
    const existing = await prisma.exercise.findFirst({ where: { name: ex.name } });
    if (!existing) {
      await prisma.exercise.create({ data: ex });
    }
  }

  console.log(`✅ Seed finalizada! Total de exercícios na lista: ${exercises.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });