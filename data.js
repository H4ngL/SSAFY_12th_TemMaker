import dotenv from "dotenv";

dotenv.config();

export const members = process.env.MEMBERS
  ? JSON.parse(process.env.MEMBERS)
  : [];

export const weights = process.env.WEIGHTS
  ? JSON.parse(process.env.WEIGHTS)
  : {};

export const TEAM_SIZE = 4;

console.log(weights);
