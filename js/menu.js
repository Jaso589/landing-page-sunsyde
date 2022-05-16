export default function Menu(btn, nav, links){

    document.addEventListener('click', e =>{
        if(e.target.matches(btn) || e.target.matches(`${btn}`)){
            document.querySelector(nav).classList.toggle('is-active')
        }
        if(e.target.matches(links)){
            document.querySelector(nav).classList.remove('is-active')
        }
    })
}