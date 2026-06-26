#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs/promises");

const program = new Command();

function isExpired(date) {
  return new Date(date) < new Date();
}

// CREATE
program
  .command("create")
  .argument("<name>")
  .argument("<description>")
  .argument("<date>")
  .argument("<category>")
  .option("--isexpire")
  .action(async (name, description, date, category, options) => {
    let data = JSON.parse(await fs.readFile("products.json", "utf-8"));

    let lastId = data[data.length - 1]?.id || 0;

    let newProduct = {
      id: lastId + 1,
      name,
      description,
      date,
      category,
      isExpire: options.isexpire ? isExpired(date) : false,
    };

    data.push(newProduct);

    await fs.writeFile("products.json", JSON.stringify(data, null, 2));

    console.log("Created");
  });

// SHOW
program.command("show").action(async () => {
  let data = JSON.parse(await fs.readFile("products.json", "utf-8"));
  console.log(data);
});

// GET BY ID
program
  .command("get")
  .argument("<id>")
  .action(async (id) => {
    let data = JSON.parse(await fs.readFile("products.json", "utf-8"));
    console.log(data.find((p) => p.id === Number(id)) || "Not found");
  });

// DELETE
program
  .command("delete")
  .argument("<id>")
  .action(async (id) => {
    let data = JSON.parse(await fs.readFile("products.json", "utf-8"));

    data = data.filter((p) => p.id !== Number(id));

    await fs.writeFile("products.json", JSON.stringify(data, null, 2));

    console.log("Deleted");
  });

// UPDATE
program
  .command("update")
  .argument("<id>")
  .option("--name <name>")
  .option("--description <description>")
  .option("--date <date>")
  .option("--category <category>")
  .action(async (id, options) => {
    let data = JSON.parse(await fs.readFile("products.json", "utf-8"));

    let index = data.findIndex((p) => p.id === Number(id));

    if (index === -1) return console.log("Not found");

    data[index] = {
      ...data[index],
      ...(options.name && { name: options.name }),
      ...(options.description && { description: options.description }),
      ...(options.date && { date: options.date }),
      ...(options.category && { category: options.category }),
      isExpire: isExpired(options.date || data[index].date),
    };

    await fs.writeFile("products.json", JSON.stringify(data, null, 2));

    console.log("Updated");
  });

program.parse();
