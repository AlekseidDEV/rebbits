"use strict"

const numberBlock = document.querySelector('.square-body')
const childElemnt = numberBlock.querySelectorAll('.block')
const btnReset = document.querySelector('.btn-reset')

let prev = 0
let next = 0

const changetab = (prev, next) => {
    if (next <= childElemnt.length - 1 && next >= 0) {
        const numbBlockPrev = childElemnt[prev].querySelector('.block-number')
        const numbBlockNext = childElemnt[next].querySelector('.block-number')

        let textPrev = numbBlockPrev.textContent
        let textNext = numbBlockNext.textContent

        numbBlockPrev.textContent = textNext
        numbBlockNext.textContent = textPrev
    }
}

const getValue = (targetPanel, arrow) => {
    childElemnt.forEach((elem, index) => {
        if (arrow === 'top' && targetPanel === elem) {
            prev = index
            next = prev - 5

            changetab(prev, next)
        } else if (arrow === 'bottom' && targetPanel === elem) {
            prev = index
            next = prev + 5

            changetab(prev, next)
        } else if (arrow === 'left' && targetPanel === elem) {
            prev = index
            next = prev - 1

            changetab(prev, next)
        } else if (arrow === 'right' && targetPanel === elem) {
            prev = index
            next = prev + 1

            changetab(prev, next)
        }
    })
}

const resetRabbit = () => {
    childElemnt.forEach((elem, index) => {
        const blockText = elem.querySelector('.block-number')

        blockText.textContent = index + 1
    })
}

btnReset.addEventListener('click', resetRabbit)
numberBlock.addEventListener('click', (e) => {
    if (e.target.closest('.block') && e.target.closest('.arrow')) {
        getValue(e.target.closest('.block'), e.target.closest('.arrow').classList[1])
    }
})