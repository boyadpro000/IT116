// console.dir(document.domain);




// console.log(document.URL);




// console.log(document.title);




// console.log(document.doctype);




// console.log(document.head);




// console.log(document.body);




// console.log(document.all);




// console.log(document.all[13]);




// document.all[10].textContent = "We just changed the header"





// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);






// // access the DOM with GETELEMENTBYID

// console.log(document.getElementById('header-title'));

// console.log(document.form);

// console.log(document.links);

// console.log(document.images);






// // Get element by ID//

// console.log(document.getElementById('header-title'));





// // Creation of an object variable using the document function. 

// let headerTitle = document.getElementById('header-title')






// //
// headerTitle.textContent = "Im changing the header"
// headerTitle.innerText = "Im changing it again"

// headerTitle.style.color = 'hotpink'

// // ////////////////////////////////////////////





// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);

// items[1].textContent = "Hello World! Number 2"
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'pink';
// items[1].textContent = "burger";
// items[1].style.color = 'green';


// items[0].textContent = "Hello World! Number 1"
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'green';
// items[0].textContent = "pizza";
// items[0].style.color = 'white';


// items[2].textContent = "Hello World! Number 3"
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'lightblue';
// items[2].textContent = "tacos";
// items[2].style.color = 'black';





// //counter that loops till 10

// for (let i = 1; i <= 10; i++){

// console.log(i)



// } 





// //counter that counts by two 
// for (let i = 1; i <=20; i +=2) {

// console.log(i);



// }

// //counter that counts down by 2 from a 100 to 0 
// for (let i = 100; i>=0; i-=2 ){

// console.log(i);

// }


// for (var i=0; i < items.length; i++ ){

//     items[i].style.backgroundColor= 'grey';
//     items[i].textContent='I changed the list';
//     items[i].style.color='green';
// }



// const myDiamonds = ['Snacky', 'Scary', 'Picky', 'Pinchie', 'Lily', 'Nibbles', 'IttyBitty', 'Lanky', 'Kibbles'];


// for (let i = 0; i < myDiamonds.length; i++){

//     console.log(i, myDiamonds[i]);

// }



// get element by tag name // 


// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = "Hello 2";

// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'crimson';
// li[1].style.color = 'white';


// for(var i = 0; i < li.length; i++){

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Changed Content';

// }

/////////////////////////////////////////////
//// QUERY SELECTOR///////////////////

// var header = document.querySelector('#main-header');


// header.style.borderBottom = 'solid 4px hotpink';

// var input = document.querySelector('input');
// input.value = 'Changed The Input Box Text';

// var submit = document.querySelector("input[type='submit']");

// submit.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';


///////////////////////////////////////////////////////////////////////////
/////QuerySelectorAll////////////////////////////


var titles = document.querySelectorAll('.title')

console.log(titles);

titles[0].textContent = 'hello Monte';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

//odd 
for( var i = 0; i <odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';

}