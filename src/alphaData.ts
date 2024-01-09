type AlphaMember = {
  id: number;
  name: string;
  lastName: string;
  teamNickname: string;
  birthDate: Date;
  quoteForTheNechfaf?: string;
};

const yoav: AlphaMember = {
  id: 1,
  name: "Yoav",
  lastName: "Gal",
  teamNickname: "יואבא",
  birthDate: new Date("2002-04-10"),
  quoteForTheNechfaf: "Don't be a BOT!",
};

const ishay: AlphaMember = {
  id: 2,
  name: "Ishay",
  lastName: "Siboni",
  teamNickname: "Siboni",
  birthDate: new Date("1999-03-30"),
  quoteForTheNechfaf: "When you go to the SEKEM - bring me ZERO ",
};

const omri: AlphaMember = {
  id: 3,
  name: "Omri",
  lastName: "Chinitz",
  teamNickname: "omriki/chinitz",
  birthDate: new Date("2004-01-24"),
  quoteForTheNechfaf: "I hate mamram's snow ",
};

const savion: AlphaMember = {
  id: 4,
  name: "Savion",
  lastName: "Dekel",
  teamNickname: "THE SAVAGE!",
  birthDate: new Date("2002-12-30"),
  quoteForTheNechfaf: "Ad Matai",
};

const sivan: AlphaMember = {
  id: 5,
  name: "Sivan",
  lastName: "Elias",
  teamNickname: "CV",
  birthDate: new Date("2000-06-20"),
  quoteForTheNechfaf: "-",
};

const leaor: AlphaMember = {
  id: 6,
  name: "Leaor",
  lastName: "Rachmani",
  teamNickname: "Kabanos/kingRachman",
  birthDate: new Date("2000-07-22"),
  quoteForTheNechfaf: "kabanos who??",
};
export let members: AlphaMember[] = [yoav, ishay, omri, savion, sivan, leaor];
