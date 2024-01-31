function ktr(){
    while(true){
        var a = prompt("Hãy nhập số vào");
        var word = Math.round(Math.random());
        if(parseInt(a) === word){
            alert("Bạn đã nhập đúng");
            break;
        }
        else{
            alert("Bạn đã nhập sai vui lòng nhập lại");
        }
    }
}
ktr();