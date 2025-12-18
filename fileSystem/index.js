import { log } from 'console';
import { readFile } from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);

let contents = await readFile(filePath, { encoding: 'utf-8' });

const data = {
  name: 'Abhinav',
  age: 22,
  city: 'Pathanamthitts',
};
for (const [key, value] of Object.entries(data)) {
  contents = contents.replace(`{${key}}`, value);
}
console.log(contents);
