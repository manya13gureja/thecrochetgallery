// roomNameGenerator.ts
declare global {
    interface Window {
      generateRoomName: () => string;
      generateUniqueRoomNames: (count: number) => string[];
      randomName: () => string;
    }
  }
// Adjectives for room descriptions
const adjectives = [
   "Ominous", "Cursed", "Forsaken", "Hollow", "Whispering", "Damp", "Echoing", "Vanishing", "Murky", "Haunted", "Phantom", "Eldritch", "Wretched", "Twisted", "Spectral", "Shrouded", "Tormented"
  ];
  
  // Nouns for room types
  const roomTypes = [
    "Nook", "Nest", "Den", "Burrow", "Tea Room", "Hearth", "Cozy Corner", "Pillow Fort", "Marshmallow Pit", "Bubble Bath", "Sofa Kingdom", "Beanbag Throne"
  ];
  
  // Themes specific to crochet
  const themes = [
    "404 Not Found", "Corrupted Data", "Lost Signal", "Broken Code", "Recursive Nightmare", "Data Anomaly", "Pixelated Ruins", "Memory Leak", "Infinite Loop", "Desynchronized", "Glitched Out"
  ];
  const firstNames = [
   "Alotta", "Barb Dwyer", "Bob", "Boaty", "Brock Lee", "Chad", "Chip", "Craven", "Dill", "Duncan",  
  "Ella Vator", "Elvis", "Fanny", "Gail Force", "Gassy", "Gert", "Hugh Jass", "Ima", "Ivana", "Joe",  
  "Justin Time", "Lana", "Lois", "Moe", "Norm", "Otto", "Pat Myback", "Penny", "Phil McCracken",  
  "Randy", "Rick O’Shea", "Sal Monella", "Sue", "Stan Dupp", "Terry Bull", "Ursula", "Wade", "Wanda"
  ];
  const lastNames = [
    "Almighty", "Baggins", "Bologna", "Bonkers", "Bottomtooth", "Burrito", "Buttowski", "Chicken",  
  "Cumberbatch", "Doodle", "Flapjack", "Flintstone", "Goose", "Hamm", "Hogwash", "Lettuce",  
  "Lobster", "MacNugget", "McBurger", "McCheese", "McFart", "McMuffin", "Mittens", "Muffintop",  
  "Noodle", "O'Plenty", "Pancakes", "Pickle", "Poppins", "Quack", "Sassypants", "Shenanigans",  
  "Sniffles", "Spaghetti", "Spoons", "Tater", "Tickles", "Toots", "Underpants", "Waffles", "Zamboni"
  ];
  
function generateRoomName(): string {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    
    // 50% chance to include a theme
    const includeTheme = Math.random() > 0.5;
    
    return includeTheme ? `The ${adjective} ${roomType} ${theme} Room` : `The ${adjective} ${roomType} Room`;
  };
  
  // Generate a set of unique room names
  function generateUniqueRoomNames(count: number): string[] {
    const names = new Set<string>();
    
    while (names.size < count) {
      names.add(generateRoomName());
    }
    
    return Array.from(names);
  };
  function randomName():string{
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return ` Hello ${firstName} ${lastName}`;
  }
  window.generateRoomName = generateRoomName;
  window.generateUniqueRoomNames = generateUniqueRoomNames;

  export { generateRoomName, generateUniqueRoomNames, randomName };