import { checkPrice, clickButton } from './nightmare';
import fs from 'fs';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.appendFile);

async function start() {
  setInterval(async () => {
    try {
      await clickButton();
    } catch (e) {
      writeFileAsync('./log.txt', `Whoops: ${e.message}`);
    }
  }, 1860000);
}

start();
