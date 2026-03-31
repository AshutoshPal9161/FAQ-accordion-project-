const pulsebutton = document.querySelectorAll('.circle')

pulsebutton.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('active')
        btn.classList.toggle('iconhide')
    })
})


