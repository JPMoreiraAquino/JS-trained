const Class A = [
    {
        name: "João Pedro",
        grade: 2
    },
    {
        name: "Talia",
        grade: 4
    },
    {
        name: "Nalda",
        grade: 6
    },
    {
        name: "Nalda",
        grade: 8.4
    },
    {
        name: "Nalda",
        grade: 8.4
    },
    {
        name: "Nalda",
        grade: 8.4
    },
    {
        name: "Nalda",
        grade: 10
    },
    {
        name: "Nalda",
        grade: 10
    },


];

const Class B = [
    {
        name: "Magno",
        grade: 8.4
    },
    {
        name: "Jamile",
        grade: 9.3
    },
    {
        name: "Eduardo",
        grade: 7.4
    },

];

const Class C = [
    {
        name: "Neide",
        grade: 3.4
    },
    {
        name: "Jose",
        grade: 5.3
    },
    {
        name: "Maria",
        grade: 3.4
    },
];

function calculateAverage(Students) {
    let sum = 0
    for (let i = 0; i < Students.length; i++) {
        sum = sum + Students[i].grade
    }

    const average = sum / Students.length
    return average
}

const average1 = calculateAverage(Class A)
const average2 = calculateAverage(Class B)
const average3 = calculateAverage(Class C)


function enviaMensagem(average, turma) {
    if (average > 6) {
        console.log(` average of ${turma} foi ${average}. Parabéns.`)
    } else {
        console.log(` average of ${turma} foi ${average}. Tente novamente na proxima.`)
    };
};
enviaMensagem(average1, 'turma A')
enviaMensagem(average2, 'turma B')
enviaMensagem(average3, 'turma C')

function flunked(Student) {
    Student.reprovado = false;
    if (Student.grade < 6) {
        Student.reprovado = true;
    }
}
function sandmessageReprovado(Student, turma) {
    if (Student.reprovado) {
        console.log(`o Student ${Student.name} Da ${turma
            } Está REPROVADO!`)
    }


}
function StudentReprovado(Students) {
    for (let Student of Students) {
        flunked(Student);
        sandmessageReprovado(Student)
    }
}

StudentReprovado(Class A, 'turma A')
StudentReprovado(Class B, 'turma B')
StudentReprovado(Class C, 'turma C')