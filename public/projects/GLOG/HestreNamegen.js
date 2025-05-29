// 1. Arrays of names
const prenomenF = [
  "Odessa", "Meeghra", "Mariota", "Silvara", "Karin", "Ecrohia", "Dariela", "Lynn",
  "Barbosa", "Letitia", "Merry", "Eldra", "Maggy", "Estella", "Ephraella", "Thistlemink",
  "Artina", "Rena", "Gertrude", "Sorcelith", "Ashera", "Pannyth", "Clara", "Tarrelle",
  "Susanna", "Emma", "Olivia", "Fanny", "Amy", "Ashley", "Gregoria", "Katuma",
  "Eugina", "Ophilia", "Margary", "Bunny", "Augusta"
];

const prenomenM = [
  "Odesso", "Matthew", "Lavis", "Claar", "Richard", "Andrew", "Ralph", "Nicholas",
  "Urgrak", "Silvaro", "David", "Dariel", "Shorth", "Alesse", "Barboso", "Letitio",
  "Jarvis", "Walter", "Rannel", "Gabarith", "Merry", "Dolge", "Ephrael", "Ezekiel",
  "Jericus", "Reliant", "Alexander", "Thistlemink", "Giles", "Chadugan", "Kithan",
  "Gagnar", "Asher", "Billian", "Tybalt", "Silver", "Gaius", "Tarrel", "Marta",
  "Uddik", "Sarithar", "Silas", "Cruckan", "Havelock", "Case", "Olivio", "Cain",
  "Underbought", "Gregory", "Titus", "Stephen", "Xaldo", "Timot", "Pestince",
  "Ravelock", "Vratek", "Ophilio", "Maugam", "Hubert", "Bunny", "Yenok", "Victus",
  "Lugg", "Augustus", "Lurrik", "Branfort", "Albian", "Ion", "Tobias", "Sarian",
  "Benjamin", "Gry", "Michael", "Robert", "Jin", "Asmthe", "Jaswin", "Thaddius"
];

const postnomen = [
  "Claypole", "Orlick", "Wormsby", "Tulkinghorn", "Langdale", "Ayresleigh", "Spengly",
  "Creakle", "Carker", "Wringer", "Gargery", "Vickston", "Lorry", "Oddspocket", "Noggs",
  "Kenwigs", "Trundle", "Brunlow", "Wackford", "Crummles", "Harris", "Hawk", "Woolsey",
  "Stiltstalker", "Blurt", "Turveydrop", "Capula", "Barnacle", "Kastobar", "Bombard",
  "Bevian", "Staggers", "Thribbs", "Dombey", "Littimer", "Closely", "Elphenstone",
  "Havisham", "Barnaparnassus", "Pancks", "Gammerage", "Litwickler", "Mordans", "Grude",
  "Swidger", "Smidgel", "Bagnet", "Krertridge", "Doyce", "Noggs", "Rackbourne", "Mayille",
  "Ormer", "Murdstone", "Squeaks", "Pevelham", "Bambler", "Radfoot", "Durdles", "Nupkins",
  "Cromwell", "Pross", "Roller", "Ortell", "Nubbles", "Brandybone", "Voles", "Dartle",
  "Prattler", "Slummley", "Hopcraft", "Smidgely", "Langley", "Bazzard", "Traddles",
  "Jaggers", "Potts", "Manette", "Figg", "Plummer", "Skidlerslew", "Westlock", "Gramsby",
  "Hooper", "Sweedlepipe", "Carton", "Wickfield", "Snowerell", "Neckett", "Harnod",
  "Bimbler", "Swidgely", "Watts", "Shrewcatcher", "Rugg", "Rouncewell", "Wolfe",
  "Tackiton", "Tredd", "Badger"
];

function randomGender() {
  return Math.random() < 0.5 ? "female" : "male";
}

function generateName() {
  const gender = randomGender();
  const firstName = gender === "female"
    ? prenomenF[Math.floor(Math.random() * prenomenF.length)]
    : prenomenM[Math.floor(Math.random() * prenomenM.length)];
  const familyName = postnomen[Math.floor(Math.random() * postnomen.length)];
  return `${firstName} ${familyName}`;
}

console.log(generateName());
