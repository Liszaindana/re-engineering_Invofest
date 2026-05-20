import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. menampilkan semua data category
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    //jika berhasil, select * from categories
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    //menampilkan ke user
    res.json(categories);
  } catch (error) {
    //jika error
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};

// 2. menyimpan data category baru
export const createCategory = async (req: Request, res: Response) => {
  try {
    //jika berhasil
    const { name } = req.body;

    //tambahkan validasi

    //simpan data
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    //kasih tau ke user
    res.status(201).json({
      message: "Data category berhasil disimpan",
      data: newCategory,
    });
  } catch (error) {
    //jika ada error
    res.status(500).json({ message: "Gagal membuat category", error });
  }
};

// 3. menampilkan data berdasarkan id
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });
    if (!category) {
      return res.status(404).json({ message: "Category tidak ditemukan" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil category", error });
  }
};

// 4. menghapus data berdasarkan id
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Category berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus category", error });
  }
};

// 5. mengubah data berdasarkan id
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { name } = req.body;
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json({ message: "Category berhasil diupdate", data: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengupdate category", error });
  }
};
