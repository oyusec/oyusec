import { IChallenge, IChallengeCategory } from "interfaces";
import { v4 } from "uuid";

var faker = require("faker");

export const categoryList: IChallengeCategory[] = [
  {
    id: v4(),
    key: "forensics",
    value: "Forensics",
  },
  {
    id: v4(),
    key: "misc",
    value: "Misc",
  },
  {
    id: v4(),
    value: "Crypto",
    key: "crypto",
  },
  {
    id: v4(),
    value: "Web",
    key: "web",
  },
  {
    id: v4(),
    value: "Pwn",
    key: "pwn",
  },
  {
    id: v4(),
    value: "Reversing",
    key: "reversing",
  },
  {
    id: v4(),
    key: "requested",
    value: "Requested",
  },
];

export const challengeList: IChallenge[] = Array.from({ length: 50 }, () => ({
  id: v4(),
  name: faker.name.findName(),
  tags: [],
  category: categoryList[Math.floor(Math.random() * categoryList.length)],
}));
