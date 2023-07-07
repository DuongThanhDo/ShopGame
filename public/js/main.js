'use strick'

import { 
    cartView,
    addProductCart 
} from './Cart.js';
import { arrProduct } from './data.js'
import { 
    ctnProductList,
    ctnHeaderName,
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

const cartOpen = document.querySelector('.cart-open')
const btnCart = document.querySelector('.cart')
// Hiển thị Cart
const displayCart = () => {
    btnCart.classList.remove('hidden')
}

btnCart.innerHTML = cartView()
console.log(cartOpen);
cartOpen.onclick = () => {
    console.log('hi');
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
            if(arrCart[index].quantity > 1){
                arrCart[index].quantity--
                setArrCart(arrCart)
                UD_product()
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
            arrCart[index].quantity++
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
            arrCart.splice(index, 1)
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
    const cartContainer = document.querySelector('.cart__container')
    const arrCart = getArrCart()

    if(arrCart.length <= 0) {
        cartContainer.innerHTML = `${`<p style="color: #fff;margin: 240px 0 0 100px">Không có sản phẩm</p>`}`
    }else {
        cartContainer.innerHTML = addProductCart(arrCart)
    }
    reduceQuantityProduct()
    increaseQuantityProduct()
    delProduct()
    const cartSubtotalMoney = document.querySelector('.cart__subtotal-money')
    cartSubtotalMoney.innerHTML = `$${sumMoney()}`
}
UD_product()

// thêm sản phẩm vào cart

const funAddToCart = () => {
    const addToCart = document.querySelectorAll('.addtocart')
    console.log(addToCart);
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

// add product on product page
const btnHeaderProductItemP = document.querySelectorAll('.header__product-item')

// if(ctnHeaderName != null) {
//     ctnHeaderName.textContent = `TẤT CẢ`
//     ctnProductList.innerHTML = addProductPage(arrProduct)
    
//     funAddToCart()
// }

btnHeaderProductItemP.forEach((item, index) => {
    item.onclick = (event) => {
        const classHeaderProductItem = item.classList[item.classList.length - 1]
        console.log(classHeaderProductItem);
        switch (classHeaderProductItem) {
            case 'all':
                setTimeout(() => {
                    ctnHeaderName.textContent = `TẤT CẢ`
                }, 200);
                ctnProductList.innerHTML = addProductPage(arrProduct)
                break;
            case 'game':
                setTimeout(() => {
                    ctnHeaderName.textContent = `TRÒ CHƠI`
                }, 200);
                ctnProductList.innerHTML = addProductPage(arr)
                break;
            case 'console':
                setTimeout(() => {
                    ctnHeaderName.textContent = `BẢNG ĐIỀU KHIỂN`
                }, 200);
                ctnProductList.innerHTML = addProductPage(arr)
                break;
            case 'controller':
                setTimeout(() => {
                    ctnHeaderName.textContent = `BỘ ĐIỀU KHIỂN`
                }, 200);
                ctnProductList.innerHTML = addProductPage(arr)
                break;
            case 'accessories':
                setTimeout(() => {
                    ctnHeaderName.textContent = `PHỤ KIỆN`
                }, 200);
                ctnProductList.innerHTML = addProductPage(arr)
                break;
            default:
                break;
        }
        funAddToCart()
    }
})

const arrTypeProduct = (arr, type) => {
    const arrTemp = []
    arr.forEach((item) => {
        if(item.type === type) {
            arrTemp.push(item)
        }
    })
    return arrTemp
}

// const testgame = document.querySelectorAll('.header__product-item')
// testgame.forEach((item, index) => {
//     console.log(item.classList[item.classList.length - 1]);
// })
