const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const [apparel, homeGoods, stationery, accessories, skincare, artDecor] = await Promise.all([
    prisma.category.upsert({ where: { name: 'Apparel' }, update: {}, create: { name: 'Apparel' } }),
    prisma.category.upsert({ where: { name: 'Home Goods' }, update: {}, create: { name: 'Home Goods' } }),
    prisma.category.upsert({ where: { name: 'Stationery' }, update: {}, create: { name: 'Stationery' } }),
    prisma.category.upsert({ where: { name: 'Accessories' }, update: {}, create: { name: 'Accessories' } }),
    prisma.category.upsert({ where: { name: 'Skincare' }, update: {}, create: { name: 'Skincare' } }),
    prisma.category.upsert({ where: { name: 'Art & Decor' }, update: {}, create: { name: 'Art & Decor' } }),
  ]);

  await prisma.product.createMany({
    data: [
      // Apparel
      { name: 'Vintage Graphic T-Shirt', description: 'Comfortable and stylish vintage graphic t-shirt.', price: 29.99, stock: 150, size: 'M', color: 'Faded Black', categoryId: apparel.id, imageUrl: 'https://example.com/vintage-t-shirt.jpg', active: true },
      { name: 'Linen Button-Down Shirt', description: 'Breathable linen shirt for a relaxed fit.', price: 49.99, stock: 100, size: 'L', color: 'Off-White', categoryId: apparel.id, imageUrl: 'https://example.com/linen-shirt.jpg', active: true },
      { name: 'High-Waisted Mom Jeans', description: 'Classic high-waisted jeans for a timeless look.', price: 79.99, stock: 80, size: '28', color: 'Light Wash', categoryId: apparel.id, imageUrl: 'https://example.com/mom-jeans.jpg', active: true },
      { name: 'Oversized Knit Sweater', description: 'Cozy and warm oversized sweater.', price: 69.99, stock: 120, size: 'One Size', color: 'Beige', categoryId: apparel.id, imageUrl: 'https://example.com/knit-sweater.jpg', active: true },
      { name: 'Classic Canvas Tote Bag', description: 'Durable canvas tote for everyday use.', price: 24.99, stock: 200, size: 'N/A', color: 'Natural', categoryId: apparel.id, imageUrl: 'https://example.com/tote-bag.jpg', active: true },

      // Home Goods
      { name: 'Ceramic Speckled Mug', description: 'Handcrafted ceramic mug with a unique speckled design.', price: 19.99, stock: 250, size: '12oz', color: 'Cream', categoryId: homeGoods.id, imageUrl: 'https://example.com/speckled-mug.jpg', active: true },
      { name: 'Hand-Poured Soy Candle', description: 'Scented soy candle for a relaxing ambiance.', price: 24.99, stock: 180, size: '8oz', color: 'Amber Jar', categoryId: homeGoods.id, imageUrl: 'https://example.com/soy-candle.jpg', active: true },
      { name: 'Minimalist Wall Clock', description: 'Simple and elegant wall clock.', price: 59.99, stock: 90, size: '12 inch', color: 'Matte Black', categoryId: homeGoods.id, imageUrl: 'https://example.com/wall-clock.jpg', active: true },
      { name: 'Woven Cotton Throw Blanket', description: 'Soft and cozy woven throw blanket.', price: 89.99, stock: 70, size: '50x60 inch', color: 'Gray', categoryId: homeGoods.id, imageUrl: 'https://example.com/throw-blanket.jpg', active: true },
      { name: 'Acacia Wood Serving Bowl', description: 'Beautiful and functional wooden serving bowl.', price: 39.99, stock: 110, size: 'Large', color: 'Natural Wood', categoryId: homeGoods.id, imageUrl: 'https://example.com/serving-bowl.jpg', active: true },

      // Stationery
      { name: 'Set of 5 Minimalist Notebooks', description: 'Sleek and simple notebooks for your thoughts.', price: 22.99, stock: 300, size: 'A5', color: 'Assorted', categoryId: stationery.id, imageUrl: 'https://example.com/notebook-set.jpg', active: true },
      { name: 'Brass Fountain Pen', description: 'Elegant brass fountain pen for a smooth writing experience.', price: 45.99, stock: 150, size: 'N/A', color: 'Gold', categoryId: stationery.id, imageUrl: 'https://example.com/fountain-pen.jpg', active: true },
      { name: 'Set of 12 Abstract Postcards', description: 'Artistic postcards to send to your loved ones.', price: 18.99, stock: 200, size: '4x6 inch', color: 'Multicolor', categoryId: stationery.id, imageUrl: 'https://example.com/postcard-set.jpg', active: true },
      { name: 'Leather-Bound Journal', description: 'High-quality leather journal for your daily entries.', price: 35.99, stock: 130, size: 'A5', color: 'Brown', categoryId: stationery.id, imageUrl: 'https://example.com/leather-journal.jpg', active: true },
      { name: 'Desktop Concrete Planter', description: 'Modern concrete planter for your desk.', price: 28.99, stock: 100, size: 'Small', color: 'Gray', categoryId: stationery.id, imageUrl: 'https://example.com/concrete-planter.jpg', active: true },

      // Accessories
      { name: 'Gold-Plated Hoop Earrings', description: 'Timeless and versatile hoop earrings.', price: 34.99, stock: 180, size: 'Medium', color: 'Gold', categoryId: accessories.id, imageUrl: 'https://example.com/hoop-earrings.jpg', active: true },
      { name: 'Tortoiseshell Sunglasses', description: 'Stylish sunglasses with a classic tortoiseshell pattern.', price: 55.99, stock: 120, size: 'N/A', color: 'Brown', categoryId: accessories.id, imageUrl: 'https://example.com/sunglasses.jpg', active: true },
      { name: 'Silk Scarf with Floral Print', description: 'Luxurious silk scarf with a beautiful floral design.', price: 42.99, stock: 90, size: '35x35 inch', color: 'Pink', categoryId: accessories.id, imageUrl: 'https://example.com/silk-scarf.jpg', active: true },
      { name: 'Leather Crossbody Bag', description: 'Compact and stylish leather bag.', price: 89.99, stock: 70, size: 'Small', color: 'Black', categoryId: accessories.id, imageUrl: 'https://example.com/crossbody-bag.jpg', active: true },
      { name: 'Set of 3 Stacking Rings', description: 'Delicate stacking rings for a layered look.', price: 29.99, stock: 200, size: '7', color: 'Silver', categoryId: accessories.id, imageUrl: 'https://example.com/stacking-rings.jpg', active: true },

      // Skincare
      { name: 'Rosewater Facial Mist', description: 'Refreshing and hydrating facial mist.', price: 18.99, stock: 250, size: '100ml', color: 'N/A', categoryId: skincare.id, imageUrl: 'https://example.com/facial-mist.jpg', active: true },
      { name: 'Vitamin C Serum', description: 'Brightening and anti-aging serum.', price: 32.99, stock: 150, size: '30ml', color: 'N/A', categoryId: skincare.id, imageUrl: 'https://example.com/vitamin-c-serum.jpg', active: true },
      { name: 'Clay Face Mask', description: 'Detoxifying clay mask for a deep cleanse.', price: 26.99, stock: 180, size: '50g', color: 'N/A', categoryId: skincare.id, imageUrl: 'https://example.com/clay-mask.jpg', active: true },
      { name: 'Hydrating Lip Balm', description: 'Nourishing lip balm for soft lips.', price: 8.99, stock: 400, size: '15g', color: 'N/A', categoryId: skincare.id, imageUrl: 'https://example.com/lip-balm.jpg', active: true },
      { name: 'Jasmine & Geranium Body Oil', description: 'Luxurious body oil with a floral scent.', price: 28.99, stock: 120, size: '100ml', color: 'N/A', categoryId: skincare.id, imageUrl: 'https://example.com/body-oil.jpg', active: true },

      // Art & Decor
      { name: 'Abstract Line Art Print', description: 'Modern and minimalist art print.', price: 24.99, stock: 150, size: '12x16 inch', color: 'Black & White', categoryId: artDecor.id, imageUrl: 'https://example.com/line-art-print.jpg', active: true },
      { name: 'Set of 3 Ceramic Vases', description: 'Elegant ceramic vases for your flowers.', price: 49.99, stock: 100, size: 'Assorted', color: 'Neutral', categoryId: artDecor.id, imageUrl: 'https://example.com/ceramic-vases.jpg', active: true },
      { name: 'Macrame Wall Hanging', description: 'Bohemian-style macrame wall decor.', price: 39.99, stock: 80, size: 'Medium', color: 'Ivory', categoryId: artDecor.id, imageUrl: 'https://example.com/macrame.jpg', active: true },
      { name: 'Framed Botanical Poster', description: 'Vintage-inspired botanical poster.', price: 32.99, stock: 120, size: '16x20 inch', color: 'Green', categoryId: artDecor.id, imageUrl: 'https://example.com/botanical-poster.jpg', active: true },
      { name: 'Geometric Metal Wall Sculpture', description: 'Modern metal wall art.', price: 79.99, stock: 60, size: 'Large', color: 'Gold', categoryId: artDecor.id, imageUrl: 'https://example.com/metal-sculpture.jpg', active: true },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
