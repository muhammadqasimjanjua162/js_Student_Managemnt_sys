const getDatafromStorage=(tableName)=>{
   return  JSON.parse(localStorage.getItem(tableName))
}
const saveDataToLocalStorage=(data,tableName)=>{
  
     localStorage.setItem(`${tableName}`, JSON.stringify(data))
}
const deleteDatafromStorage=(id,tableName)=>{
    const courseArray=getDatafromStorage(tableName);
    console.log(courseArray,"oharray")
    const findIndex=courseArray.findIndex((item)=>item.id===id);
    console.log(findIndex,"indd")
    if(findIndex!==-1){
        courseArray.splice(findIndex,1);
            saveDataToLocalStorage(courseArray,tableName);
        
       
        // console.log(filterdData,"dataaaa")

    }
    

}
const UpdateDatatoStorage=(data)=>{
    console.log(data,"new data")
    const id=data.id
    let courses=getDatafromStorage("Coursearray");
    console.log(courses,"coursessss");
   let newArray=courses.map((item)=>item.id===id?data:item);
   console.log(newArray,"newes")
    // saveDataToLocalStorage(courses,"Coursearray");
    // console.log(resultedArray,"ressss")
    // console.log(resultedArray,"ri")
    saveDataToLocalStorage(newArray,"Coursearray")
    

   
    

}