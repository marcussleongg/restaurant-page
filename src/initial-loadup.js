export default function loadup() {
    const div = document.querySelector('#content');
    const image = document.createElement('img');
    const heading = document.createElement('h1');
    const text = document.createElement('p');
    const opening = document.createElement('div');
    const location = document.createElement('div');
    const openingtitle = document.createElement('h1');
    openingtitle.innerHTML = 'Opening Hours';
    const mon = document.createElement('p');
    mon.innerHTML = 'Monday: 11am - 9pm';
    const tues = document.createElement('p');
    tues.innerHTML = 'Tuesday: 11am - 9pm';
    const wed = document.createElement('p');
    wed.innerHTML = 'Wednesday: CLOSED';
    const thurs = document.createElement('p');
    thurs.innerHTML = 'Thursday: 11am - 9pm';
    const fri = document.createElement('p');
    fri.innerHTML = 'Friday: 11am - 11pm';
    const sat = document.createElement('p');
    sat.innerHTML = 'Saturday: 11am - 11pm';
    const sun = document.createElement('p');
    sun.innerHTML = 'Sunday: 11am - 9pm';
    opening.appendChild(openingtitle);
    opening.appendChild(mon);
    opening.appendChild(tues);
    opening.appendChild(wed);
    opening.appendChild(thurs);
    opening.appendChild(fri);
    opening.appendChild(sat);
    opening.appendChild(sun);
    const locationtitle = document.createElement('h1');
    locationtitle.innerHTML = 'Locate Us';
    const addy = document.createElement('p');
    addy.innerHTML = '123 Water Drive, Melonville, WMLand';
    location.appendChild(locationtitle);
    location.appendChild(addy);
    image.src = "../src/images/watermelonlogo.png";
    image.alt = "image of a watermelon";
    heading.innerHTML = "The Watermelon Restaurant";
    text.innerHTML = "The watermelon restaurant hosts a menu of dishes focused on the natural taste of watermelon, and showcases the creativity of our chefs in making many different dishes from the fruit.";
    div.appendChild(heading);
    div.appendChild(image);
    div.appendChild(text);
    div.appendChild(opening);
    div.appendChild(location);
}