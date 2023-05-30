var mang = [];

function themmoi(){
    var tendm = document.getElementById("tendm").value;
    mang.push(tendm);
    // console.log(mang)
    document.getElementById("result1").innerHTML = mang ;
    
}

// 5. TÌM SÓ CHẴN CUỐI CÙNG
function btn5 () {
    alert('còn câu 1 4 6 em chưa làm. hehe!')
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
