let year = prompt("Mời bạn nhập năm bạn cần kiểm tra>> ");
if (year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            console.log("Năm bạn nhập là năm nhuận");
        } else {
            console.log("Năm bạn nhập không phải là năm nhuận");
        }
    } else {
        console.log("Năm bạn nhập là năm nhuận");
    }
    } else {
        console.log("Năm bạn nhập không phải là năm nhuận");
    }