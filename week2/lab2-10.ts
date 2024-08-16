import { readFile } from 'fs'

readFile('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt', 'utf8' ,(err , data) => {
    if(err){ 
        console.log(err)
    }
    console.log(data)
})

const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}


function callBackPath(FilePath : string ) { 
    return new Promise((resolve, reject) => {
        readFile(FilePath, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
})
}

readFilePromise('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt').then(data => console.log(data)).catch(err => console.log(err))
// callBackPath('C:/Users/satan/OneDrive/Desktop/year3/week2/test.txt').then(data => console.log(data)).catch(err => console.log(err))}
callBackPath('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt').then((data)=>console.log(data)).catch(err => console.log(err))
