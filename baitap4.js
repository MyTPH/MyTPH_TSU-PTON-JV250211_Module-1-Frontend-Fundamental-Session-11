// Yêu cầu người dùng nhập số từ 0 đến 9
let number = +prompt("Please input number 0 to 9: ");
// Kiểm tra và hiển thị cách đọc
switch (number) {
    case 0:
        document.write("Số không");
        break;
    case 1:
        document.write("Số một");
        break;
    case 2:
        document.write("Số hai");
        break;
    case 3:
        document.write("Số ba");
        break;
    case 4:
        document.write("Số bốn");
        break;
    case 5:
        document.write("Số năm");
        break;
    case 6:
        document.write("Số sáu");
        break;
    case 7:
        document.write("Số bảy");
        break;
    case 8:
        document.write("Số tám");
        break;
    case 9:
        document.write("Số chín");
        break;
    default:
        document.write("Please only input number 0 to 9!!!");
}