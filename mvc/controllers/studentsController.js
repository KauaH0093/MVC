const app = require('../../startup.js')
const studentModel = require('../models/studentModel.js')

app.get("/getAllStudents", (req, res) => {
    
    const studentsList = []

    for(let count = 5; count > 0; count--){
        const student = studentModel

        student.RA = 9384923
        student.Nome = "Kauã"
        student.Hobbie = "sla"
        student.DtIngressoCurso = "29/10/2050"
        student.Curso = "DEV"

        studentsList.push(student.RegistroJSON())
       
    }

    res.json(studentsList)
})

