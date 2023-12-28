window.addEventListener(("scroll"),()=>{
    document.querySelector(".backMountain").style.marginTop = `${window.scrollY}px`
    document.querySelector(".Home h1").style.marginTop = `${window.scrollY * 1.7}px`
    document.querySelector(".rightCloud").style.marginRight = `-${window.scrollY * .7}px`
    document.querySelector(".rightCloud-2").style.marginRight = `-${window.scrollY}px`
    document.querySelector(".leftCloud").style.marginLeft = `-${window.scrollY}px`
})