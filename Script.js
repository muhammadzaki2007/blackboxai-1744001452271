function SMS(){


    var name = document.getElementById('name');
    var email = document.getElementById('email')
    var message = document.getElementById('message');

    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value); 
}
SMS()

  