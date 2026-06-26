// 4) შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts". აუცილებელია გაუკეთო
// ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა

const http = require("http");
const url = require("url");

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Nika" },
  { id: 3, name: "Nino" },
];

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const { pathname, query } = parsed;

  res.setHeader("Content-Type", "application/json");

  // "/"
  if (pathname === "/") {
    return res.end(JSON.stringify({ message: "Server's running" }));
  }

  // USERS
  else if (pathname === "/users") {
    let result = [...users];

    // id search
    if (query.id) {
      result = result.filter((el) => el.id === Number(query.id));
    }

    // name search
    if (query.name) {
      result = result.filter(
        (el) => el.name.toLowerCase() === query.name.toLowerCase(),
      );
    }

    // pagination
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 2;

    const start = (page - 1) * limit;
    const end = start + limit;

    return res.end(JSON.stringify(result.slice(start, end)));
  }

  // POSTS
  else if (pathname === "/posts") {
    let result = [...posts];

    // id search
    if (query.id) {
      result = result.filter((post) => post.id === Number(query.id));
    }

    // pagination
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 2;

    const start = (page - 1) * limit;
    const end = start + limit;

    return res.end(JSON.stringify(result.slice(start, end)));
  }

  // NOT FOUND
  else {
    res.statusCode = 404;
    return res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
