fs.readFile('./file.txt', (data, err)=>{
    if(err) {
        console.log("Inside gets printed.");
    }
    console.log("Outside gets printed.");
    });