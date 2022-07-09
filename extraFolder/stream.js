const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog2.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Docs/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- New Chunk -----');
//     console.log(chunk.toString());
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

//pipping

readStream.pipe(writeStream);