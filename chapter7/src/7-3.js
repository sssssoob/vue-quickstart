function addContact (name, mobile,
                     home="없음",
                     address= "없음",
                     email= "없음") {
    var str
        = `name = ${name}, 
        mobile = ${mobile},
        home = ${home}
        address = ${address},
        email = ${email}`;

    console.log(str);
}

addContact("송수빈", "01012345678");
addContact("송수빈", "01012345678", "021234567", "서울");