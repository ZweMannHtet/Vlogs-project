const fs = require('fs');

// reading files
// fs.readFile('./blog.txt' , (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');


// writing files
// fs.writeFile('./blog.txt', 'hello zwe mann' , () => {
//     console.log('file was written');
// });

// fs.writeFile('./blog2.txt', 'hello zwe mann' , () => {
//     console.log('file was written');
// });

// directories
// if (!fs.existsSync('./Mu')) {
//     fs.mkdir('./Mu', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("folder is created");
//     });
    
// }else {
//     fs.rmdir('./Mu', (err) => {
//         if (err ) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     });
// }
 

// deleting files

// if (fs.existsSync('./Docs/mama.txt')) {
//     fs.unlink('./Docs/mama.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }