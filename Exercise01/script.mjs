import { writeFile } from 'node:fs';

writeFile("textfile.txt", "Hello World!", (err) => {
  if(err) throw err;
});