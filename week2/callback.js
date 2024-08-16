function c(d){ 
    setTimeout(() => { 
        d();
    }, 2000);
}

console.log("starting ")
c(() => console.log("ending "));
