function Person(name, yearCount) {
    this.name = name;
    this.age = 0;

    var incrAge = function () {
        this.age++;
    };

    for (var i = 1; i <= yearCount; i++) {
        incrAge();
    }
}

var p1 = new Person("송수빈", 27);
console.log(p1.name + "님의 나이 : ", p1.age);