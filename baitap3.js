// Yêu cầu người dùng nhập tên
let username = prompt("Please input your name>> ")

// Kiểm tra tên người dùng
if (username === "") {
    alert("Cancelled");
} else if (username === "ADMIN") {
    // Yêu cầu nhập mật khẩu nếu tên là ADMIN
    let password = prompt("Enter your password please>> ");
    // Kiểm tra mật khẩu
    if (password === "") {
        alert("Cancelled");
    } else if (password === "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I dont know you");
}