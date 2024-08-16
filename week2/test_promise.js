let error = false

function doPromise() { 
    return new Promise((resolve , reject) => { 
        setTimeout(() => {
            if (error) { 
                reject("An error occurred");
                
            } else {
                resolve("load finished"); 

            }
        }, 2000);
    })
}

console.log('start')

//doPromise().then((data) => console.log(data) , (err)=> console.log(err))
doPromise().then((data) => console.log(data)).catch((err) => console.log(err))
doPromise().then((data) => { console.log((data)) ;
                            return 'do next'

 }).then(  (result) => console.log(result))

console.log('stop')

