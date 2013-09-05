(function() {
  var App,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  App = {};

  App.Aliens = (function() {
    function Aliens() {}

    Aliens.games = {
      0: [
        {
          "name": "Amoeba",
          "description": "Unlimited ship movement",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20091028001214/cosmicencounter/images/thumb/1/1f/Amoeba_%28FFG%29.jpg/150px-Amoeba_%28FFG%29.jpg"
        }, {
          "name": "Anti-Matter",
          "description": "Lower total wins",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091028001215/cosmicencounter/images/thumb/f/fb/Anti-Matter_%28FFG%29.jpg/150px-Anti-Matter_%28FFG%29.jpg"
        }, {
          "name": "Barbarian",
          "description": "Destroys opponent's hand",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091028001215/cosmicencounter/images/thumb/e/e7/Barbarian_%28FFG%29.jpg/150px-Barbarian_%28FFG%29.jpg"
        }, {
          "name": "Calculator",
          "description": "Reduces higher attack card",
          "complexity": "yellow",
          "image_url": "http://images4.wikia.nocookie.net/__cb20091028001215/cosmicencounter/images/thumb/c/cf/Calculator_%28FFG%29.jpg/150px-Calculator_%28FFG%29.jpg"
        }, {
          "name": "Chosen",
          "description": "Takes new encounter card",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091028001216/cosmicencounter/images/thumb/b/b5/Chosen_%28FFG%29.jpg/150px-Chosen_%28FFG%29.jpg"
        }, {
          "name": "Citadel",
          "description": "Builds citadels on planets",
          "complexity": "red",
          "image_url": "http://images4.wikia.nocookie.net/__cb20091028001216/cosmicencounter/images/thumb/b/bd/Citadel_%28FFG%29.jpg/150px-Citadel_%28FFG%29.jpg"
        }, {
          "name": "Clone",
          "description": "Keeps own encounter card",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091028001217/cosmicencounter/images/thumb/b/b9/Clone_%28FFG%29.jpg/150px-Clone_%28FFG%29.jpg"
        }, {
          "name": "Cudgel",
          "description": "Opponent loses more ships",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091211154222/cosmicencounter/images/thumb/8/87/Cudgel_%28FFG%29.jpg/150px-Cudgel_%28FFG%29.jpg"
        }, {
          "name": "Dictator",
          "description": "Controls destiny deck",
          "complexity": "red",
          "image_url": "http://images3.wikia.nocookie.net/__cb20091211154452/cosmicencounter/images/thumb/b/bb/Dictator_%28FFG%29.jpg/150px-Dictator_%28FFG%29.jpg"
        }, {
          "name": "Fido",
          "description": "Retrives discarded cards",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091211161708/cosmicencounter/images/thumb/a/ab/Fido_%28FFG%29.jpg/150px-Fido_%28FFG%29.jpg"
        }, {
          "name": "Filch",
          "description": "Takes opponent's used card",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20091211162623/cosmicencounter/images/thumb/2/27/Filch_%28FFG%29.jpg/150px-Filch_%28FFG%29.jpg"
        }, {
          "name": "Fodder",
          "description": "Plays additional low cards",
          "complexity": "yellow",
          "image_url": "http://images4.wikia.nocookie.net/__cb20091211163435/cosmicencounter/images/thumb/9/9c/Fodder_%28FFG%29.jpg/150px-Fodder_%28FFG%29.jpg"
        }, {
          "name": "Gambler",
          "description": "Bluffs about card",
          "complexity": "red",
          "image_url": "http://images4.wikia.nocookie.net/__cb20091211164336/cosmicencounter/images/thumb/d/d4/Gambler_%28FFG%29.jpg/150px-Gambler_%28FFG%29.jpg"
        }, {
          "name": "Grudge",
          "description": "Penalizes for refusing to ally",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100129215014/cosmicencounter/images/thumb/1/18/Grudge_%28FFG%29.jpg/150px-Grudge_%28FFG%29.jpg"
        }, {
          "name": "Hacker",
          "description": "Chooses compensation",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100129215613/cosmicencounter/images/thumb/1/13/Hacker_%28FFG%29.jpg/150px-Hacker_%28FFG%29.jpg"
        }, {
          "name": "Hate",
          "description": "Opponents lose cards or ships",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100129220612/cosmicencounter/images/thumb/9/99/Hate_%28FFG%29.jpg/150px-Hate_%28FFG%29.jpg"
        }, {
          "name": "Healer",
          "description": "Can save others' ships from warp",
          "complexity": "yellow",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100129221640/cosmicencounter/images/thumb/1/13/Healer_%28FFG%29.jpg/150px-Healer_%28FFG%29.jpg"
        }, {
          "name": "Human",
          "description": "Mostly harmless",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100130192931/cosmicencounter/images/thumb/0/04/Human_%28FFG%29.jpg/150px-Human_%28FFG%29.jpg"
        }, {
          "name": "Kamikaze",
          "description": "Sacrifices ships for cards",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100130193755/cosmicencounter/images/thumb/c/c2/Kamikaze_%28FFG%29.jpg/150px-Kamikaze_%28FFG%29.jpg"
        }, {
          "name": "Loser",
          "description": "Winner loses and loser wins",
          "complexity": "green",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100130194625/cosmicencounter/images/thumb/d/de/Loser_%28FFG%29.jpg/150px-Loser_%28FFG%29.jpg"
        }, {
          "name": "Machine",
          "description": "Can continue turn",
          "complexity": "red",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100130200223/cosmicencounter/images/thumb/3/36/Machine_%28FFG%29.jpg/150px-Machine_%28FFG%29.jpg"
        }, {
          "name": "Macron",
          "description": "Each ship is worth 4",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100130200806/cosmicencounter/images/thumb/0/00/Macron_%28FFG%29.jpg/150px-Macron_%28FFG%29.jpg"
        }, {
          "name": "Masochist",
          "description": "Tries to lose own ships",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100130201722/cosmicencounter/images/thumb/b/b6/Masochist_%28FFG%29.jpg/150px-Masochist_%28FFG%29.jpg"
        }, {
          "name": "Mind",
          "description": "Sees other players' hands",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100131195215/cosmicencounter/images/thumb/5/50/Mind_%28FFG%29.jpg/150px-Mind_%28FFG%29.jpg"
        }, {
          "name": "Mirror",
          "description": "Swaps digits on attack cards",
          "complexity": "yellow",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100131200029/cosmicencounter/images/thumb/a/a2/Mirror_%28FFG%29.jpg/150px-Mirror_%28FFG%29.jpg"
        }, {
          "name": "Miser",
          "description": "Gets second hand",
          "complexity": "green",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100131201146/cosmicencounter/images/thumb/e/e1/Miser_%28FFG%29.jpg/150px-Miser_%28FFG%29.jpg"
        }, {
          "name": "Mite",
          "description": "Demands colony or loss of cards",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100131201920/cosmicencounter/images/thumb/1/1f/Mite_%28FFG%29.jpg/150px-Mite_%28FFG%29.jpg"
        }, {
          "name": "Mutant",
          "description": "Maintains 8-card hand",
          "complexity": "green",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100131202160/cosmicencounter/images/thumb/5/53/Mutant_%28FFG%29.jpg/150px-Mutant_%28FFG%29.jpg"
        }, {
          "name": "Observer",
          "description": "Allies do not go to warp",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100131203027/cosmicencounter/images/thumb/a/a4/Observer_%28FFG%29.jpg/150px-Observer_%28FFG%29.jpg"
        }, {
          "name": "Oracle",
          "description": "Forsees opponent's card",
          "complexity": "green",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100216150603/cosmicencounter/images/thumb/6/63/Oracle_%28FFG%29.jpg/150px-Oracle_%28FFG%29.jpg"
        }, {
          "name": "Pacifist",
          "description": "Wins with negotiate card",
          "complexity": "green",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100216151357/cosmicencounter/images/thumb/b/ba/Pacifist_%28FFG%29.jpg/150px-Pacifist_%28FFG%29.jpg"
        }, {
          "name": "Parasite",
          "description": "Joins alliance at will",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100216151955/cosmicencounter/images/thumb/6/6f/Parasite_%28FFG%29.jpg/150px-Parasite_%28FFG%29.jpg"
        }, {
          "name": "Philanthropist",
          "description": "Gives away cards",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100216153031/cosmicencounter/images/thumb/1/13/Philanthropist_%28FFG%29.jpg/150px-Philanthropist_%28FFG%29.jpg"
        }, {
          "name": "Reincarnator",
          "description": "Uses powers not in game",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100216154106/cosmicencounter/images/thumb/b/b7/Reincarnator_%28FFG%29.jpg/150px-Reincarnator_%28FFG%29.jpg"
        }, {
          "name": "Remora",
          "description": "Gets cards or ships with others",
          "complexity": "yellow",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100216155548/cosmicencounter/images/thumb/7/7a/Remora_%28FFG%29.jpg/150px-Remora_%28FFG%29.jpg"
        }, {
          "name": "Reserve",
          "description": "Can use attacks as reinforcements",
          "complexity": "green",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100216160144/cosmicencounter/images/thumb/2/22/Reserve_%28FFG%29.jpg/150px-Reserve_%28FFG%29.jpg"
        }, {
          "name": "Shadow",
          "description": "Removes others' ships",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100224010615/cosmicencounter/images/thumb/3/31/Shadow_%28FFG%29.jpg/150px-Shadow_%28FFG%29.jpg"
        }, {
          "name": "Sorcerer",
          "description": "Can switch played cards",
          "complexity": "green",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100224011356/cosmicencounter/images/thumb/9/9e/Sorcerer_%28FFG%29.jpg/150px-Sorcerer_%28FFG%29.jpg"
        }, {
          "name": "Spiff",
          "description": "Receives colony as loser",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224011720/cosmicencounter/images/thumb/d/d3/Spiff_%28FFG%29.jpg/150px-Spiff_%28FFG%29.jpg"
        }, {
          "name": "Tick-Tock",
          "description": "Limits length of game",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224013749/cosmicencounter/images/thumb/5/53/Tick-Tock_%28FFG%29.jpg/150px-Tick-Tock_%28FFG%29.jpg"
        }, {
          "name": "Trader",
          "description": "Trades hands with opponent",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224014031/cosmicencounter/images/thumb/b/bd/Trader_%28FFG%29.jpg/150px-Trader_%28FFG%29.jpg"
        }, {
          "name": "Tripler",
          "description": "Low cards triple, high cards 1/3",
          "complexity": "red",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100224014610/cosmicencounter/images/thumb/1/14/Tripler_%28FFG%29.jpg/150px-Tripler_%28FFG%29.jpg"
        }, {
          "name": "Vacuum",
          "description": "Takes other ships to warp",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224015018/cosmicencounter/images/thumb/8/8a/Vacuum_%28FFG%29.jpg/150px-Vacuum_%28FFG%29.jpg"
        }, {
          "name": "Virus",
          "description": "Multiplies in attack",
          "complexity": "red",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100224015229/cosmicencounter/images/thumb/c/cf/Virus_%28FFG%29.jpg/150px-Virus_%28FFG%29.jpg"
        }, {
          "name": "Void",
          "description": "Eradicates opponents' ships",
          "complexity": "red",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100224020317/cosmicencounter/images/thumb/1/12/Void_%28FFG%29.jpg/150px-Void_%28FFG%29.jpg"
        }, {
          "name": "Vulch",
          "description": "Collects discarded artifacts",
          "complexity": "green",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100224020561/cosmicencounter/images/thumb/a/a8/Vulch_%28FFG%29.jpg/150px-Vulch_%28FFG%29.jpg"
        }, {
          "name": "Warpish",
          "description": "Adds ships in warp to total",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224020809/cosmicencounter/images/thumb/3/3d/Warpish_%28FFG%29.jpg/150px-Warpish_%28FFG%29.jpg"
        }, {
          "name": "Warrior",
          "description": "Adds experience points",
          "complexity": "green",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100224020938/cosmicencounter/images/thumb/6/66/Warrior_%28FFG%29.jpg/150px-Warrior_%28FFG%29.jpg"
        }, {
          "name": "Will",
          "description": "Not controlled by destiny",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100224021215/cosmicencounter/images/thumb/c/cb/Will_%28FFG%29.jpg/150px-Will_%28FFG%29.jpg"
        }, {
          "name": "Zombie",
          "description": "Never goes to warp",
          "complexity": "green",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100224021407/cosmicencounter/images/thumb/7/73/Zombie_%28FFG%29.jpg/150px-Zombie_%28FFG%29.jpg"
        }
      ],
      1: [
        {
          "name": "Bully",
          "description": "selects losing ships",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100414181046/cosmicencounter/images/thumb/6/62/Bully_%28FFG%29.jpg/150px-Bully_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Chronos",
          "description": "Can replay encounter",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100414181215/cosmicencounter/images/thumb/7/71/Chronos_%28FFG%29.jpg/150px-Chronos_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Cryo",
          "description": "Saves cards for later",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414181444/cosmicencounter/images/thumb/d/d9/Cryo_%28FFG%29.jpg/150px-Cryo_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Deuce",
          "description": "Plays 2 encounter cards",
          "complexity": "yellow",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414182508/cosmicencounter/images/thumb/6/6f/Deuce_%28FFG%29.jpg/150px-Deuce_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Disease",
          "description": "Spreads to other planets",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414183127/cosmicencounter/images/thumb/4/4f/Disease_%28FFG%29.jpg/150px-Disease_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Ethic",
          "description": "Gets compensation for attack",
          "complexity": "green",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100414183503/cosmicencounter/images/thumb/7/7f/Ethic_%28FFG%29.jpg/150px-Ethic_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Fungus",
          "description": "Attaches to other ships",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100414183829/cosmicencounter/images/thumb/9/90/Fungus_%28FFG%29.jpg/150px-Fungus_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Fury",
          "description": "Avenges lost ships",
          "complexity": "green",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414184211/cosmicencounter/images/thumb/b/b6/Fury_%28FFG%29.jpg/150px-Fury_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Genius",
          "description": "Wins with 20 cards",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414184516/cosmicencounter/images/thumb/8/86/Genius_%28FFG%29.jpg/150px-Genius_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Ghoul",
          "description": "Rewarded for defeating ships",
          "complexity": "red",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414184929/cosmicencounter/images/thumb/2/2a/Ghoul_%28FFG%29.jpg/150px-Ghoul_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Guerrilla",
          "description": "Winners lose all but 1 ship",
          "complexity": "green",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100414185317/cosmicencounter/images/thumb/f/f2/Guerrilla_%28FFG%29.jpg/150px-Guerrilla_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Leviathan",
          "description": "May attack with planet",
          "complexity": "yellow",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414185652/cosmicencounter/images/thumb/b/bc/Leviathan_%28FFG%29.jpg/150px-Leviathan_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Locust",
          "description": "Eats planets when alone",
          "complexity": "yellow",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414190243/cosmicencounter/images/thumb/6/6c/Locust_%28FFG%29.jpg/150px-Locust_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Magician",
          "description": "Steals card, confounds opponent",
          "complexity": "red",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414190630/cosmicencounter/images/thumb/9/95/Magician_%28FFG%29.jpg/150px-Magician_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Mercenary",
          "description": "Always rewarded for winning",
          "complexity": "green",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414191032/cosmicencounter/images/thumb/4/44/Mercenary_%28FFG%29.jpg/150px-Mercenary_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Merchant",
          "description": "Plays cards as extra ships",
          "complexity": "yellow",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100414191431/cosmicencounter/images/thumb/4/43/Merchant_%28FFG%29.jpg/150px-Merchant_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Plant",
          "description": "Accumulates opponents' powers",
          "complexity": "red",
          "image_url": "http://images4.wikia.nocookie.net/__cb20100414191844/cosmicencounter/images/thumb/c/c2/Plant_%28FFG%29.jpg/150px-Plant_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Seeker",
          "description": "Asks \"yes or no\" question",
          "complexity": "yellow",
          "image_url": "http://images3.wikia.nocookie.net/__cb20100414192207/cosmicencounter/images/thumb/7/74/Seeker_%28FFG%29.jpg/150px-Seeker_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Sniveler",
          "description": "Catches up when behind",
          "complexity": "yellow",
          "image_url": "http://images1.wikia.nocookie.net/__cb20100414192751/cosmicencounter/images/thumb/e/ea/Sniveler_%28FFG%29.jpg/150px-Sniveler_%28FFG%29.jpg",
          "expansion": "CI"
        }, {
          "name": "Symbiote",
          "description": "Has twice as many ships",
          "complexity": "green",
          "image_url": "http://images2.wikia.nocookie.net/__cb20100414193138/cosmicencounter/images/thumb/4/48/Symbiote_%28FFG%29.jpg/150px-Symbiote_%28FFG%29.jpg",
          "expansion": "CI"
        }
      ],
      2: [
        {
          "name": "Cavalry",
          "description": "Plays Encounter Card as Ally",
          "complexity": "green",
          "image_url": "/images/aliens/cc/191845_187061524664693_96650_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Changeling",
          "description": "Swaps Powers with Opponent",
          "complexity": "green",
          "image_url": "/images/aliens/cc/191563_187075964663249_1331649_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Empath",
          "description": "May Change Attack to Negotiate",
          "complexity": "green",
          "image_url": "/images/aliens/cc/172402_187076907996488_4911183_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Filth",
          "description": "Drives Away Others' Ships",
          "complexity": "red",
          "image_url": "/images/aliens/cc/172764_187333644637481_2962227_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Glutton",
          "description": "Gets Extra Ships and Cards",
          "complexity": "green",
          "image_url": "/images/aliens/cc/193009_187333681304144_3855471_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Graviton",
          "description": "Compresses Attacks to 1 Digit",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/194588_187333737970805_4847585_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Industrialist",
          "description": "Adds Losing Attack Cards",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/195081_187333774637468_6358511_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Invader",
          "description": "Launches Sneak Attacks",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/191832_187333811304131_6854086_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Lunatic",
          "description": "Allies Against Self ",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/194438_187333841304128_2793816_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Mimic",
          "description": "Copies Opponent's Hand Size",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/191031_187333897970789_3718229_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Prophet",
          "description": "Predicts Encounter Winner",
          "complexity": "red",
          "image_url": "/images/aliens/cc/191037_187333927970786_6816324_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Relic",
          "description": "Gains Power from New Hands",
          "complexity": "red",
          "image_url": "/images/aliens/cc/172730_187333974637448_3026320_o",
          "expansion": "CC"
        }, {
          "name": "Saboteur",
          "description": "Booby Traps Planets",
          "complexity": "red",
          "image_url": "/images/aliens/cc/192314_187334011304111_5870596_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Sadist",
          "description": "Tries to Kill Others' Ships",
          "complexity": "red",
          "image_url": "/images/aliens/cc/191678_187334044637441_5301626_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Siren",
          "description": "Entices Challengers",
          "complexity": "yellow",
          "image_url": "191055_187334091304103_4293329_o.jpg",
          "expansion": "CC"
        }, {
          "name": "The Claw",
          "description": "Steals Planets",
          "complexity": "red",
          "image_url": "/images/aliens/cc/194822_187334121304100_2050311_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Trickster",
          "description": "Wins 50% of the Time",
          "complexity": "green",
          "image_url": "/images/aliens/cc/194944_187334154637430_5196924_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Visionary",
          "description": "Dictates Encounter Cards",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/190843_187334204637425_3432484_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Warhawk",
          "description": "Never Negotiates",
          "complexity": "yellow",
          "image_url": "/images/aliens/cc/192678_187334244637421_1782660_o.jpg",
          "expansion": "CC"
        }, {
          "name": "Xenophile",
          "description": "Gains Strength from 'Tourists'",
          "complexity": "green",
          "image_url": "/images/aliens/cc/194166_187334284637417_7673656_o.jpg",
          "expansion": "CC"
        }
      ],
      3: [
        {
          "name": "Animal",
          "description": "Throws a Hearty Party",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/421889_332049870165857_1814785554_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Bandit",
          "description": "'Takes A Spin' Each Turn",
          "complexity": "red",
          "image_url": "/images/aliens/ca/426136_332926810078163_1877516668_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Butler",
          "description": "Gets Cards for Chores",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/417633_332926830078161_2128349110_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Chrysalis",
          "description": "Becomes Another Alien",
          "complexity": "red",
          "image_url": "/images/aliens/ca/428682_332926843411493_1730310537_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Crystal",
          "description": "May Multiply Attack Cards",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/419338_332926883411489_662141657_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Cyborg",
          "description": "Has 3 Extra Face Up Cards",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/425627_332926906744820_755753557_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Extortionist",
          "description": "Gets Half of All New Cards",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/425462_332926913411486_2108023210_n.jpg",
          "expansion": "CA"
        }, {
          "name": "General",
          "description": "Draws Cards for Allies",
          "complexity": "green",
          "image_url": "/images/aliens/ca/420692_332926923411485_323510960_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Gorgon",
          "description": "Petrifies Others' Ships",
          "complexity": "red",
          "image_url": "/images/aliens/ca/416777_332926940078150_766556526_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Horde",
          "description": "Gains Tokens That Act as Ships",
          "complexity": "red",
          "image_url": "/images/aliens/ca/417313_341785605858950_534260200_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Lightning",
          "description": "Gains and Takes Away Encounters",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/423153_332927016744809_1559422573_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Poison",
          "description": "Has Hazardous Home System",
          "complexity": "red",
          "image_url": "/images/aliens/ca/421005_332927033411474_1134013476_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Pygmy",
          "description": "Colonies Count as Half",
          "complexity": "green",
          "image_url": "/images/aliens/ca/64123_332927053411472_342416316_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Reborn",
          "description": "Filters Hand of Cards",
          "complexity": "green",
          "image_url": "/images/aliens/ca/419835_332927083411469_492012024_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Remote",
          "description": "Forces Others to Ally",
          "complexity": "red",
          "image_url": "/images/aliens/ca/417646_332927110078133_1763570463_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Sapient",
          "description": "Adds Wisdom Points",
          "complexity": "green",
          "image_url": "/images/aliens/ca/417106_332927163411461_331077145_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Schizoid",
          "description": "Changes Goal of Game",
          "complexity": "red",
          "image_url": "/images/aliens/ca/427989_332927193411458_1141086369_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Skeptic",
          "description": "Doubles Risk of Encounter",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/420759_332927213411456_56993550_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Sting",
          "description": "Switch Lost Ships",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/419731_332927236744787_1698549843_n.jpg",
          "expansion": "CA"
        }, {
          "name": "Winner",
          "description": "Gains Extra Colonies",
          "complexity": "yellow",
          "image_url": "/images/aliens/ca/421893_332927246744786_1640395600_n.jpg",
          "expansion": "CA"
        }
      ]
    };

    return Aliens;

  })();

  App.Randomiser = (function() {
    Randomiser.prototype.defaults = {
      numPlayers: 4,
      games: [0],
      complexity: ['green', 'yellow', 'red']
    };

    function Randomiser(options) {
      if (options == null) {
        options = {};
      }
      this.options = _.defaults(options, this.defaults);
      this._loadSettings();
      this._setUI();
      this.listen();
    }

    Randomiser.prototype._loadSettings = function() {
      return this.options = _.extend(this.options, store.getAll());
    };

    Randomiser.prototype._setUI = function() {
      var comp, game, _i, _j, _len, _len1, _ref, _ref1;
      this.ui = {
        numberOfPlayers: $("#number-of-players"),
        games: $(".games"),
        complexity: $(".complexity")
      };
      this.ui.games.find('.active').removeClass('active');
      _ref = this.options.games;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        game = _ref[_i];
        this.ui.games.find("[data-value=" + game + "]").addClass('active');
      }
      this.ui.complexity.find('.active').removeClass('active');
      _ref1 = this.options.complexity;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        comp = _ref1[_j];
        this.ui.complexity.find("[data-value=" + comp + "]").addClass('active');
      }
      return this.ui.numberOfPlayers.val(this.options.numPlayers);
    };

    Randomiser.prototype.reset = function() {
      var _this = this;
      this.aliens = [];
      _.each(this.options.games, function(gameIndex) {
        return _this.aliens = _.union(_this.aliens, App.Aliens.games[gameIndex]);
      });
      this.aliens = _.filter(this.aliens, function(alien) {
        var _ref;
        return _ref = alien.complexity, __indexOf.call(_this.options.complexity, _ref) >= 0;
      });
      this.aliens = _.shuffle(this.aliens);
      return this.players = [];
    };

    Randomiser.prototype.shuffle = function() {
      var _this = this;
      return _.times(this.options.numPlayers, function() {
        var twoAliens;
        twoAliens = [_this.aliens.pop(), _this.aliens.pop()];
        return _this.players.push(twoAliens);
      });
    };

    Randomiser.prototype.listen = function() {
      var _this = this;
      return $('.randomise-button').on('click', function() {
        return _this.run();
      });
    };

    Randomiser.prototype.alienDiv = function(alien) {
      var expansion;
      expansion = "";
      if (alien.expansion) {
        expansion = "<span class='text-muted'>[" + alien.expansion + "]</span>";
      }
      return $("<div>\n<div class='alien " + alien.complexity + "'>\n  <h3>\n    <i class='icon-circle'></i>\n    " + alien.name + "\n    " + expansion + "\n    <i class='icon-circle'></i>\n  </h3>\n  <p>" + alien.description + "</p>\n  <img class='alien-card hidden-xs' src='" + alien.image_url + "'/>\n</div>\n</div>").html();
    };

    Randomiser.prototype.run = function() {
      var el,
        _this = this;
      this.options.numPlayers = parseInt(this.ui.numberOfPlayers.val());
      this.options.games = _.map(this.ui.games.find('.active'), function(el) {
        return $(el).data('value');
      });
      this.options.complexity = _.map(this.ui.complexity.find('.active'), function(el) {
        return $(el).data('value');
      });
      store.set('numPlayers', this.options.numPlayers);
      store.set('games', this.options.games);
      store.set('complexity', this.options.complexity);
      this.reset();
      this.shuffle();
      el = $(".content");
      el.empty();
      return _.each(window.randomiser.players, function(player, index) {
        var div, html;
        html = "<div class='row player'>\n<div class='col-md-12 col-xs-12'>\n <div class='row text-center player-name'><h1><i class='icon-user'></i> Player " + (index + 1) + "</h1></div>\n <div class='row col-xs-12'>\n   <div class='col-xs-12 col-md-4 col-md-offset-1 text-center well-sm'>" + (_this.alienDiv(player[0])) + "</div>\n   <div class='col-xs-12 col-md-4 col-md-offset-2 text-center well-sm'>" + (_this.alienDiv(player[1])) + "</div>\n </div>\n</div>\n</div>";
        div = $(html);
        return el.append(div);
      });
    };

    return Randomiser;

  })();

  window.App = App;

  window.randomiser = new App.Randomiser();

}).call(this);
