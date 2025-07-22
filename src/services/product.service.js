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

}

module.exports = ProductService;
