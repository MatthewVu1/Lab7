function createCourseArray(){
    // This function doesn't actually read the document, so it needs to be fixed, as I haven't figured it out.
    // So it is just hardcoded in
    class1 = {
        code: "ACIT-1620",
        name: "Web Fundamental Technologies"
    };
    class2 = {
        code: "ACIT-1515",
        name: "Scripting for IT"
    };
    class3 = {
        code: "COMM-1116",
        name: "Business Communications 1"
    };
    const courseList = [class1, class2, class3];
    return courseList
    }

function findCourse(courseList){
    for (let course of courseList) {
        if (course.code.includes(input)) {
            console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
            if (course === class1)
                document.getElementById("class1").style.backgroundColor = "lightgreen";
            if (course === class2)
                document.getElementById("class2").style.backgroundColor = "lightgreen";
            if (course === class3)
                document.getElementById("class3").style.backgroundColor = "lightgreen";
            valid = true;
            break;
        } else {
            valid = false
        }
    }
    if (valid === false) {
        class4 = {
            code: `${input}`,
            name: "Null"
        }
        courseList.push(class4);
        console.log("New object sucessfully added")
        var element = document.getElementById("course_list");

        var line = document.createElement("hr");
        element.appendChild(line)

        var new_course = document.createElement("div")
        new_course.className = "course";
        element.appendChild(new_course)


        var code = document.createElement("div");
        var node = document.createTextNode(`${input}`);
        code.appendChild(node);
        new_course.appendChild(code);

        var desc = document.createElement("p");
        var node_desc = document.createTextNode("N/A");
        desc.appendChild(node_desc);
        new_course.appendChild(desc)

        var date = document.createElement("div");
        var node_date = document.createTextNode("Fall 2020");
        date.className = "course_desc";
        date.appendChild(node_date);
        element.appendChild(date)
    }
}

function main(){
    do {
        input = prompt("Enter a 4 digit code:")
    }
    while (isNaN(input) || input.length != 4)

    course = createCourseArray()
    findCourse(course)
}

main()