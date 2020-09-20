const contactsList = document.getElementById('contactsList');

let contactsArray = JSON.parse(localStorage.getItem('contacts'));
contactsArray.sort(function(a, b){
    if(a.name < b.name)
        return -1;
    if(a.name < b.name)
        return 1;
    return 0;
});

console.log(contactsArray);

for(let i = 0; i < contactsArray.length; i++){
    contactsList.innerHTML += `
    <div class='contact'>
        <h5>${contactsArray[i].name}</h5>
        <div>${contactsArray[i].address}</div>
        <div>${contactsArray[i].phone}</div>
    </div>
    `
}