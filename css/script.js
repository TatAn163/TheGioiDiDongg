const adressbtn = document.querySelector("#adress-form")
const adressclose = document.querySelector("#adress-close")

console.log(adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "flex"
})

adressclose.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "none"
})
// ------------------slider-product...............................//
 const rightbtntow = document.querySelector(".fa-chevron-right-two")
 const leftbtntwo = document.querySelector(".fa-chevron-right-two")
 const imgNubertwo = document.querySelectorAll(".slider-product-one-content-items")
//  console.log(rightbtntow)
//  console.log(leftbtntwo)
 rightbtntow.addEventListener ("click", function(){
    index = index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
 })
 leftbtntwo.addEventListener (".click", function(){
    index = index-1
    if(index<=0){
        index=imgNubertwo.lenght-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
 })
 