document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="pass"]').value;
    
    if (username === 'admin' && password === 'password') {
        alert('Login berhasil');
    } else {
        alert('Login gagal');
    }
    // Reset form
    this.reset();
});