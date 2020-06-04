console.log('1)============ START!')
let cong = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rej(new Error('Cong: Input kieu number!!!'))
            }
            res(a + b)
        }, 1000)
    })
}
let nhan = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rej(new Error('Nhan: Input kieu number!!!'))
            }
            res(a * b)
        }, 1000)
    })
}
let chia = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rej(new Error('Chia: Input kieu number!!!'))
            }
            if (b === 0) {
                return rej(new Error('KO the chia 0!!!'))
            }
            res(a / b)
        }, 1000)
    })
}
let dienTich = (a, b, h) => {
    return cong(a, b).then(
        (kq1) => { return nhan(kq1, h) }
    ).then(
        (kq2) => { return chia(kq2, 2) }
    )
}
dienTich(2, 3, '2')
    .then((kq3) => console.log('KQ: ', kq3))
    .catch((err) => console.log(err + ''))

// ************* Promise.all/race()
// Promise.race([nhan(4, 5), cong('4', 5)]) // nếu là all thì hiện ERR msg
//     .then(kq => console.log(kq))
//     .catch(e => console.log(e + ''))

// ************* thu tu console.log()
// let a = cong(2, 3)
//     .then(
//         (kq1) => {
//             console.log('2)============ ', kq1)
//             return kq1
//         },
//         (err) => {
//             console.log('3)============ ', err + '')
//             return (err + '')
//         }
//     )
//     .then(
//         (kq2) => {
//             console.log('4)============ ', kq2)
//             return 'XXX'
//         }
//     )
// let asyncFunc = async () => {
//     let awaitTmp = await a // convert a=Promise -> awaitTmp=string
//     console.log('5)============ ', awaitTmp)
// }
// asyncFunc()
// setTimeout(() => console.log('6)============ ', a), 2000)

// ************* fs.readFile()
// let fs = require('fs')
// let read = (filename) => {
//     return new Promise((res, rej) => {
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if (err) return rej(err)
//             res(data)
//         })
//     })
// }
// read('./test.txt').then(
//     (data) => console.log(data),
//     (err) => console.log(err + ''),
// )
console.log('7)============ END!')

