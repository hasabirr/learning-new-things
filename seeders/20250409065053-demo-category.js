"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "Iphone",
        description: "Iphone adalah smartphone yang diproduksi oleh Apple",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Samsung",
        description: "Samsung adalah smartphone yang diproduksi oleh Samsung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Oppo",
        description: "Oppo adalah smartphone yang diproduksi oleh Oppo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Vivo",
        description: "Vivo adalah smartphone yang diproduksi oleh Vivo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Xiaomi",
        description: "Xiaomi adalah smartphone yang diproduksi oleh Xiaomi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
