import { prisma } from "../src/config/prisma";

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        name: "Food",
        type: "EXPENSE",
      },
      { name: "Travel", type: "EXPENSE" },
      { name: "Shopping", type: "EXPENSE" },
      {
        name: "Bills",
        type: "EXPENSE",
      },
      {
        name: "Entertainment",
        type: "EXPENSE",
      },
      {
        name: "Health",
        type: "EXPENSE",
      },
      {
        name: "Education",
        type: "EXPENSE",
      },
      {
        name: "Salary",
        type: "INCOME",
      },
      {
        name: "Investment",
        type: "EXPENSE",
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
