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
            Thành tiền
            <div class="cart__subtotal-money"></div>
        </div>

        <footer class="cart__footer">
            <button>Xem giỏ hàng</button>
        </footer>
    `
}

export const cartViewPage = () => {
    return `
        <div class="cart__container"></div>
    `
}

export const addProductCart = (arrCart) => {
    return arrCart.map((item, index) => {
        return `
            <div class="cart__product">
                <img src="./assets/img/products/${item.img}" alt="">
                <div class="cart__product-infor">
                    <div class="cart__product-name">${item.name}</div>
                    <div class="cart__product-price">
                        ${item.newPrice}
                        <span>đ</span>
                    </div>
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