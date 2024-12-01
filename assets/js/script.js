function changeTitle(){
    let title1 = document.getElementById("titolo1")
    let title2 = document.getElementById("titolo2")
    let newTitle = prompt("Inserisci il nuovo titolo")
    title1.innerText = newTitle
    title2.innerText = newTitle
}

function changeColorBackground(){
    let color = document.querySelector("#colorBackGround input").value
    document.body.style.backgroundColor = color
}

function changeAddress(){
    let address = document.querySelector("address")
    let newAddress = prompt("Scrivi il nuovo indirizzo")
    address.innerText = newAddress 
}

function ClassLink(){
    let link = document.querySelectorAll("a")

    for(let el of link){
        el.classList.add("newClassLink")
    }
}

ClassLink()

function hide(){
    let img = document.querySelectorAll("img")
    for(let i of img){
        i.classList.toggle("imgHide")
    }
}


function changeColorLink(x){
    let prices = document.querySelectorAll(".price")
    console.log(prices)
    let colorL
    let price 
    switch(x){
        case "1":
            colorL = ".colorLink .color1"
            price = prices[0]
            break
        case "2":
            colorL = ".colorLink .color2"
            price = prices[1]
            break
        case "3":
            colorL = ".colorLink .color3"
            price = prices[2]
            break
        case "4":
            colorL = ".colorLink .color4"
            price = prices[3]
            break       
        case "5":
            colorL = ".colorLink .color5"
            price = prices[4]
            break   

    }
    let valueColor = document.querySelector(colorL).value
    price.style.color = valueColor


}