const getID = (arrIds) => {

    const id = arrIds.reduce((acc,id)=>{
        return acc > id ? acc : id
    },0)

    return id+1

}

module.exports=getID