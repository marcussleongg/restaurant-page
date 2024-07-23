export default function about() {
    const div = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.innerHTML = 'Contact Us';
    const contacttext = document.createElement('p');
    const contactphone = document.createElement('p');
    const contactemail = document.createElement('p');
    contacttext.innerHTML = 'We can be contacted via phone or email';
    contactphone.innerHTML = '+1 555 555 555';
    contactemail.innerHTML = 'thewatermelonrestaurant@watermelonmail.com';
    contact.appendChild(contacttext);
    contact.appendChild(contactphone);
    contact.appendChild(contactemail);
    const history = document.createElement('div');
    history.innerHTML = "Our History";
    const historytext = document.createElement('p');
    historytext.innerHTML = 'The Watermelon Restaurant was opened in 2000 by a group of friends who were enthusiasts of the fruit. Being a team of a past business owner and 2 chefs, they worked hard at incorporating watermelon into each of their dishes, where it is the main star for some but supporting cast for others. Their love for watermelon has kept them together through tough times and allowed the business to continue to flourish. When asked about plans to expand their business, all that was said was that they wanted to focus on the quality of the food they put out to their customers, and that they did not want the pursuit of money to get in the way of their love for what they do.';
    history.appendChild(historytext);
    div.appendChild(contact);
    div.appendChild(history);
}