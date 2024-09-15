
  let formDataArray = JSON.parse(localStorage.getItem("Studentarray")) || [];


const formData=document.getElementById("studentForm")
console.log(formData,"dataaaName")
formData.addEventListener("submit", onFormSubmit);
// function onFormSubmit(event) {
//     console.log(event,"eveee")
// 	event.preventDefault();
// 	const data = new FormData(event.target);
   
//     console.log(data,"dataaaa")
  
// }
function onFormSubmit(event) {
  event.preventDefault();

    const formToObject = formData => Object.fromEntries(new FormData(formData),);
  
    const studentData=(formToObject(formData));
    console.log(studentData,"datass")
    studentData.id=Math.random().toString(36).substr(2, 9);
   
    formDataArray.push(studentData)
    console.log(formDataArray,"arraysss")
    localStorage.setItem("Studentarray", JSON.stringify(formDataArray))
    const storedStudents = JSON.parse(localStorage.getItem("Studentarray"));

    console.log(storedStudents ,"namesArrat")
    location.href="students.html"
  

  //   const data = new FormData(event.target);
  //   studentsArray.push(data)
  //   saveDataTpStorage(studentsArray)
  //   console.log(studentsArray,"arrayNow")
  //   console.log(data,"dataaa before")
   
  //   // Log form data
  //   for (let [key, value] of data.entries()) {
  //       // console.log(`${key}: ${value}`,"dataaaa");
  //       data[key]=value

  //   }
  //   console.log(data,"dddd")
  // // location.href="students.html"
  
}