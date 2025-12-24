let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyy62UADS0fuFXvYtV3_h7n5lo3oXpmfPrT3z0VG64DurSNl7ssf1F1maJhNkR7FdwB7w/exec'
const form = document.forms['porto-fsfhlil-contsct-form']
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Tambah loading animation
    submitBtn.classList.add('loading');
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        
        // Hapus loading animation
        submitBtn.classList.remove('loading');
        
        // Tampilkan success message
        successMessage.classList.add('show');
        
        // Reset form
        form.reset();
        
        // Sembunyikan success message setelah 5 detik
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        
        // Hapus loading animation
        submitBtn.classList.remove('loading');
        
        // Tampilkan error
        alert('Failed to send message: ' + error.message);
    })
})

