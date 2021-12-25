// soal terakhir di PPT

class Student {
    constructor() {
        this.name = "Rahmania"
        this.age = "20"
        this.DateOfBirth = "7 september 2001"
        this.gender = "Female"
        this.studentId = 1212
        this.hobby = ["Sleep"];
    }

    getData() {
        return this;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setDateOfBirth(DateOfBirth) {
        this.DateOfBirth = DateOfBirth;
    }

    setGender (gender) {
        this.gender = gender;
    }

    addHobby(newHobby) {
        this.hobby.push(newHobby)
    }

    removeHobby(hobby){
        for(let i = 0; i < this.hobby.length; i++) {
            const hobbyItem = this.hobby[i]
            if( hobby === hobbyItem ) {
                this.hobby.splice(i, 1)
            }
        }
    }
}

const newStudent = new Student();
newStudent.addHobby("Snacking")
console.log( newStudent.getData() );
newStudent.removeHobby("Snacking")

//console.log(newStudent.name);