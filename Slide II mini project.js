let students = [];

function addStudent(id, name, age, year, department, college, cgpa) {
    let student={
        id:id,
        name: name,
        age:age,
        year:year,
        department: department,
        college: college,
        cgpa:cgpa
    };
    students.push(student);
}

function listStudents() {
    return students;
}

function findStudent(id) {
    return students.find(student => student.id==id);
}

function updateStudent(id, newName, newAge, newYear, newDepartment, newCollege, newCgpa) {
    let student = findStudent(id);
    if (student) {
        student.name=newName;
        student.age=newAge;
        student.year=newYear;
        student.department=newDepartment;
        student.college=newCollege;
        student.cgpa=newCgpa;
    }
}

function deleteStudent(id) {
    students=students.filter(student=>student.id!==id);
}



function savejson() {
    return JSON.stringify(students);
}

function loadjson(jsonString) {
    students = JSON.parse(jsonString);
}




addStudent("UGR/2723/15","Amanuel Zelalem",20, 2,"Med", "Sefere Selam",3.4);
addStudent("UGR/2771/15", "Marta Tesfaye",21, 3,"Computer Science","4kilo",3.6);
addStudent("UGR/2772/15","Kaleab Kassa",22,4,"Civil Engineering", "AAiT",3.2);
addStudent("UGR/2773/15","Lidia Alemu", 23,1,"Mechanical Engineering","AAiT", 3.8);
addStudent("UGR/2774/15","Bereket Berhanu",24, 2,"COTM", "EiABC",3.5);
addStudent("UGR/2775/15","Hana Gebre", 20,3,"Economics", "Commerce", 3.7);
addStudent("UGR/2776/15","Elias Alemayehu",21,4, "Law", "6 kilo",3.1);
addStudent("UGR/2777/15","Netsanet Hailu",22, 1,"Math", "4 kilo",3.9);
addStudent("UGR/2778/15", "Yohannes Desta",23, 2,"Architecture","EiABC", 3.3);
addStudent("UGR/2779/15","Melat Mulugeta",24, 3,"Computer Science","4 kilo", 3.6);
addStudent("UGR/2780/15", "Samuel Gebre",20, 4,"Music", "Yared",3.2);
addStudent("UGR/2781/15","Hirut Bekele",21,1, "Painting", "Art",3.8);
addStudent("UGR/2782/15","Tamrat Abebe",22,2,"Architecture", "EiABC",3.5);
addStudent("UGR/2783/15","Rahel Assefa",23,3,"Electrical Engineering","AAiT", 3.7);
addStudent("UGR/2784/15","Yared Bekele",24,4, "Chemical Engineering","AAiT", 3.1);


////////////////////////////////////@@@EXAMPLE USAGE@@@///////////////////////////////////////////////////
// console.log(listStudents());
// updateStudent("UGR/2723/15", "Amanuel Zelalem", 21, 3, "Med", "Sefere Selam", 3.5);
console.log(findStudent("UGR/2723/15"));
// deleteStudent("UGR/2771/15");
// console.log(listStudents());



//////////////////////////////////////////////json stringify and parse function calling////////////////////////////
const jsonString = savejson();
console.log(jsonString);

loadjson(jsonString);
console.log(listStudents());
