function Student(){
  this.data = [];
  this.add =add;
  this.average =average
}
function add (grades) {
  this.data.push(grades)
};

function average (){
  return this.data.reduce((acc,item)=>{
    return acc + item
  }) / this.data.length
   
}

let student = new Student()



console.log(student);
student.add(33)
student.add(34)
student.add(35)
console.log(student.average());