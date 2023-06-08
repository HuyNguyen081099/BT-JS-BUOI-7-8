var mang = [];

function themmoi() {
    var tendm = document.getElementById("tendm").value;
    mang.push(tendm);
    // console.log(mang)
    document.getElementById("result1").innerHTML = mang;

}



//1. tổng số dương
function btn1() {
    alert('còn câu 6, 7 em chưa làm xong. hehe!')
    var sum = 0
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] >= 0) {
            sum += parseInt(mang[i]);
        }
    }

    document.getElementById('result2').innerHTML = sum
}
//2. đếm số dương
function btn2() {
    var dem = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] >= 0) {
            dem++
        }
    }

    document.getElementById('result3').innerHTML = dem
}
// 3.tìm số nhỏ nhất trong mảng
function btn3() {

    var minInNumbers = Math.min.apply(Math, mang);

    document.getElementById('result4').innerHTML = minInNumbers

}
//4. tìm số dương nhỏ nhất
function btn4() {
    var min = -1;
    var i;
    for (i = 0; i < mang.length; i++) {
        if ((min == -1 || min > mang[i]) && mang[i] > 0) {
            min = mang[i];
        }
    }
    document.getElementById('result5').innerHTML = min
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

//7. sắp xếp tăng dần 
function btn7() {
    for (var i = 0; i < mang.length - 1; i++) {
        for (var j = i + 1; j < mang.length; j++) {
            if (mang[i] > mang[j]) {
                var tmp = parseInt(mang[i]);

                mang[i] = mang[j]
                mang[j] = tmp
            }
        }
    }
    document.getElementById('result8').innerHTML = mang
}

//8. tìm số nguyên tố đầu tiên
function btn8() {
    var kq = -1
    for (var i = 0; i < mang.length; i++){
        if (mang[i] == 1) {
            kq = mang[i]
    }
    document.getElementById('result9').innerHTML = kq
}
}


//9. đếm số nguyên
function btn9() {
    var length = mang.length
    document.getElementById('result10').innerHTML = length
}
//10. so sánh âm và dương
function btn10() {
    var sosanh = document.getElementById('sosanh');
    var dem = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] >= 0) {
            dem++
        }
    }
    var med = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] < 0) {
            med++
        }
    }
    if(dem > med) {
        sosanh = ">"
    }else if( dem = med){
        sosanh = "="
    } else {
        sosanh = "<"
    }

    document.getElementById('result11').innerHTML ='số dương: '+dem +' '+sosanh+' ' +'số âm: '+ med

}