const mcd = document.getElementById("mcd-address")
const p1 = document.getElementById("price1")
const p2 = document.getElementById("price2")
const p3 = document.getElementById("price3")
const mcdDel = document.getElementById("McD-del-time")
const mcdZomato = document.getElementById("servName1")
const mcdZomDelFee = document.getElementById("delFee1")
const mcdZomOffer = document.getElementById("1offer")
const mcdSwgy = document.getElementById("servName2")
const mcdSwgyDelFee = document.getElementById("delFee2")
const mcdSwgyOffer = document.getElementById("2offer")
const mcdUbr = document.getElementById("servName3")
const mcdUbrDelFee = document.getElementById("delFee3")
const mcdUbrOffer = document.getElementById("3offer")

fetch("http://localhost:3050/getResto")
.then(res => res.json())
.then(data => {
    console.log(data)
    mcd.textContent = data.McD.address
    mcdDel.textContent = data.McD.delTime
    mcdZomato.textContent = data.McD.delSrv[0].srvName
    mcdZomDelFee.textContent = data.McD.delSrv[0].delFee
    
    try {
        mcdZomOffer.textContent = `On a minimum cart value of ${data.McD.delSrv[0].offer.minCartVal}, get a discount of ${data.McD.delSrv[0].offer.discntPrcnt} up to Rs ${data.McD.delSrv[0].offer.maxDiscnt}.`
      }
      catch(err) {
      }

    mcdSwgy.textContent = data.McD.delSrv[1].srvName
    mcdSwgyDelFee.textContent = data.McD.delSrv[1].delFee
    try {
        mcdSwgyOffer.textContent = `On a minimum cart value of ${data.McD.delSrv[1].offer.minCartVal}, get a discount of ${data.McD.delSrv[1].offer.discntPrcnt} up to Rs ${data.McD.delSrv[1].offer.maxDiscnt}.`
      }
      catch(err) {
      }

    mcdUbr.textContent = data.McD.delSrv[2].srvName
    mcdUbrDelFee.textContent = data.McD.delSrv[2].delFee
    try {
        mcdUbrOffer.textContent = `On a minimum cart value of ${data.McD.delSrv[2].offer.minCartVal}, get a discount of ${data.McD.delSrv[2].offer.discntPrcnt} up to Rs ${data.McD.delSrv[2].offer.maxDiscnt}.`
      }
      catch(err) {
      }
})

fetch("http://localhost:3050/getRestoMenu?restoName=McD")
.then(res => res.json())
.then(data => {
    console.log(data)
    p1.textContent = data.fries[0].price
    p2.textContent = data.mcCheese[1].price
    p3.textContent = data.mcSpicy[2].price
})