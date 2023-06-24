function printingMonth(num) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
    for (let i = 0; i < months.length; i++) {
        const element = months[i];
        if (i + 1 === num) {
            console.log(element);
        }

        if (num < 0 || num > 12) {
            console.log("Error!");
        }
    }  
}

printingMonth(15)