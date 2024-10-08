const bar = document.querySelector('svg')
const sideBar = document.querySelector('ul')
// sideBar.style.right = '-260px'

bar.addEventListener('click', ()=>{
    console.log(sideBar.style.cssText);
    if(sideBar.style.cssText === 'right: 0px;' ){
        sideBar.style.right = '-260px'
    } else if(sideBar.style.cssText === 'right: -260px;'){
        sideBar.style.right = '0'

    }
    
})
