const express = require("express");
const app = express();
const PORT = 3030;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const aniamls = [
  {
    id: 1,
    species: "Cow",
    age: 2,
    color: "white",
  },
  {
    id: 2,
    species: "dog",
    age: 4,
    color: "black",
  },
  {
    id: 3,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 4,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 5,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 6,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 7,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 8,
    species: "wolf",
    age: 6,
    color: "grey",
  },
  {
    id: 9,
    species: "wolf",
    age: 6,
    color: "grey",
  },
];

app.get("/", (req, res) => {
  res.json("this is / request");
});

// app.get("/users",(req,res) => {
//     res.json("this is /users Request")
// })

// app.get("/posts",(req,res) => {
//     res.json("this is /posts request")
// })

app.get("/api", (req, res) => {
  console.log(req.query);
  let { page = 1, take = 3 } = req.query;
  take > 3 ? (take = 3) : take;
  res.json(aniamls.slice((page - 1) * take, page * take));
});

app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const findAnimal = aniamls.find((el) => el.id === Number(id));
  if (!findAnimal) {
    return res
      .status(400)
      .json({ message: "not found (Id is invalid)", data: null });
  }
  res.json({ message: "finded successfully", data: findAnimal });
});

app.post("/api", (req, res) => {
  const { age, color, species } = req.body;
  //    console.log(age,"age")
  //    console.log(color,"color")
  //    console.log(species,"species")
  if (!color) {
    return res.status(400).json({ message: "color is required field" });
  }
  const lastID = aniamls[aniamls.length - 1]?.id || 0;
  let newObj = {
    id: lastID + 1,
    age,
    color,
    species,
  };
  aniamls.push(newObj);
  res.json({ message: "added successfully", data: aniamls });
});

app.delete("/api/:id", (req, res) => {
  const { id } = req.params;
  const index = aniamls.findIndex((el) => el.id === Number(id));
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid" });
  }
  const deletedAnimal = aniamls.splice(index, 1);
  res.json({ message: "deleted successfully", data: deletedAnimal });
});

app.put("/api/:id", (req, res) => {
  const { id } = req.params;
  const { age, color, species } = req.body;
  const index = aniamls.findIndex((el) => el.id === Number(id));
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid" });
  }
  aniamls[index] = {
    ...aniamls[index],
    species: species || aniamls[index].species,
    age: age || aniamls[index].age,
    color: color || aniamls[index].color,
  };

  res.json({ message: "updated successfully", data: aniamls[index] });
});

app.get("/secret", (req, res) => {
  const secretKey = req.headers.secretkey;
  if (!secretKey || secretKey !== "12345") {
    return res
      .status(400)
      .json({
        message: "unAuth",
        data: "am informacias ver gagatan samwuxarod",
      });
  }
  res.json("100000000$");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost${PORT}`);
});
