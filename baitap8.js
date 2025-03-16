let day = +prompt("mời bạn nhập ngày sinh");
let month = Number(prompt("mời bạn nhập tháng"));
let result="";
switch (month) {
    case 1:
        if (day <= 19) {
            result = "Ma Kết";
        } else {
            result = "Bảo Bình";
        }
        break;
    case 2:
        if (day <= 18) {
            result = "Bảo Bình";
        } else {
            result = "Song Ngư";
        }
        break;
    case 3:
        if (day <= 20) {
            result = "Song Ngư"
        } else {
            result = "Bạch Dương";
        }
        break;
    case 4:
        if (day <= 19) {
            result = "Bạch Dương"
        } else {
            result = "Kim Ngưu";
        }
        break;
    case 5:
        if (day <= 20) {
            result = "Kim Ngưu"
        } else {
            result = "Song Tử";
        }
        break;
    case 6:
        if (day <= 20) {
            result = "Song Tử"
        } else {
            result = "Cự Giải";
        }
        break;
    case 7:
        if (day <= 22) {
            result = "Cự Giải"
        } else {
            result = "Sư Tử";
        }
        break;
    case 8:
        if (day <= 22) {
            result = "Sư Tử"
        } else {
            result = "Xử Nữ";
        }
        break;
    case 9:
        if (day <= 22) {
            result = "Xử Nữ"
        } else {
            result = "Thiên Bình";
        }
        break;
    case 10:
        if (day <= 22) {
            result = "Thiên Bình"
        } else {
            result = "Bọ Cạp";
        }
        break;
    case 11:
        if (day <= 21) {
            result = "Bọ Cạp"
        } else {
            result = "Nhân Mã";
        }
        break;
    case 12:
        if (day <= 21) {
            result = "Nhân Mã"
        } else {
            result = "Ma Kết";
        }
        break;
    default:
        break;
}
document.write("Cung hoàng đạo của bạn là: " +result);