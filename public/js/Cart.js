'use strick'

export const cartView = () => {
    return `
        <div class="cart__header">
            <div class="cart-close">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <span>Cart</span>
        </div>

        <div class="cart__container"></div>

        <div class="cart__subtotal">
            Subtotal
            <div class="cart__subtotal-money"></div>
        </div>

        <footer class="cart__footer">
            <a href="cart.html"><button>View Cart</button></a>
        </footer>
    `
}

export const addProductCart = (arrCart) => {
    return arrCart.map((item, index) => {
        return `
            <div class="cart__product">
                <img src="./public/img/products/${item.img}" alt="">
                <div class="cart__product-infor">
                    <div class="cart__product-name">${item.name}</div>
                    <div class="cart__product-price">$${item.newPrice}</div>
                    <div class="cart__product-quantity">
                        <div class="cart__product-reduce">-</div>
                        ${item.quantity}
                        <div class="cart__product-increase">+</div>
                    </div>
                </div>
                <div class="cart__product-del"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        `
    }).join("")
}