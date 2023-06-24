function studentInfo(name, age, grade) {
    const string = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(string);
}
studentInfo('John', 15, 5.54678);