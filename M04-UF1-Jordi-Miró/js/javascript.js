// function checkValues() {

//     // Get the data from each element on the form.
//     const name = document.getElementById('txtName');
//     const surname = document.getElementById('txtSurname');
//     const email = document.getElementById('txtEmail');
//     const tel = document.getElementById('txtTel');
//     const asunto = document.getElementById('txtAsunt');
//     const msg = document.getElementById('msg');
    
//     let txt;
//     if(document.getElementById('txtName').validity.valueMissing || document.getElementById('txtEmail').validity.valueMissing || document.getElementById('msg').validity.valueMissing){
//         txt = "ERROR: name, email and message must be complete";
//     }else{
//         txt="Request has been send correctly!"
//     }
//     document.getElementById('checked').innerHTML = txt;
// }