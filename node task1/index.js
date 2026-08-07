const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const surnames = ["White", "Pinkman", "Fring", "Schrader", "Salamanca", "Ehrmantraut", "Goodman"];
function Surname() {
  const index = Math.floor(Math.random() * surnames.length);
  return surnames[index];
}
rl.question("Enter your first name: ", (username) => {
  let firstname = username.split(" ")[0];
  let prefix = firstname.slice(0, 4);

  let surname = Surname();
  let alias = prefix + " " + surname;
  console.log("Your Breaking Bad alias: " + alias);

  rl.close();
});