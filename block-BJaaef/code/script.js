
let rootElement = document.querySelector('ul');
got.houses.forEach((house)=>{
    house.people.forEach((person)=>{
    
    let li = document.createElement('li');
    li.classList.add('li');

    let div = document.createElement('div');
    div.classList.add('people-info');

    let insideDiv = document.createElement('div');
    insideDiv.classList.add('profile');

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = person.image;

    let span = document.createElement('span');
    span.classList.add('span');
    span.innerText = person.name;
    
    insideDiv.append(img,span);

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = person.description;

    let a = document.createElement('a');
    a.href = '#';
    a.classList.add('learn-more-link');
    a.innerText = 'Learn More!';

        //append
        div.append(insideDiv, p, a);
        li.append(div);
        rootElement.append(li);
    })
})