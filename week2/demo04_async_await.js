
function doAsyncTask() { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async task finished");
        }, 2000);
    });
}


async function doAsyncFunc() { 
    await doAsyncTask();
    console.log("Async function finished");
}

console.log('start')
doAsyncFunc()
console.log('stopping')