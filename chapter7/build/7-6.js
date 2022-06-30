function addContact({ name, phone, email = "이메일 없음", age = 0 }) {
    console.log("이름 : ", name);
    console.log("전번 : ", phone);
    console.log("메일 : ", email);
    console.log("나이 : ", age);
}

addContact({
    name: "송수빈",
    phone: "01023456789"
});