'use strick'

// show filter
const filterHead = document.querySelectorAll('.ctn__product-filter-head')
const btnShow = document.querySelectorAll('.btn-show')
const filterItem = document.querySelectorAll('.ctn__product-filter-item')

filterHead.forEach((item, index) => {
    item.onclick = () => {
        console.log(item);
        btnShow[index].classList.toggle('show')
        filterItem[index].classList.toggle('displayEnabledBlock')
    }
})


// price range
const rangeInput = document.querySelectorAll('.price__range-input input')
const priceInput = document.querySelectorAll('.price__input input')
const progress = document.querySelector('.price__slider .price__progress')

let priceGap = 1000

priceInput.forEach((item, index) => {
    item.addEventListener('input', e => {
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value)

        if((maxVal - minVal >= priceGap) && maxVal <= 10000) {
            if(e.target.className === 'price__input-min') {
                rangeInput[0].value = minVal
                progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
            }
            else {
                rangeInput[1].value = maxVal
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
            }
        }
    })
})

rangeInput.forEach((item, index) => {
    item.addEventListener('input', e => {
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value)

        if(maxVal - minVal < priceGap) {
            if(e.target.className === 'price__range-min') {
                rangeInput[0].value = maxVal - priceGap
            }
            else {
                rangeInput[1].value = minVal + priceGap
            }
        }
        else {
            priceInput[0].value = minVal
            priceInput[1].value = maxVal
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
        }
    })
})

// sort
const ctnProductSort = document.querySelector('.ctn__product-sort')
const btnShowSort = document.querySelector('.btn-show-sort')

ctnProductSort.onclick = () => {
    btnShowSort.classList.toggle('rotate180')
    document.querySelector('.ctn__product-sort-list').classList.toggle('displayEnabledBlock')
}

const ctnProductSortItem = document.querySelectorAll('.ctn__product-sort-item')

const sortName = ['Sort by','Newest','Price (low to high)','Price (high to low)','Name A-Z','Name Z-A']

ctnProductSortItem.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.ctn__product-sort-name').innerHTML = `${sortName[index]}`
    }
})