document.querySelector('nav ul li a').addEventListener('click', function(event) {
 event.preventDefault();
 var sectionId = this.getAttribute('href');
 var section = document.querySelector(sectionId);
 section.scrollIntoView({ behavior: 'smooth' });
});

 function addEvent(date) {
    let eventName = document.getElementById('eventName').value;
    let eventDescription = document.getElementById('eventDescription').value;
    let eventCategory = document.getElementById('eventCategory').value;
    localStorage.setItem(date, JSON.stringify({name: eventName, description: eventDescription, category: eventCategory}));
 }