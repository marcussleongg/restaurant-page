export default function menu() {
    const div = document.querySelector('#content');
    const appetizers = document.createElement('div');
    const appetizerstitle = document.createElement('div');
    appetizerstitle.innerHTML = 'Appetizers';
    appetizerstitle.setAttribute('id', 'menuTitle');
    const wmfries = document.createElement('div');
    const wmfriestitle = document.createElement('h1');
    wmfriestitle.innerHTML = 'Watermelon Fries';
    const wmfriesdesc = document.createElement('p');
    wmfriesdesc.innerHTML = 'Crsipy fries made from watermelon rind';
    wmfries.appendChild(wmfriestitle);
    wmfries.appendChild(wmfriesdesc);
    const wmsalad = document.createElement('div');
    const wmsaladtitle = document.createElement('h1');
    wmsaladtitle.innerHTML = 'Watermelon Salad';
    const wmsaladdesc = document.createElement('p');
    wmsaladdesc.innerHTML = 'Fresh salad of lettuce, spring greens, onions, and watermelon';
    wmsalad.appendChild(wmsaladtitle);
    wmsalad.appendChild(wmsaladdesc);
    appetizers.appendChild(wmfries);
    appetizers.appendChild(wmsalad);
    const mains = document.createElement('div');
    const mainstitle = document.createElement('div');
    mainstitle.innerHTML = 'Mains';
    mainstitle.setAttribute('id', 'menuTitle');
    const wmsteak = document.createElement('div');
    const wmsteaktitle = document.createElement('h1');
    wmsteaktitle.innerHTML = 'Watermelon Steak';
    const wmsteakdesc = document.createElement('p');
    wmsteakdesc.innerHTML = 'Beef steak cooked with a homemade watermelon sauce';
    wmsteak.appendChild(wmsteaktitle);
    wmsteak.appendChild(wmsteakdesc);
    const wmburger = document.createElement('div');
    const wmburgertitle = document.createElement('h1');
    wmburgertitle.innerHTML = 'Watermelon Burger';
    const wmburgerdesc = document.createElement('p');
    wmburgerdesc.innerHTML = 'Classic burger with homemade watermelon sauce and a fresh slice of watermelon';
    wmburger.appendChild(wmburgertitle);
    wmburger.appendChild(wmburgerdesc);
    const wmpasta = document.createElement('div');
    const wmpastatitle = document.createElement('h1');
    wmpastatitle.innerHTML = 'Watermelon Pasta';
    const wmpastadesc = document.createElement('p');
    wmpastadesc.innerHTML = 'Handmade pasta with unqiue tomato-watermelon sauce';
    wmpasta.appendChild(wmpastatitle);
    wmpasta.appendChild(wmpastadesc);
    mains.appendChild(wmsteak);
    mains.appendChild(wmburger);
    mains.appendChild(wmpasta);
    const dessert = document.createElement('div');
    const desserttitle = document.createElement('div');
    desserttitle.innerHTML = 'Desserts';
    desserttitle.setAttribute('id', 'menuTitle');
    const wmpie = document.createElement('div');
    const wmpietitle = document.createElement('h1');
    wmpietitle.innerHTML = 'Watermelon Pie';
    const wmpiedesc = document.createElement('p');
    wmpiedesc.innerHTML = 'Freshly baked pies with watermelon filling';
    wmpie.appendChild(wmpietitle);
    wmpie.appendChild(wmpiedesc);
    const wmicecream = document.createElement('div');
    const wmicecreamtitle = document.createElement('h1');
    wmicecreamtitle.innerHTML = 'Watermelon Icecream';
    const wmicecreamdesc = document.createElement('p');
    wmicecreamdesc.innerHTML = 'Sweet watermelon flavored icecream';
    wmicecream.appendChild(wmicecreamtitle);
    wmicecream.appendChild(wmicecreamdesc);
    dessert.appendChild(wmpie);
    dessert.appendChild(wmicecream);
    div.appendChild(appetizerstitle);
    div.appendChild(appetizers);
    div.appendChild(mainstitle);
    div.appendChild(mains);
    div.appendChild(desserttitle);
    div.appendChild(dessert);
}