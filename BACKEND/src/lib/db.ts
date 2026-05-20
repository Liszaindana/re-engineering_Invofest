import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Fungsi untuk seeding otomatis jika data kosong
async function seedIfNeeded() {
  try {
    const categoryCount = await prisma.category.count();
    if (categoryCount === 0) {
      console.log("Database kosong, memulai seeding data otomatis...");
      
      const catSeminar = await prisma.category.create({ data: { name: 'Seminar' } });
      const catWorkshop = await prisma.category.create({ data: { name: 'Workshop' } });
      const catTalkshow = await prisma.category.create({ data: { name: 'Talkshow' } });
      const catCompetition = await prisma.category.create({ data: { name: 'Competition' } });

      // Speakers for Seminar
      const spDery = await prisma.speaker.create({
        data: {
          name: 'Dery Agung Triyadi',
          role: 'Aws Indonesia',
          image: 'https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png',
        }
      });
      const spSowam = await prisma.speaker.create({
        data: {
          name: 'Sowam Habibi',
          role: 'Google Indonesia',
          image: 'https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png',
        }
      });

      // Speakers for Workshop
      await prisma.speaker.create({
        data: {
          name: 'Lhuqita Fazry',
          role: 'Mobile Development Developer, Founder Rumah Coding Indonesia',
          image: 'https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png',
        }
      });
      await prisma.speaker.create({
        data: {
          name: 'M. Dendi Purwanto',
          role: 'Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova',
          image: 'https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png',
        }
      });
      await prisma.speaker.create({
        data: {
          name: 'Danang Avan M',
          role: 'Cyber Security Security Analyst, Founder | Contributor TegalSec',
          image: 'https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png',
        }
      });

      // Speakers for Talkshow
      await prisma.speaker.create({
        data: {
          name: 'Moh. Ichsan Maulana',
          role: 'Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera',
          image: 'https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png',
        }
      });
      await prisma.speaker.create({
        data: {
          name: 'M. Zaim Zamzami',
          role: 'Programmer, PT. Pertamina Drilling Service Indonesia',
          image: 'https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png',
        }
      });
      await prisma.speaker.create({
        data: {
          name: 'Daffa Zuhdan Muhtar',
          role: 'Android Developer, PT. Astra Internasional',
          image: 'https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png',
        }
      });
      await prisma.speaker.create({
        data: {
          name: 'Bayu Adi Prasetiyo',
          role: 'Software Engineer, KOMPAS.ID',
          image: 'https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png',
        }
      });

      // Default Speaker / Facilitator
      const spDefault = await prisma.speaker.create({
        data: {
          name: 'Panitia INVOFEST',
          role: 'Fasilitator Lomba',
          image: 'https://www.invofest-harkatnegeri.com/assets/nav-logo.png',
        }
      });

      console.log("Seeded speakers.");

      // Events for Seminar
      await prisma.event.create({
        data: {
          name: 'IT Seminar: Human-AI Integration',
          categoryId: catSeminar.id,
          speakerId: spDery.id,
          location: 'Aula Gedung C, Kampus 1 Universitas Harkat Negeri',
          dateEvent: new Date('2025-11-27T08:00:00.000Z'),
          description: 'Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.',
        }
      });

      // Events for Competitions
      await prisma.event.create({
        data: {
          name: 'Poster Design Competition',
          categoryId: catCompetition.id,
          speakerId: spDefault.id,
          location: 'Online / Seleksi Virtual',
          dateEvent: new Date('2025-11-10T09:00:00.000Z'),
          description: 'Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.',
        }
      });
      await prisma.event.create({
        data: {
          name: 'UI/UX Design Competition',
          categoryId: catCompetition.id,
          speakerId: spDefault.id,
          location: 'Online / Seleksi Virtual',
          dateEvent: new Date('2025-11-12T09:00:00.000Z'),
          description: 'UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.',
        }
      });
      await prisma.event.create({
        data: {
          name: 'Web Design Competition',
          categoryId: catCompetition.id,
          speakerId: spDefault.id,
          location: 'Online / Seleksi Virtual',
          dateEvent: new Date('2025-11-15T09:00:00.000Z'),
          description: 'Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.',
        }
      });

      console.log("Seeding otomatis berhasil!");
    }
  } catch (error) {
    console.error("Gagal melakukan seeding otomatis:", error);
  }
}

seedIfNeeded();
