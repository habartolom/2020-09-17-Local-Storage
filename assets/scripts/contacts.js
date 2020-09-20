const contactsList = document.getElementById('contactsList');

let contactsArray = JSON.parse(localStorage.getItem('contacts'));
if(contactsArray != null){
    contactsArray.sort(function(a, b){
        if(a.name < b.name)
            return -1;
        if(a.name < b.name)
            return 1;
        return 0;
    });
    
    for(let i = 0; i < contactsArray.length; i++){
        contactsList.innerHTML += `
            <tr>
                <th scope="row">${i+1}</th>
                <td>${contactsArray[i].name}</td>
                <td>${contactsArray[i].address}</td>
                <td>${contactsArray[i].phone}</td>
            </tr>
        `
    }
}