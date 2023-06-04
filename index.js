var mang = [];

function themmoi() {
    var tendm = document.getElementById("tendm").value;
    mang.push(tendm);
    // console.log(mang)
    document.getElementById("result1").innerHTML = mang;

}



//1. tổng số dương
function btn1() {
    alert('còn câu 2 4 6 10 em chưa làm. hehe!')
    var sum = 0
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] >= 0) {
            sum += parseInt(mang[i]);
        }
    }

    document.getElementById('result2').innerHTML = sum
}
// 3.tìm số nhỏ nhất trong mảng
function btn3() {

    var minInNumbers = Math.min.apply(Math, mang);

    document.getElementById('result4').innerHTML = minInNumbers

}
// 5. TÌM SÓ CHẴN CUỐI CÙNG
function btn5() {
    var tong = 0
    var lastnumber = -1
    for (var i = mang.length - 1; i >= 0; i--) {
        tong += parseInt(mang[i]);
        if (mang[i] % 2 === 0) {
            lastnumber = (mang[i]);
            break
        }
    }
    document.getElementById('result6').innerHTML = lastnumber

}

//7. tìm số nguyên tố đầu tiên
function btn7() {
    document.getElementById('result8').innerHTML = mang[0]

}

//8. sắp xếp tăng dần 
function btn8() {
    for (var i = 0; i < mang.length - 1; i++) {
        for (var j = i + 1; j < mang.length; j++) {
            if (mang[i] > mang[j]) {
                var tmp = mang[i]

                mang[i] = mang[j]
                mang[j] = tmp
            }
        }
    }
    document.getElementById('result9').innerHTML = mang
}

//9. đếm số nguyên
function btn9() {
    var length = mang.length
    document.getElementById('result10').innerHTML = length
}

