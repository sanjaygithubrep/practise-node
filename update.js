const dbConnect = require('./connection');
const updateData=async()=>{
    let data = await dbConnect();
    let result = await data.update(
        {name:'max1'},{$set:{name:'max pro',price:550}
    }
    )
    console.log(result)

}
updateData();

