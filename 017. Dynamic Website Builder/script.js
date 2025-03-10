function designCard(title, cName, vCount, duration, monthsOld, thumbnail) {

    

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';

    const cardThumbnail = document.createElement('div');
    cardThumbnail.className = 'card-thumbnail';

    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = 'thumbnail';

    const span = document.createElement('span');
    span.textContent = duration;

    cardThumbnail.appendChild(img);
    cardThumbnail.appendChild(span);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const info = document.createElement('div');
    info.className = 'info';

    const p1 = document.createElement('p');
    p1.textContent = cName;

    const dot1 = document.createElement('p');
    dot1.className = 'dot';
    dot1.textContent = '.';

    const p2 = document.createElement('p');
    p2.textContent = vCount + ' views';

    const dot2 = document.createElement('p');
    dot2.className = 'dot';
    dot2.textContent = '.';

    const p3 = document.createElement('p');
    p3.textContent = monthsOld + (monthsOld === 1 ? ' month ago' : ' months ago');

    info.appendChild(p1);
    info.appendChild(dot1);
    info.appendChild(p2);
    info.appendChild(dot2);
    info.appendChild(p3);

    cardContent.appendChild(h2);
    cardContent.appendChild(info);

    cardContainer.appendChild(cardThumbnail);
    cardContainer.appendChild(cardContent);

    document.querySelector(".card-container").appendChild(cardContainer);
}


function createCard() {
    const title = document.getElementById('card-title');
    const cName = document.getElementById('channel-name');
    const vCount = document.getElementById('view-count');
    const duration = document.getElementById('video-duration');
    const monthsOld = document.getElementById('months-old');
    const thumbnail = document.getElementById('video-thumbnail');    
    
    if (!title.value || !cName.value || !vCount.value || !duration.value || !monthsOld.value || !thumbnail.value) {
        alert('All fields are required!');
        return;
    }

    console.log('Creating card...');
    designCard(title.value, cName.value, vCount.value, duration.value, monthsOld.value, thumbnail.value);
    title.value = '';
    cName.value = '';
    vCount.value = '';
    duration.value = '';
    monthsOld.value = '';
    thumbnail.value = '';
    console.log('Card created!');
}