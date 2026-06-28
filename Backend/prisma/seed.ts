import { prisma } from "../src/config/prisma";

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        name: "Food",
      },
      { name: "Travel" },
      { name: "Shopping" },
      {
        name: "Bills",
      },
      {
        name: "Entertainment",
      },
      {
        name: "Health",
      },
      {
        name: "Education",
      },
      {
        name: "Salary",
      },
      {
        name: "Investment",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
