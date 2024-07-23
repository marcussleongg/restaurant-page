export default function loadup() {
    const div = document.querySelector('#content');
    const image = document.createElement('img');
    const heading = document.createElement('h1');
    const text = document.createElement('p');
    image.src = "../src/images/watermelon.jpg";
    image.alt = "image of a watermelon";
    heading.innerHTML = "The watermelon restaurant!";
    text.innerHTML = "The watermelon restaurant hosts a menu of dishes focused on the natural taste of watermelon, and showcases the creativity of our chefs in making many different dishes from the fruit.";
    div.appendChild(image);
    div.appendChild(heading);
    div.appendChild(text);
}