import dotenv from 'dotenv';
import * as cowsay from "cowsay"
dotenv.config();

const nom = process.env.NAME
const campus = process.env.CAMPUS


const output = cowsay.say({text: `Hello, My name is ${nom} , and i work at ${campus},`});
console.log(output);


