export interface QuoteInterface {
  author: string,
  content: string,
  contentPL?: string,
}

export const quotes: QuoteInterface[] = [
  {
    author: "Marcus Aurelius",
    content: "Do not be angry at the course of events; they care nothing for you.",
    contentPL: "Nie należy się gniewać na bieg wypadków. Nic ich to bowiem nie obchodzi."
  },
  {
    author: "Marcus Aurelius",
    content: "Wherever one can live, one can live well.",
    contentPL: "Gdzie można żyć, tam można żyć dobrze."
  },
  {
    author: "Marcus Aurelius",
    content: "Waste no more time arguing about what a good man should be. Be one.",
    contentPL: "",
  },
  {
    author: "Marcus Aurelius",
    content: "The earth likes rain, the high ether likes it too. The universe likes to do what is meant to happen. So I say to the universe: I like what you like.",
    contentPL: "Lubi deszcz ziemia, lubi wysoki eter”. Wszechświat lubi to robić, co się stać ma. Mówię więc do wszechświata: Lubię to, co ty.",
  },
  {
    author: "Marcus Aurelius",
    content: "People exist for one another. Either instruct them or bear with them.",
    contentPL: "Ludzie istnieją dla siebie wzajemnie. Albo ich więc pouczaj, albo znoś.",
  },
  {
    author: "Antoine de Saint-Exupéry - The Little Prince",
    content: "You become responsible, forever, for what you have tamed.",
    contentPL: "Na zawsze bierzesz odpowiedzialność za to, co oswoiłeś.",
  },
  {
    author: "Plato",
    content: "Wise men speak because they have something to say; fools because they have to say something.",
    contentPL: "Mądrzy mówią, bo mają coś do powiedzenia; głupcy, bo muszą coś powiedzieć.",
  },
  {
    author: "Plato",
    content: "Courage is the knowledge of what to fear and what not to fear.",
    contentPL: "Odwaga jest to wiedza o tym czego się bać a czego nie.",
  },
  {
    author: "Socrates",
    content: "Prefer knowledge to wealth, for the one is transitory, the other perpetual.",
    contentPL: "Wybieraj wiedzę zamiast bogactwa, bo jedno jest przemijające, drugie wieczne.",
  },
  {
    author: "Socrates",
    content: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
    contentPL: "Silne umysły dyskutują o ideach, przeciętne umysły o wydarzeniach, słabe umysły o ludziach.",
  },
  {
    author: "Robert Greene",
    content: "Win through actions, never through argument.",
    contentPL: "Wygrywaj działaniem, nigdy przekonywaniem.",
  },
  {
    author: "Robert Greene",
    content: "Words have that insidious ability to be interpreted according to the other person’s mood and insecurities.",
    contentPL: "Słowa mają tę podstępną zdolność do interpretacji w zależności od nastroju i niepewności drugiej osoby.",
  },
  {
    author: "Robert Greene",
    content: "There is nothing more intoxicating than victory, and nothing more dangerous.",
    contentPL: "Nie ma nic bardziej upajającego niż zwycięstwo i nic bardziej niebezpiecznego.",
  },
  {
    author: "Rocky Balboa",
    content: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    contentPL: "Nie chodzi o to jak mocno uderzasz. Chodzi o to jak mocno możesz zostać uderzony i iść dalej.",
  },
  {
    author: "Rocky Balboa",
    content: "Every champion was once a contender who refused to give up.",
    contentPL: "Każdy mistrz był kiedyś pretendentem, który odmówił poddania się.",
  },
  {
    author: "Rocky Balboa",
    content: "Going in one more round when you don’t think you can – that’s what makes all the difference in your life.",
    contentPL: "Wejście w jedną rundę więcej, gdy nie myślisz, że możesz - to właśnie robi różnicę w twoim życiu.",
  },
  {
    author: "Anthony De Mello",
    content: "Happiness is like a butterfly. Chase after it and it escapes you; sit down and it settles on your shoulder.",
    contentPL: "Szczęście jest jak motyl. Gonić za nim, a ucieka; usiądź, a usiądzie na twoim ramieniu.",
  },
  {
    author: "Harvey Specter",
    content:"I don’t get lucky. I make my own luck."
  },
  {
    author: "Harvey Specter",
    content:"Winners don't make excuses when the other side plays the game."
  },
  {
    author: "Harvey Specter",
    content:"You don’t send a puppy to clean up its own mess."
  },
  {
    author: "Dr Gregory House, M.D.",
    content:"You gotta make things better. You can't just keep talking and hope for the best."
  },
  {
    author: "Dr Gregory House, M.D.",
    content:"Arrogance has to be earned. Tell what you've done to earn yours."
  },
  {
    author: "Piotr Zając (my hero)",
    content: "It was supposed to be as usual, and it turned out as usual.",
    contentPL:"Miało być jak zwykle, a wyszło jak zwykle."
  },
  {
    author: "Lord Huron",
    content: "I had all and then most of you, some, and now none of you.",
  },
];

function shuffle(array: object[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
}

// Make it randomized
shuffle(quotes);
