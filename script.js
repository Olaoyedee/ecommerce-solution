//function for HAMBURGER


const hamburger= document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')
const navLink =document.querySelector('.link-container')

hamburger.addEventListener('click', showHamburger)
closeIcon.addEventListener('click', closeIcons)


function showHamburger(){
    
    
    hamburger.classList.add('remove-hamburger')
    navLink.classList.add('reveal-link-container')
}
function closeIcons(){
    hamburger.classList.remove('remove-hamburger')
   
 
    navLink.classList.remove('reveal-link-container')
 
    

   
}

//FUNCTION FOR SLIDING MODALS

const slideContainer = document.querySelector('.slide-container')

const bigImage = document.querySelector('.big-image')
const empty=document.querySelector('.empty')
const closeSlide = document.querySelector('.close-slide')
const next = document.querySelector('.next')
const pic = document.querySelectorAll('.pic')
const small = document.querySelectorAll('.small')
const zeroDisplay = document.querySelectorAll('.zero-display')
const small2 = document.querySelectorAll('.small2')
const prev = document.querySelector('.prev')
const mainpageslide = document.querySelector('.mainpageslide')
const arrowForward=document.querySelector('.arrow-forward')  //for mobile only
const arrowbackward=document.querySelector('.arrowbackward')  //for mobile only
// arrowForward.addEventListener('click',changeBigImage)
arrowForward.addEventListener('click', changeMobileimage)   //for mobile only
arrowbackward.addEventListener('click', switchMobileImage)   //for mobile only

function changeMobileimage(){                                                           //for mobile only
    const empty=document.querySelector('.empty')                                                            //for mobile only
                                                                
    empty.classList.remove('empty')                                                         //for mobile only
   if(empty.nextElementSibling) {                                                           //for mobile only
    empty.nextElementSibling.classList.add('empty')                                                         //for mobile only
                                                               
   }                                                            //for mobile only
   else{                                                            //for mobile only
    zeroDisplay[0].classList.add('empty')                                                           //for mobile only
   }                                                            //for mobile only
   
}    

    function switchMobileImage(){
        const empty=document.querySelector('.empty')                                                            //for mobile only
                                                                
        empty.classList.remove('empty')                                                         //for mobile only
        if(empty.previousElementSibling) {                                                           //for mobile only
        empty.previousElementSibling.classList.add('empty')                                                         //for mobile only
                                                              
   }                                                            //for mobile only
   else{                                                            //for mobile only
        zeroDisplay[3].classList.add('empty')                                                           //for mobile only
   }                           
    }                                            //for mobile only








//all event listners hereand its functions here

mainpageslide.addEventListener('click', OpenModal)
closeSlide.addEventListener('click', closeModal)

next.addEventListener('click',forwardEver)
// prev.addEventListener('click',backwardNever)


function OpenModal(){
    const slideContainer = document.querySelector('.slide-container')
    slideContainer.style.display='block'
}
function closeModal(){
    
    const slideContainer = document.querySelector('.slide-container')
    slideContainer.style.display='none'
    for(let i=0;i<small.length;i++){
        small[i].classList.remove('change')
    }
    for(let i=0;i<small2.length;i++){
        small2[i].classList.remove('change2')
    }
   
    small2[0].classList.add('change2')
    small[0].classList.add('change')
}

function forwardEver(){
    const slideForward= document.querySelector('.slideIn')
    const change=document.querySelector('.change')
    const changes=document.querySelector('.change2')
    // const changeBefore= window.getComputedStyle(change, ":before")
    slideForward.classList.remove('slideIn')
    console.log(slideForward)
    change.classList.remove('change')
    changes.classList.remove('change2')

    if(slideForward.nextElementSibling){
        slideForward.nextElementSibling.classList.add('slideIn')
    }
    else{
        pic[0].classList.add('slideIn')
        console.log(1)
    }
    if(change.nextElementSibling){
        change.nextElementSibling.classList.add('change')
    }
    else{
        small[0].classList.add('change')
        
    }
    if(changes.nextElementSibling){
        changes.nextElementSibling.classList.add('change2')
    }
    else{
        small2[0].classList.add('change2')
    }
    
   
   
}



for(let i=0;i<small2.length;i++){
    small2[i].addEventListener('click', changeBigImage )
}


   

function changeBigImage(e){
    
    const empty=document.querySelector('.empty')
    empty.classList.remove('empty')
   
   for(let i=0;i<small2.length;i++){

    if(small2[i]==e.target){
       
      console.log(zeroDisplay[i])
    //   bigImage.classList.add(zeroDisplay[i])
    //   bigImage.classList.add('empty')
    //   console.log(bigImage)
    zeroDisplay[i].classList.add('empty')
     
       
    }
}


}

// cart functionalities

const counter= document.querySelector('.counter')
const numCount= document.querySelector('.num-count')
const minus= document.querySelector('.minus')
const addCart= document.querySelector('.add-to-cart')
const add= document.querySelector('.add')
const cartInfo = document.querySelector('.cartinfo')
const price =document.querySelector('.amount')
const showCartModal =document.querySelector('.cart')
// const removecartitem = document.querySelector('.delete')




add.addEventListener('click', countUp)
minus.addEventListener('click', countDown)
addCart.addEventListener('click', addItems)
showCartModal.addEventListener('click', showUserCart)



function countUp(){
    numCount.textContent=parseInt(numCount.textContent)+1
}
function countDown(){
    
    if(numCount.textContent>0){
        numCount.textContent=numCount.textContent-1
    }
    else{
        numCount.textContent = 0
    }
}


function addItems(){
   
    counter.textContent=parseInt(counter.textContent)+parseInt(numCount.textContent)
    numCount.textContent===parseInt(numCount.textContent)
    price.textContent===parseInt(price.textContent)
    counter.textContent===parseInt(counter.textContent)
   
    let totalamount=parseInt(price.textContent) * parseInt(numCount.textContent)
    
    const div = document.createElement('div')
    div.className = 'cartdetails'
    div.innerHTML = `  <div class="thumbnail"></div>
    <div class="info">
        <p>Fall Limited Edition Sneakers</p>
        <p>$<span class="price">125</span> x <span class="itemsPicked">${numCount.textContent}</span> <span class="space">$<span class="totalprice">${totalamount}</span></span></p>
    </div>
    <div class="delete"><img src="./images/icon-delete.svg" alt=""></div>
    
</div>`
if(parseInt(numCount.textContent)){
    cartInfo.append(div)
 }
   
   
    
    if(counter.textContent){
        numCount.textContent=0
    }
    else{
        counter.textContent=parseInt(counter.textContent)+parseInt(numCount.textContent)
        
    }

    const removecartitem=div.querySelector('.delete')
    removecartitem.addEventListener('click', cartRemove)
    
    // <div class="cartinfo">
    // console.log(cartInfo)
    

}
 function showUserCart(){
  
    const cartempty=document.querySelector('.cartempty')
    const cartModal =document.querySelector('.cart-modal')
   
    const main = document.querySelector('main')
    // const checkout =document.querySelector('.submit-cart')
    main.addEventListener('click', cartoff)
    function cartoff(){
        cartModal.style.display='none'
    }
  
    
    if (counter.textContent>0){
        cartModal.style.display='block'
        cartempty.style.display='none'
        cartInfo.style.display='block'
        
        
       
        
    }
    else{
        cartModal.style.display='block'
        cartempty.style.display='block'
        cartInfo.style.display='none'
        
        
    }
    // const div = document.createElement('div')
    // div.className='submit-cart'

    // div.innerHTML=`<div class="submit-cart">Checkout</div>`
    cartInfo.append(div)
    cartInfo.remove(div)
    if(parseInt(counter.textContent)){
        cartInfo.appendChild(div)
    }

    
   
} 

const removecartitem = document.querySelector('.delete')
removecartitem.addEventListener('click', cartRemove)
function cartRemove(e) {
    counter.textContent===parseInt(counter.textContent)
    
    let parent= e.target.parentElement
    const removeMe = parent.parentElement
    
     const itemsPicked = removeMe.querySelector('.itemsPicked')
     console.log(itemsPicked)
     itemsPicked.textContent===parseInt(itemsPicked.textContent)
     counter.textContent = parseInt(counter.textContent)-parseInt(itemsPicked.textContent)
   
    cartInfo.removeChild(removeMe)
   

}





   
     
                            
                    




