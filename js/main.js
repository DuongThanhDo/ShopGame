
'use strick'

import { 
    cartView,
    cartViewPage,
    addProductCart 
} from './Cart.js';
import { arrProduct } from './data.js'
import { 
    addProductPage 
} from './Products.js'

// localStorage --------------
const deleteLocalStorage = () => {
    const tempArr = []
    const tempArrText = JSON.stringify(tempArr, undefined, 4)
    localStorage.setItem('arrCart', tempArrText)
}

if(localStorage.getItem('arrCart') == undefined) {
    const tempArr = []
    const tempArrText = JSON.stringify(tempArr, undefined, 4)
    localStorage.setItem('arrCart', tempArrText)
}

const getArrCart = () => {
    const arrCartText = localStorage.getItem('arrCart')
    const arr = JSON.parse(arrCartText, undefined, 4)
    return arr
}

const setArrCart = (arr) => {
    const arrCartText = JSON.stringify(arr, undefined, 4)
    localStorage.setItem('arrCart', arrCartText)
}

const setItemArrCart = (item) => {
    const arrCart = getArrCart()
    arrCart.push(item)
    const arrCartText = JSON.stringify(arrCart, undefined, 4)
    localStorage.setItem('arrCart', arrCartText)
}

// .......................................................
export const arrTypeProduct = (arr, type) => {
    const arrTemp = []
    arr.forEach((item) => {
        if(item.type === type) {
            arrTemp.push(item)
        }
    })
    return arrTemp
}

const ctnShowList = document.querySelectorAll('.ctn__show-list')
const copyArr = arrProduct.slice(0, 6)
const copyArrGame = arrTypeProduct(arrProduct, 'game').slice(0, 6)
console.log(ctnShowList);
if(ctnShowList.length != 0) {
    ctnShowList[0].innerHTML = addProductPage(copyArr)
    ctnShowList[1].innerHTML = addProductPage(copyArrGame)
}


const cartOpen = document.querySelector('.cart-open')
const btnCart = document.querySelector('.cart')
const btnCartPage = document.querySelector('.cart-page')

// Hiển thị Cart
const displayCart = () => {
    btnCart.classList.remove('hidden')
}

btnCart.innerHTML = cartView()
btnCartPage.innerHTML = cartViewPage()
console.log(cartOpen);
cartOpen.onclick = () => {
    displayCart()
}

// ẩn cart
const cartClose = document.querySelector('.cart-close')
console.log(cartClose);
cartClose.onclick = () => {
    btnCart.classList.add('hidden')
}

// giảm số lượng sản phẩm
const reduceQuantityProduct = () => {
    const btnReduceQuantityProduct = document.querySelectorAll('.cart__product-reduce')
    const arrCart = getArrCart()
    btnReduceQuantityProduct.forEach((btn, index) => {
        btn.onclick = () => {
            console.log(index);
            if(index + 1 > arrCart.length)
                if(arrCart[index-arrCart.length].quantity > 1){
                    arrCart[index-arrCart.length].quantity--
                    setArrCart(arrCart)
                    UD_product()
                }
            else {
                if(arrCart[index].quantity > 1){
                    arrCart[index].quantity--
                    setArrCart(arrCart)
                    UD_product()
                }
            }
        }
    })
}

// tăng số lượng sản phẩm
const increaseQuantityProduct = () => {
    const btnIncreaseQuantityProduct = document.querySelectorAll('.cart__product-increase')
    const arrCart = getArrCart()
    btnIncreaseQuantityProduct.forEach((btn, index) => {
        btn.onclick = () => {
            if(index + 1 > arrCart.length) arrCart[index-arrCart.length].quantity++
            else arrCart[index].quantity++
            setArrCart(arrCart)
            UD_product()
        }
    })
}

// delete sản phẩm trong cart
const delProduct = () => {
    const btnDelProduct = document.querySelectorAll('.cart__product-del')
    const arrCart = getArrCart()
    btnDelProduct.forEach((btn, index) => {
        btn.onclick = () => {
            if(index + 1 > arrCart.length) arrCart.splice(index-arrCart.length, 1)
            else arrCart.splice(index, 1)
            setArrCart(arrCart)
            UD_product()
        }
    })
}

// tổng tiền sản phẩm trong cart
const sumMoney = () => {
    var SumMoney = 0
    const arrCart = getArrCart()
    arrCart.forEach((item, index) => {
        SumMoney += (item.newPrice * item.quantity)
    })
    return SumMoney
}

// Update cart
const UD_product = () => {
    const cartContainer = document.querySelectorAll('.cart__container')
    const countProduct = document.querySelector('.ctn__cart-bill-total')
    const arrCart = getArrCart()

    if(arrCart.length <= 0) {
        cartContainer.forEach(item => {
            item.innerHTML = `${`<p class="cart_no-product">Không có sản phẩm</p>`}`
        })
    }else {
        cartContainer.forEach(item => {
            item.innerHTML = addProductCart(arrCart)
        })
    }
    reduceQuantityProduct()
    increaseQuantityProduct()
    delProduct()
    const cartSubtotalMoney = document.querySelectorAll('.cart__subtotal-money')
    cartSubtotalMoney.forEach(item => {
        item.textContent = `${sumMoney()} VNĐ`
    })
    countProduct.textContent = arrCart.length
}
UD_product()

//Thêm sản phẩm vào cart

export const funAddToCart = () => {
    const addToCart = document.querySelectorAll('.addtocart')
    addToCart.forEach((button, index) => {
        button.onclick = (event) => {
            var idProductItem = event.target.parentElement.id
            const arrCart = getArrCart()
            var check = true
            arrProduct.forEach((btn, index) => {
                if(btn.id === parseInt(idProductItem)) {
                    arrCart.forEach((item, index) => {
                        if(item.id === parseInt(idProductItem)) {
                            item.quantity++
                            setArrCart(arrCart)
                            check = false
                        }
                    })
                    if(check) {
                        setItemArrCart(btn)
                    }
                    UD_product()
                    displayCart()
                }
            })
        }
    })
}
funAddToCart()

const viewCart = document.querySelector('.cart__footer button')
console.log(viewCart);
viewCart.onclick = () => {
    const noCart = document.querySelector('.no-Cart')
    const isCart = document.querySelector('.is_cart')
    
    noCart.classList.add('displayDisabled')
    isCart.classList.remove('displayDisabled')
    
    btnCart.classList.add('hidden')
    
    headerNavbar.classList.remove('display')
}

// mobile
const listNavbarMobile = document.querySelector('.header_navbar-not-pc')
const headerNavbar = document.querySelector('.header__navbar')
const listHaederNavbar = document.querySelector('.header__navbar-list')
console.log(listNavbarMobile);

listNavbarMobile.onclick = () => {
    headerNavbar.classList.add('display')
}

listHaederNavbar.onclick = (event) => {
    event.stopPropagation();
}

headerNavbar.onclick = () => {
    headerNavbar.classList.remove('display')
}