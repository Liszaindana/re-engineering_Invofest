import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. menampilkan semua data speaker
export const getAllSpeakers = async (req: Request, res: Response) => {
  try {
    //jika berhasil, select * from speakers + relasi event->category
    const speakers = await prisma.speaker.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        events: {
          include: {
            category: true,
          },
        },
      },
    });

    // Format data agar selaras dengan frontend
    // Sertakan daftar kategori unik yang diikuti speaker
    const formattedSpeakers = speakers.map(speaker => {
      // Ambil kategori unik dari event-event speaker
      const categoryMap = new Map<number, string>();
      speaker.events.forEach(event => {
        categoryMap.set(event.category.id, event.category.name);
      });
      const categories = Array.from(categoryMap.entries()).map(([id, name]) => ({ id, name }));

      return {
        id: speaker.id,
        name: speaker.name,
        role: speaker.role,
        imageUrl: speaker.image,
        categories, // daftar kategori yang diikuti speaker
      };
    });

    //menampilkan ke user
    res.json(formattedSpeakers);
  } catch (error) {
    //jika error
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};

// 2. menyimpan data speaker baru
export const createSpeaker = async (req: Request, res: Response) => {
  try {
    //jika berhasil
    const { name, role, image } = req.body;

    //tambahkan validasi

    //simpan data
    const newSpeaker = await prisma.speaker.create({
      data: {
        name,
        role,
        image,
      },
    });

    //kasih tau ke user
    res.status(201).json({
      message: "Data speaker berhasil disimpan",
      data: newSpeaker,
    });
  } catch (error) {
    //jika ada error
    res.status(500).json({ message: "Gagal membuat speaker", error });
  }
};

// 3. menampilkan data berdasarkan id
export const getSpeakerById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const speaker = await prisma.speaker.findUnique({
      where: { id: parseInt(id) },
    });
    if (!speaker) {
      return res.status(404).json({ message: "Speaker tidak ditemukan" });
    }
    // Format to frontend
    res.json({
      id: speaker.id,
      name: speaker.name,
      role: speaker.role,
      imageUrl: speaker.image,
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil speaker", error });
  }
};

// 4. menghapus data berdasarkan id
export const deleteSpeaker = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.speaker.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Speaker berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus speaker", error });
  }
};

// 5. mengubah data berdasarkan id
export const updateSpeaker = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { name, role, image } = req.body;
    const updatedSpeaker = await prisma.speaker.update({
      where: { id: parseInt(id) },
      data: { name, role, image },
    });
    res.json({ message: "Speaker berhasil diupdate", data: updatedSpeaker });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengupdate speaker", error });
  }
};

// 6. update kategori speaker (assign/unassign melalui event)
export const updateSpeakerCategories = async (req: Request, res: Response) => {
  try {
    const speakerId = parseInt(req.params.id as string);
    const { categoryIds } = req.body as { categoryIds: number[] };

    // Ambil kategori yang saat ini terhubung dengan speaker (via events)
    const currentEvents = await prisma.event.findMany({
      where: { speakerId },
      select: { categoryId: true },
    });
    const currentCategoryIds = [...new Set(currentEvents.map(e => e.categoryId))];

    // Kategori baru yang perlu ditambahkan
    const toAdd = categoryIds.filter(cId => !currentCategoryIds.includes(cId));
    // Kategori yang perlu dihapus
    const toRemove = currentCategoryIds.filter(cId => !categoryIds.includes(cId));

    // Buat event default untuk kategori baru (secara paralel)
    if (toAdd.length > 0) {
      const categories = await prisma.category.findMany({
        where: { id: { in: toAdd } },
      });

      const createPromises = categories.map(category =>
        prisma.event.create({
          data: {
            name: `${category.name} - Speaker Assignment`,
            categoryId: category.id,
            speakerId,
            location: "TBD",
            dateEvent: new Date(),
            description: `Speaker ditugaskan ke kategori ${category.name}`,
          },
        })
      );
      await Promise.all(createPromises);
    }

    // Hapus semua event speaker untuk kategori yang di-uncheck (dalam satu query)
    if (toRemove.length > 0) {
      await prisma.event.deleteMany({
        where: {
          speakerId,
          categoryId: { in: toRemove },
        },
      });
    }

    // Ambil data speaker terbaru dengan relasi
    const updatedSpeaker = await prisma.speaker.findUnique({
      where: { id: speakerId },
      include: {
        events: { include: { category: true } },
      },
    });

    const categoryMap = new Map<number, string>();
    updatedSpeaker?.events.forEach(event => {
      categoryMap.set(event.category.id, event.category.name);
    });
    const categories = Array.from(categoryMap.entries()).map(([id, name]) => ({ id, name }));

    res.json({ message: "Kategori speaker berhasil diupdate", categories });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengupdate kategori speaker", error });
  }
};

