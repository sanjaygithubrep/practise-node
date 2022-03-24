const dbConnect = require('./connection');

const insert =async ()=>{
    const db= await dbConnect();
    const result = await db.insertMany(
        [
        {name:'max1',brand:'micromax',price:220,category:'mobile'},
        {name:'max2',brand:'micromax',price:320,category:'mobile'},
        
        {name:'max3',brand:'micromax',price:420,category:'mobile'}
    ]
    );
    console.log(result)
    // if(result.acknowledged)
    // {
    //     console.log("data inserted")
    // }
}

insert();