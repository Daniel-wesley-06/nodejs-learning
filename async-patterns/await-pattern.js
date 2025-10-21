const { readFile,writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// after commenting these out we need not to mention any readFilepromise and writeFilepromise
const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',
             `This is awesome : ${first} ${second}`,
             {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()










// const {readFile, read} = require('fs')


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()



// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))