var button = document.getElementById('button');
var pass_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})");

button.addEventListener('click', () => {
    var password = document.getElementById('password').value;
    
    if (password.match(pass_regex)) {
        return true;
    } else {
        return false;
    }
    e.preventdefault;
})