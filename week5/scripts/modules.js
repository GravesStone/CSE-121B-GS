//modules.js
const data = [
    {
      firstName:'John',
      lastName : 'Doe',
      age: '21',
      gpa:3.5
    },
    {
      firstName:'Mary',
      lastName : 'Smith',
      age: '22',
      gpa:3.8
    },
    {
      firstName:'Emily',
      lastName : 'Jones',
      age: '19',
      gpa:3.2
    },
    {
      firstName:'Micheal',
      lastName : 'Johnson',
      age: '25',
      gpa:2.5
    }
  ];
      
  const displayedStudentDirectory = () => {
    let element = document.getElementById("output");
    let minGpa = document.getElementById("minGpa").value;
    element.innerHTML= "";

    let arrayForDisplay;

    if (minGpa == "All"){
      arrayForDisplay = data;
    }
    else{
      let val = parseFloat(minGpa);
      arrayForDisplay = data.filter((student) => {
        return student.gpa >= val;
      });
    }
    arrayForDisplay.forEach(student =>{
      element.innerHTML += `<p><b>${student.lastName}, ${student.firstName} (${student.age})</b>: ${student.gpa}</p>`

    })
  };

  document.getElementById("btnLoad").addEventListener('click',displayedStudentDirectory);