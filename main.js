const item = document.querySelector('.item');
const placeholder = document.querySelector('.placeholder-wrapper');

// console.log(item);
// console.log(placeholder);

item.addEventListener('dragstart', dragStar);
item.addEventListener('dragend', dragEnd)



// взял 'Перетащи меня' + добавили hold
function dragStar(e) {
    console.log(dragStar);
    console.log(e);
    e.target.classList.add('hold')
    //чтобы не отрабатывало сразу скрытие элемента
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
}

// отпустил 'Перетащи меня' + добавили item
function dragEnd(e) {
    console.log(dragEnd);
    console.log(e);
    e.target.className = 'item'
}


// куда приводим элемент
placeholder.addEventListener('dragover', dragOver)
placeholder.addEventListener('dragleave', dragLeave)
placeholder.addEventListener('dragenter', dragEnter)
placeholder.addEventListener('drop', dragDrop)

// в полосе
function dragOver(e) {
    e.preventDefault()
    // если не вписать то не сработает dragDrop
    // console.log('dragOver');
    // console.log(e);
    console.log(e.target);
    if (e.target.classList.contains('placeholder')) {
        e.target.classList.remove('hovered')
        // console.log(123);
    }
}

// как вывели за полосу на половину
function dragLeave(e) {
    // console.log('dragLeave');
    // console.log(e);

}

// если вышел из черты потом опять зашел в черту
function dragEnter(e) {
    // console.log('dragEnter');
    // console.log(e);
     e.target.classList.contains('placeholder');
    if (e.target.classList.contains('placeholder')) {
        console.log(this);
        changeClass(this, 'add')
    }
}

// когда отпустили , e.preventDefault() - это обяз. вписать
function dragDrop(e) {
    //     console.log('dragDrop');
    //     console.log(e);
    if (e.target.classList.contains('placeholder')) {
        e.target.append(item)
        
        changeClass(this, 'remove')
    }
}

//добавл. и удал. класс
function changeClass (parent, operation) {
const placeholders = parent.children
Array.from(placeholders).forEach(el => {
    operation === 'remove' ?
    el.classList.remove('hovered') : el.classList.add('hovered')
})
console.log(placeholders);
}