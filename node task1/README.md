# Ramvenkatesh_Gowda_Backend-Node_UC_Interview

UC Interview submission — Backend Node.js tasks.

## Task 1: Say My Name
Generates a Breaking Bad-style alias from your name. Takes the first 4 letters of your first name and pairs it with a random surname (White, Pinkman, Fring, Schrader, Salamanca, Ehrmantraut, Goodman). Works even with short names or full names — it just uses the first word.

```
node index.js
```

## Task 2: I Am the One Who Fetches
A small Express API that pulls Breaking Bad data from [TVMaze](https://www.tvmaze.com/). Built with MVC structure — routes handle the endpoints, controllers handle the logic.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/show-details` | Main show info |
| GET | `/episodes` | All episodes |

```
npm install
node index.js
```

Then open:
```
http://localhost:8080/show-details
http://localhost:8080/episodes
```

**Built with:** Node.js, Express, Axios

---
Made by Ram
