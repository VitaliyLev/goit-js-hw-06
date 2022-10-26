// // console.dir(document);

// // const itemsEl = document.querySelector('ul');
// // console.log(itemsEl);

// // const itemsEl = document.querySelector('#categories');
// // console.log(itemsEl);

// // const itemEl = document.getElementById('categories')
// // console.log(itemEl)


// //task 1
const allItemsInUl = document.querySelectorAll('.item');

const quantityItems = allItemsInUl.length;
console.log(`Number of categories: ${quantityItems}`);

// //task 2
const allCategory = allItemsInUl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.querySelectorAll('ul li').length}`)
});

