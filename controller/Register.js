document.querySelector('#register-button').onclick =function(){
    var user = new User();
    user.email=document.querySelector('#email').value;
    user.password=document.querySelector('#password').value;
    user.name=document.querySelector('#name').value;



    var ele = document.getElementsByName('gender');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        user.gender=ele[i].value;
     
    }
    user.phone=document.querySelector('#phone').value;


    var passwordconfirm =document.querySelector('#password-confirm').value;
    console.log(user.gender);

      /* -------------------- Validation: Kiểm tra rỗng -------------------- */
      var valid = true;

      valid = validation.kiemTraRong(user.email,'err-required-email','Email')
       & validation.kiemTraRong(user.password,'err-required-password','Password')
       & validation.kiemTraRong(user.name,'err-required-name','Name')
       & validation.kiemTraRong(user.phone,'err-required-phone','Phone')
       & validation.kiemTraRong(user.gender, 'err-required-gender','Gender')
       & validation.kiemTraRong(passwordconfirm,'err-required-confirmpassword','PassWord Confirm')
    & validation.kiemTraPasswordConfirm(user.password,passwordconfirm);
console.log(validation.kiemTraPasswordConfirm(user.password,passwordconfirm));
     //kiểm tra email
     valid &= validation.kiemTraEmail(user.email,'err-email','Email');
      //Kiểm tra ký tự
    valid &= validation.kiemTraKyTu(user.name,'err-name','Tên người dùng');
     //Kiểm tra tất cả là số;
     valid &= validation.kiemTraSo(user.phone,'err-phone','Số điện thoại!');
       if (!valid) {
        return;
    }
        var promise = axios({
            url:'https://shop.cyberlearn.vn/api/Users/signup',
            method:'POST',
            data:user
            
        })
    
        promise.then(function(res){
            console.log(res.data.content)

        })
        
        promise.catch(function(err){
            console.log(err)
        })
   
    
    
      

       
    

 
     
}

