let student = {
    // properties
    id: 1,
    firstName: 'Bao',
    lastName: 'Vu',
    gender: true,
    score: 7.5,

    // methods
    printGender: function () {
        if (this.gender === true)
            return 'Nam';
        else
            return 'Nu';
    },

    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    // Chú ý: Không nên sử dụng arrow function làm object method
    // getFullName: () => {
    //     return this.firstName + this.lastName;
    // },
};

function getFullName() {
    return student.firstName + ' ' + student.lastName;
}

getFullName();
// ,console.log(student.getFullName());