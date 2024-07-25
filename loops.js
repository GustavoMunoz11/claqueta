console.log("hola mundo");

let nombres = [
  "Juan",
  "Pedro",
  "Pablo",
  "Maria",
  "Ana",
  "Lucia",
  "Luis",
  "Carlos",
  "Jose",
  "Jorge",
];

let person = {
  name: "John",
  age: 25,
  gender: "male",
  favoriteFruits: ["apple", "banana", "orange"],
};

let people = [
  {
    name: "Alice",
    age: 30,
    gender: "female",
    favoriteFruits: ["strawberry", "blueberry", "pineapple"],
  },
  {
    name: "Bob",
    age: 35,
    gender: "male",
    favoriteFruits: ["grape", "kiwi", "pear"],
  },
  {
    name: "Charlie",
    age: 22,
    gender: "male",
    favoriteFruits: ["cherry", "watermelon", "mango"],
  },
  {
    name: "Diana",
    age: 28,
    gender: "female",
    favoriteFruits: ["pomegranate", "peach", "plum"],
  },
  {
    name: "Ethan",
    age: 31,
    gender: "male",
    favoriteFruits: ["apricot", "fig", "lime"],
  },
  {
    name: "Fiona",
    age: 27,
    gender: "female",
    favoriteFruits: ["raspberry", "blackberry", "kiwi"],
  },
  {
    name: "George",
    age: 29,
    gender: "male",
    favoriteFruits: ["cranberry", "lemon", "grapefruit"],
  },
  {
    name: "Hannah",
    age: 24,
    gender: "female",
    favoriteFruits: ["coconut", "guava", "passion fruit"],
  },
  {
    name: "Ian",
    age: 33,
    gender: "male",
    favoriteFruits: ["persimmon", "tangerine", "melon"],
  },
  {
    name: "Jasmine",
    age: 26,
    gender: "female",
    favoriteFruits: ["lychee", "dragon fruit", "star fruit"],
  },
];

let users = [
  {
    personal_id: "21-699-0278",
    first_name: "Malu",
    last_name: "Capaldo",
    email: "dcapaldo0@usda.gov",
    gender: "Female",
    latitude: -26.4355066,
    longitude: -49.2452364,
    birthdate: "2004-09-05",
    balance: 8213635,
    job_title: "Project Manager",
  },
  {
    personal_id: "78-444-4600",
    first_name: "Chrissy",
    last_name: "Haddleton",
    email: "chaddleton1@yandex.ru",
    gender: "Female",
    latitude: 30.807667,
    longitude: 108.408661,
    birthdate: "1992-10-28",
    balance: 5751647,
    job_title: "Registered Nurse",
  },
  {
    personal_id: "46-259-0069",
    first_name: "Tammara",
    last_name: "Dwelly",
    email: "tdwelly2@ucoz.ru",
    gender: "Female",
    latitude: 29.703113,
    longitude: 107.389298,
    birthdate: "1986-12-12",
    balance: 7938324,
    job_title: "Technical Writer",
  },
  {
    personal_id: "73-767-0730",
    first_name: "Xever",
    last_name: "Haycock",
    email: "xhaycock3@webmd.com",
    gender: "Male",
    latitude: 63.7193825,
    longitude: 23.0160462,
    birthdate: "2002-01-04",
    balance: 6466388,
    job_title: "Senior Developer",
  },
  {
    personal_id: "79-700-7667",
    first_name: "Timoteo",
    last_name: "Sellan",
    email: "tsellan4@godaddy.com",
    gender: "Male",
    latitude: 25.5311276,
    longitude: 69.0397556,
    birthdate: "2007-11-19",
    balance: 3238983,
    job_title: "VP Quality Control",
  },
  {
    personal_id: "17-091-2795",
    first_name: "Teodora",
    last_name: "De Giorgis",
    email: "tdegiorgis5@msu.edu",
    gender: "Female",
    latitude: 3.649442,
    longitude: -76.567956,
    birthdate: "1978-03-06",
    balance: 9633657,
    job_title: "Developer IV",
  },
  {
    personal_id: "57-117-3491",
    first_name: "Marcelia",
    last_name: "BURWIN",
    email: "mburwin6@prlog.org",
    gender: "Female",
    latitude: 40.2187855,
    longitude: -8.0537529,
    birthdate: "1959-12-12",
    balance: 8114135,
    job_title: "Software Test Engineer IV",
  },
  {
    personal_id: "19-557-9389",
    first_name: "Say",
    last_name: "Keirle",
    email: "skeirle7@answers.com",
    gender: "Male",
    latitude: 53.6978211,
    longitude: 91.6963172,
    birthdate: "1999-10-04",
    balance: 3610120,
    job_title: "Administrative Officer",
  },
  {
    personal_id: "83-128-9495",
    first_name: "Stephana",
    last_name: "Le Frank",
    email: "slefrank8@clickbank.net",
    gender: "Female",
    latitude: -7.3498813,
    longitude: 108.0861176,
    birthdate: "1981-08-10",
    balance: 8238811,
    job_title: "Speech Pathologist",
  },
  {
    personal_id: "93-727-7395",
    first_name: "Willdon",
    last_name: "Paliser",
    email: "wpaliser9@unicef.org",
    gender: "Male",
    latitude: 19.4458447,
    longitude: -99.1497664,
    birthdate: "1954-11-05",
    balance: 9074067,
    job_title: "Senior Developer",
  },
  {
    personal_id: "44-020-4510",
    first_name: "Yolane",
    last_name: "Blazynski",
    email: "yblazynskia@example.com",
    gender: "Female",
    latitude: 45.020739,
    longitude: 14.6315962,
    birthdate: "1998-07-29",
    balance: 203787,
    job_title: "Marketing Assistant",
  },
  {
    personal_id: "62-844-5706",
    first_name: "Marinna",
    last_name: "Gowers",
    email: "mgowersb@slate.com",
    gender: "Female",
    latitude: 28.3109983,
    longitude: 55.902453,
    birthdate: "1980-03-24",
    balance: 7019043,
    job_title: "Nurse Practicioner",
  },
];

let container = document.getElementById("render");

let show = users.filter((e) => e.gender == "Female");

for (let i = 0; i < show.length; i++) {
  const person = show[i];

  let card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  let name = document.createElement("h1");
  name.textContent = person.first_name + " " + person.last_name;
  card.appendChild(name);

  let job = document.createElement("p");
  job.textContent = `${person.job_title}: ${person.balance}`;
  card.appendChild(job);

  if (person.gender == "Male") {
    card.classList.add("blue");
  } else {
    card.classList.add("red");
  }
}
