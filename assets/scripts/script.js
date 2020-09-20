const contactForm = document.getElementById('contactForm');
let contactsArray = [];

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('inputName').value;
    let address = document.getElementById('inputAddress').value;
    let phone = document.getElementById('inputPhone').value;

    const contact = {
        name: name,
        address: address,
        phone: phone      
    }
    cleanInputs();
    saveContactLocalStorage(contact);
});

const cleanInputs = ()=>{
    document.getElementById('inputName').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputPhone').value = '';
}

const saveContactLocalStorage = (contact)=>{
    if(localStorage.getItem('contacts') != null){
        contactsArray = JSON.parse(localStorage.getItem('contacts'));
    }
    contactsArray.push(contact);
    const contactsToString = JSON.stringify(contactsArray);
    localStorage.setItem('contacts', contactsToString);
};