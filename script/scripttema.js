let trilho = document.getElementById('trilho')
let header = document.querySelector('header')
let body = document.querySelector('body')
let footer = document.querySelector('footer')
let main = document.querySelector('main')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    header.classList.toggle('dark')
    body.classList.toggle('dark')
    footer.classList.toggle('dark')
    main.classList.toggle('dark')
})