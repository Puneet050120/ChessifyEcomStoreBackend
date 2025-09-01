const prisma = require('../models/prismaClient');

class ProductService {
    
  static async getAllProducts() {
    return await prisma.product.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async createProduct(products) {
    console.log(`Reached inside createProduct ===> ${JSON.stringify(products)}`);
    const timestamp = new Date();

    // Normalize fields
    const normalizedProducts = products.map((product) => ({
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock || 0),
        active: true,
        createdAt: timestamp,
        updatedAt: timestamp,
        updatedBy: product.updatedBy || 'admin',
    }));

    if (normalizedProducts.length == 1) {
        return await prisma.product.create({
        data: normalizedProducts[0],
        });
    } else {
        const result = await prisma.product.createMany({
        data: normalizedProducts,
        skipDuplicates: true,
        });
        return result;
    }
  }
  
  static async updateProduct(id, data) {
    const updatedData = {
      ...data,
      price: data.price ? parseFloat(data.price) : undefined,
      stock: data.stock ? parseInt(data.stock) : undefined,
      updatedAt: new Date(),
      updatedBy: data.updatedBy || 'admin',
    };

    return await prisma.product.update({
      where: { id },
      data: updatedData,
    });
  }

  static async deleteProduct(id, updatedBy = 'admin') {
    return await prisma.product.update({
      where: { id },
      data: {
        active: false,
        updatedAt: new Date(),
        updatedBy,
      },
    });
  }

  static async bulkUpload(products) {
    const timestamp = new Date();

    const normalized = products
      .map((product) => {
        const { name, price, stock, size } = product;
        if (!name || !price || !stock || !size) return null;

        return {
          name: name.trim(),
          description: product.description?.trim() || null,
          price: parseFloat(price),
          stock: parseInt(stock),
          size: size.toUpperCase(),
          color: product.color?.trim() || null,
          category: product.category?.trim() || null,
          imageUrl: product.imageUrl?.trim() || null,
          active: true,
          createdAt: timestamp,
          updatedAt: timestamp,
          updatedBy: product.updatedBy || 'admin',
        };
      })
      .filter(Boolean); 

    if (!normalized.length) {
      throw new Error('No valid products to insert');
    }

    const result = await prisma.product.createMany({
      data: normalized,
      skipDuplicates: true,
    });

    return { insertedCount: result.count };
  }

}

module.exports = ProductService;
