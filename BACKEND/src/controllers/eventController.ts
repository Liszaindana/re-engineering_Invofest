import { error } from "console"; 
import { Request, Response } from "express";
import { prisma } from "../lib/db.js";


// 1. menampilkan data berdasarkan id
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    //jika berhasil, select * from events
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        speaker: true,
      }
    });

    // Format data agar selaras dengan frontend
    const formattedEvents = events.map(event => ({
      id: event.id,
      name: event.name,
      date: event.dateEvent.toISOString().split('T')[0],
      location: event.location,
      categoryId: event.categoryId,
      category: event.category.name,
      speakerId: event.speakerId,
      speaker: event.speaker.name,
      description: event.description,
    }));

    //menampilkan ke user
    res.json(formattedEvents);
  } catch (error) {
    //jika error
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};

// 2. menyimpan data berdasarkan id
export const createEvent = async (req: Request, res: Response) => {
  try {
    //jika berhasil
    const { name, categoryId, speakerId, location, dateEvent, description } = req.body;

    //tambahkan validasi
    // Perbaiki format dateEvent jika user mengirim format seperti "2026-05-16 10.00"
    let parsedDate = new Date(dateEvent);
    if (isNaN(parsedDate.getTime())) {
      // Coba ganti titik dengan titik dua jika ada format jam yang salah
      const fixedDateStr = dateEvent.replace('.', ':');
      parsedDate = new Date(fixedDateStr);
      if (isNaN(parsedDate.getTime())) {
         return res.status(400).json({ message: "Format tanggal tidak valid" });
      }
    }

    //simpan data
    const newEvent = await prisma.event.create({
      data: {
        name,
        categoryId: parseInt(categoryId),
        speakerId: parseInt(speakerId),
        location,
        dateEvent: parsedDate,
        description,
      },
    });

    //kasih tau ke user
    res.status(201).json({
      message: "Data event berhasil disimpan",
      data: newEvent,
    });
  } catch (error) {
    //jika ada error
    res.status(500).json({ message: "Gagal membuat event", error });
  }
};

// 3. menampilkan data berdasarkan id
export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) },
      include: {
        category: true,
        speaker: true,
      }
    });

    if (!event) {
      return res.status(404).json({ message: "Event tidak ditemukan" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil event", error });
  }
};

// 4. menghapus data berdasarkan id
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Event berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus event", error });
  }
};

// 5. mengubah data berdasarkan id
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { name, categoryId, speakerId, location, dateEvent, description } = req.body;

    let parsedDate = new Date(dateEvent);
    if (isNaN(parsedDate.getTime())) {
      const fixedDateStr = dateEvent.replace('.', ':');
      parsedDate = new Date(fixedDateStr);
      if (isNaN(parsedDate.getTime())) {
         return res.status(400).json({ message: "Format tanggal tidak valid" });
      }
    }

    const updatedEvent = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        name,
        categoryId: parseInt(categoryId),
        speakerId: parseInt(speakerId),
        location,
        dateEvent: parsedDate,
        description,
      },
    });

    res.json({ message: "Event berhasil diupdate", data: updatedEvent });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengupdate event", error });
  }
};