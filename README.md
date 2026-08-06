# Ramvenkatesh_Gowda_Backend-Node_UC_Interview
UC Interview
# Backend Node.js Tasks

## Task 1: Say My Name
A CLI script that generates a Breaking Bad-style alias from your first name.

**How it works:** Takes your first name, extracts the first 4 characters, and combines it with a random surname from a fixed list (White, Pinkman, Fring, Schrader, Salamanca, Ehrmantraut, Goodman).

**Run it:**
```
node index.js
```
Enter your name when prompted.

**Handles:** short names, full names (uses first word only), different alias each run.

---

## Task 2: I Am the One Who Fetches
An Express API that serves Breaking Bad show data from the [TVMaze API](https://www.tvmaze.com/).

**Structure:** MVC — `routes/` for endpoints, `controllers/` for logic.

**Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/show-details` | Main show info |
| GET | `/episodes` | All episodes |

**Run it:**
```
npm install
node index.js
```
Then visit:
```
http://localhost:3000/show-details
http://localhost:3000/episodes
```

**Tech:** Node.js, Express, Axios

---

## Author
[Your Name]
