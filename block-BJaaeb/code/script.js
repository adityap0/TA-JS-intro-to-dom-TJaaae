/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(labelMessage, type='text'){
  let label = document.createElement('label');
  let input = document.createElement('input');
  input.type = type;
  label.innerText = labelMessage;
  label.append(input);
  return label;
}
createInputElm('Your name'); 

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
function createInputElm(labelMessage, type='text'){
  let html = '<label> ${labelMessage} <input type = "${type}"> </label>';
  return html;
}
// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(inputArr = [])
{
  let ul = document.createElement('ul');
  inputArr.forEach((fruit)=>
  {
    let li = document.createElement('li');
    li.innerText = fruit;
    ul.appendChild(li);
  })
  let html = ul;
  return html;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(inputArr = [])
{
  let ul = document.createElement('ul');
  inputArr.forEach((item)=>{
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerText = item.name;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked.name =" ";
    input.id = " " ;
    let span = document.createElement('span');
    if(item.isDone===false)
    {
      span.innerText = 'X';
    }
    else 
    {
      span.innerText = 'Done!';
    }
    li.appendChild(p);
    li.appendChild(input);
    li.appendChild(span);
    ul.appendChild(li);
  })
  let html = ul;
  return html;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
