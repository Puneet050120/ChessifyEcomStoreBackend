const prisma = require('../models/prismaClient');

class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const categories = await prisma.category.findMany();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createCategory(req, res) {
        try {
            const category = await prisma.category.create({
                data: req.body,
            });
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateCategory(req, res) {
        try {
            const category = await prisma.category.update({
                where: { id: parseInt(req.params.id) },
                data: req.body,
            });
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCategory(req, res) {
        try {
            await prisma.category.delete({
                where: { id: parseInt(req.params.id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CategoryController;
