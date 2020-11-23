class1 = {
    code: "ACIT-1620",
    number: "1620",
    name: "Web Fundamental Technologies"
};
class2 = {
    code: "ACIT-1515",
    number: "1515",
    name: "Scripting for IT"
};
class3 = {
    code: "COMM-1116",
    number: "1116",
    name: "Business Communications 1"
};
const courseList = [class1, class2, class3];

do {
    input = prompt("Enter a 4 digit code:")
}
while (isNaN(input) || input.length != 4)



for (let course of courseList) {
    if (input === course.number) {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
        valid = true
        break;
    } else {
        valid = false
    }
}
if (valid === false) {
    class4 = {
        code: `${input}`,
        number: `${input}`,
        name: "Null"
    }
    courseList.push(class4);
    console.log("New object sucessfully added")
}


