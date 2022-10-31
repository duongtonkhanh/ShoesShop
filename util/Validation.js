var validation ={
    kiemTraRong: function (value,errId,name){
        if(value.trim()===''){
            document.getElementById(errId).style.display='block';
            document.getElementById(errId).innerHTML = `${name} không được bỏ trống !`;
            console.log( document.getElementById(errId).innerHTML = `${name} không được bỏ trống !`);
            return false;
        }

        
        document.getElementById(errId).style.display='none';
        return true;
    },

    kiemTraPasswordConfirm: function(password,passwordconfirm){
        if(! (password === passwordconfirm) ){
            document.getElementById('err-confirm-password').style.display='block';
            document.getElementById('err-confirm-password').innerHTML = `Xác nhận mật khẩu không trùng nhau`;
            return false;
        }
        document.getElementById('err-confirm-password').style.display='none';
        return true;
    },
    kiemTraEmail: function(value, errId,name) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = 'Email không hợp lệ!';
        return false;
    },
    kiemTraSo: function(value,errId,name) {
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)){
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `${name} Yêu cầu nhập số!`;
        return false;
    },
    kiemTraKyTu: function (value,errId,name) {
        console.log(value);
        var regexLetter = /^[A-Z a-z]+$/;
        if(regexLetter.test(value)){
            document.getElementById(errId).style.display='none';
            return true;
        }

        document.getElementById(errId).style.display='block';
        document.getElementById(errId).innerHTML = `${name} phải là ký tự!`;
        return false;
    },
   
}