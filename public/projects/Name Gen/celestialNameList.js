// when done, do ctrl+shift+L for the 0 and replace with 0.

const allConstellations = [
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        hemisphere: 0,
        season: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        hemisphere: 0,
        season: 0,
        meaning: 0,
        symbolism: 0,
    },
]

const allBodies = [ // asteroids, planets, moons
    { engMasc: "Charon", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Pluto", meaning: "of keen gaze(?)", symbolism: "ferryman of the underworld", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Deimos", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Mars", meaning: "terror", symbolism: "son of the Greek god Ares", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Enceladus", engFem: 0, engNeut: 0, fraMasc: "Encelade", fraFem: 0, parent: "Saturn", meaning: "loud noise, loud and clear voice", symbolism: "one of the Gigantes", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Ganymede", engFem: 0, engNeut: 0, fraMasc: "Ganymède", fraFem: 0, parent: "Jupiter", meaning: "meant to please", symbolism: "cupbearer of the god Zeus", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Iapetus", /* "Japetus", */        engFem: 0, engNeut: 0, fraMasc: "Japet", fraFem: 0, parent: "Saturn", meaning: "piercer", symbolism: "one of the Titans", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Mars", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "god of war", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: "Mercury", engFem: 0, engNeut: 0, fraMasc: "Mercure", fraFem: 0, parent: 0, meaning: "merchandise", symbolism: "messenger of the Gods", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: "Mimas", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Saturn", meaning: 0, symbolism: "one of the Gigantes", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Neptune", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "god of the ocean and of earthquakes", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: "Oberon", engFem: 0, engNeut: 0, fraMasc: "Obéron ", fraFem: 0, parent: "Uranus", meaning: 0, symbolism: "king of the fairies", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Phobos", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Mars", meaning: "fear", symbolism: "son of the god Ares", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Saturn", engFem: 0, engNeut: 0, fraMasc: "Saturne", fraFem: 0, parent: 0, meaning: 0, symbolism: "one of the Titans, who reigned prior to and fathered Jupiter (Zeus)", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Titan", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Saturn", meaning: "day, sun(?); to extend, to stretch(?)", symbolism: "the race of beings that ruled prior to the Olympian gods", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Triton", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Neptune", meaning: "three", symbolism: "son of the god Poseidon", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Umbriel", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Uranus", meaning: "shadow", symbolism: "a sprite", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: "Uranus", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: "heaven, sky", symbolism: "primordial being, father of the titans", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: "Hesperus", engFem: "Hespera", /* "Hesper",*/         engNeut: 0, fraMasc: "Hespéros", fraFem: "Hespére", parent: 0, meaning: "western", symbolism: "another name for Venus", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: 0, engFem: "Alauda", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: "lark (bird)", symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: "Aletheia", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: "Aléthée", parent: 0, meaning: 0, symbolism: "goddess of truth", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Amalthea", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Jupiter", meaning: 0, symbolism: "foster mother of Zeus", isAsteroid: false, isPlanet: false, isMoon: true, },
    { engMasc: 0, engFem: "Amphitrite", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "goddess of the sea", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Ariel", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Uranus", meaning: 0, symbolism: "a sylph", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Aurora", engNeut: 0, fraMasc: 0, fraFem: "Aurore", parent: 0, meaning: 0, symbolism: "goddess of the dawn", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Callisto", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Jupiter", meaning: "beauty, nobility", symbolism: "nymph of the goddess Artemis", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Camilla", engNeut: 0, fraMasc: 0, fraFem: "Camille", parent: 0, meaning: 0, symbolism: "a queen", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Ceres", engNeut: 0, fraMasc: 0, fraFem: "Cérès", parent: 0, meaning: 0, symbolism: "goddess of agriculture", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Cybele", /* originally Maximiliana */        engNeut: 0, fraMasc: 0, fraFem: "Cybèle", parent: 0, meaning: 0, symbolism: "goddess of the earth", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Daphne", engNeut: 0, fraMasc: 0, fraFem: "Daphné", parent: 0, meaning: 0, symbolism: "a nymph", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: "David", engFem: "Davida", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "Muggle astronomy professor of the late 19th and early 20th centuries", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Dione", engNeut: 0, fraMasc: 0, fraFem: "Dioné", parent: "Saturn", meaning: 0, symbolism: "among the titans", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Diotima", engNeut: 0, fraMasc: 0, fraFem: "Diotime", parent: 0, meaning: 0, symbolism: "among the teachers of Socrates", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Doris", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "among the nymphs", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Egeria", engNeut: 0, fraMasc: 0, fraFem: "Égérie ", parent: 0, meaning: 0, symbolism: "among the nymphs", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Elara", engNeut: 0, fraMasc: 0, fraFem: "Élara", parent: "Jupiter", meaning: 0, symbolism: "among the consorts of Zeus", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Elektra", engNeut: 0, fraMasc: 0, fraFem: "Électre", parent: 0, meaning: 0, symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Eleonora", /* variant of Eleanor */        engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Eugenia", engNeut: 0, fraMasc: 0, fraFem: "Eugénie", parent: 0, meaning: 0, symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Eunomia", engNeut: 0, fraMasc: 0, fraFem: "Eunomie", parent: 0, meaning: 0, symbolism: "goddess of good governance and springtime", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Euphrosyne", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "goddess of joy and mirth", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Europa", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Jupiter", meaning: "broad eye(?), wide face(?)", symbolism: "Phoenician princess abducted by Zeus", isAsteroid: true, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Fortuna", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "goddess of fate and luck", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Hebe", engNeut: 0, fraMasc: 0, fraFem: "Hébé", parent: 0, meaning: 0, symbolism: "goddess of youth", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: "Hercules", engFem: "Herculina", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "among the demigods", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Hermione", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "daughter of Helen of Troy", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Himalia", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Jupiter", meaning: 0, symbolism: "among the consrts of Zeus", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Hygiea", engNeut: 0, fraMasc: 0, fraFem: "Hygie", parent: 0, meaning: 0, symbolism: "goddess of health and sanitation", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Interamnia", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "Teramo, Italy", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Io", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Jupiter", meaning: 0, symbolism: "among the consorts of Zeus", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Iris", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "attendant to and messenger of the gods", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Juno", engNeut: 0, fraMasc: 0, fraFem: "Junon", parent: 0, meaning: 0, symbolism: "goddess of love and marriage", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Nemesis", engNeut: 0, fraMasc: 0, fraFem: "Némésis", parent: 0, meaning: 0, symbolism: "goddess of retribution", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Pallas", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "epithet of Athena; among the friends of Athena", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Pasiphae", engNeut: 0, fraMasc: 0, fraFem: "Pasiphaé", parent: "Jupiter", meaning: 0, symbolism: "daughter of Helios, queen of Crete, mother of the Minotaur", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Phoebe", engNeut: 0, fraMasc: 0, fraFem: "Phœbé", parent: "Saturn", meaning: 0, symbolism: "among the titans", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Psyche", engNeut: 0, fraMasc: 0, fraFem: "Psyché", parent: 0, meaning: "soul, spirit", symbolism: "consort of Eros", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Rhea", engNeut: 0, fraMasc: 0, fraFem: "Rhéa", parent: "Saturn", meaning: "unclear meaning", symbolism: "among the titans", isAsteroid: true, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Sinope", engNeut: 0, fraMasc: 0, fraFem: "Sinopé", parent: "Jupiter", meaning: 0, symbolism: "daughter of Asopus", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Sylvia", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "mother of Remus and Romulus", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Tethys", engNeut: 0, fraMasc: 0, fraFem: "Téthys", parent: "Saturn", meaning: 0, symbolism: "among the titans", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Themis", engNeut: 0, fraMasc: 0, fraFem: "Thémis", parent: 0, meaning: 0, symbolism: "goddess of divine order and natural law", isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Thisbe", engNeut: 0, fraMasc: 0, fraFem: "Thisbé", parent: 0, meaning: 0, symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Titania", engNeut: 0, fraMasc: 0, fraFem: 0, parent: "Uranus", meaning: 0, symbolism: "queen of the fairies", isAsteroid: false, isPlanet: false, isMoon: true },
    { engMasc: 0, engFem: "Ursula", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: 0, isAsteroid: true, isPlanet: false, isMoon: false },
    { engMasc: 0, engFem: "Venus", engNeut: 0, fraMasc: 0, fraFem: "Vénus", parent: 0, meaning: "loveliness", symbolism: "goddess of love and sexuality", isAsteroid: false, isPlanet: true, isMoon: false },
    { engMasc: 0, engFem: "Vesta", engNeut: 0, fraMasc: 0, fraFem: 0, parent: 0, meaning: 0, symbolism: "goddess of home and hearth", isAsteroid: true, isPlanet: false, isMoon: false },
]

// If there are alternative names, make the names an array and then make sure the name function checks whether there's an array to be unpacked. If array, 75% chance that the default name is used.

const allStars = [
    { engMasc: "Aldebaran", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Taurus", meaning: "the follower", symbolism: 0, },
    { engMasc: "Altair", engFem: 0, engNeut: 0, fraMasc: "Altair", fraFem: 0, constellation: "Aquila", meaning: "the flying eagle", symbolism: 0, },
    { engMasc: "Altarf", /* Also, "Tarf" */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Cancer", meaning: "edge; end", symbolism: 0, },
    { engMasc: "Anser", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Vulpecula", meaning: "the little fox", symbolism: 0, },
    { engMasc: "Antares", engFem: 0, engNeut: 0, fraMasc: "Antarès", fraFem: 0, constellation: "Scorpius", meaning: "opposed to Ares", symbolism: 0, },
    { engMasc: "Arcturus", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Boötes", meaning: "guardian of the bear", symbolism: 0, },
    { engMasc: "Arneb", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Lepus", meaning: "hare", symbolism: 0, },
    { engMasc: "Canopus", /* Also, "Soheil" (m), Soheila (f) */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Carina", meaning: "golden earth(?)", symbolism: "port of Canopus in Egypt(?)", },
    { engMasc: "Deneb Algedi", /* Scheddi */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Capricorn", meaning: "tail of the goat", symbolism: 0, },
    { engMasc: "Deneb", /* Also, Arided, Aridif, Deneb Adige, Denebadigege, Os rosae, Rosemund, Uropygium */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Cygnus", meaning: "tail of the hen; the one sitting behind the rider", symbolism: 0, },
    { engMasc: "Diphda", /* Deneb Kaitos */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Cetus", meaning: "the second frog(?); southern tail of Cetus(?)", symbolism: 0, },
    { engMasc: "Eltanin", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Draco", meaning: "the great serpent", symbolism: 0, },
    { engMasc: "Enif", /* Fom al Feras, Os Equi */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Pegasus", meaning: "nose", symbolism: 0, },
    { engMasc: "Fomalhaut", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Pisces Austrinus", meaning: "mouth of the whale", symbolism: 0, },
    { engMasc: "Gienah", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Corvus", meaning: "the right wing of the crow", symbolism: 0, },
    { engMasc: "Hadar", /* Agena */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Centaurus", meaning: "to be present; settled, civilized area", symbolism: 0, },
    { engMasc: "Hamal", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Aries", meaning: "head of the ram", symbolism: 0, },
    { engMasc: "Kaus Australis", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Sagittarius", meaning: "southern bow", symbolism: 0, },
    { engMasc: "Kitalpha", /* Kitel Phard, Kitalphar */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Equuleus", meaning: "a piece of the horse", symbolism: 0, },
    { engMasc: "Kornephoros", /* Rutilicus */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Hercules", meaning: "club bearer", symbolism: 0, },
    { engMasc: "Mirfak", /* Algenib */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Perseus", meaning: "elbow", symbolism: 0, },
    { engMasc: "Naos", /* Suhail Hadar */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Puppis", meaning: "ship", symbolism: 0, },
    { engMasc: "Peacock", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Pavo", meaning: "peacock", symbolism: 0, },
    { engMasc: "Pollux", /* Betagem */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Gemini", meaning: "crown; fit for royalty", symbolism: "twin brother of Castor, son of Zeus", },
    { engMasc: "Procyon", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Canis Minor", meaning: "before the dog", symbolism: 0, },
    { engMasc: "Rasalhague", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Ophiuchus", meaning: "the head of the serpent collector", symbolism: 0, },
    { engMasc: "Regulus", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Leo", meaning: "prince, little king", symbolism: 0, },
    { engMasc: "Rigil Kentaurus", /* Rigil Kent, Rigil (not Rigel) */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Centaurus", meaning: "foot of the centaur", symbolism: 0, },
    { engMasc: "Rotanev", /* Sualocin */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Delphinus", meaning: "backwards spelling of Venator, surname of Nicolaus Venator, Latinized form of Niccolò Cacciatore", symbolism: 0, },
    { engMasc: "Sadalsuud", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Aquarius", meaning: "luck of lucks", symbolism: 0, },
    { engMasc: "Schedar", /* Dath Elkarti, Schedir, Seder, Shadar, Shedar, Sheder, Shedis, Shedir */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Cassiopeiae", meaning: "breast(?); the lady in the chair(?)", symbolism: 0, },
    { engMasc: "Sirius", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Canis Major", meaning: "glowing; scorcher", symbolism: 0, },
    { engMasc: "Suhail al Muhlif", /* Regor */        engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Vela", meaning: 0, symbolism: 0, },
    { engMasc: "Toliman", engFem: 0, engNeut: 0, fraMasc: 0, fraFem: 0, constellation: "Centaurus", meaning: "Two male ostriches", symbolism: 0, },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
    {
        engMasc: 0,
        engFem: 0,
        engNeut: 0,
        fraMasc: 0,
        fraFem: 0,
        constellation: 0,
        meaning: 0,
        symbolism: 0,
    },
]