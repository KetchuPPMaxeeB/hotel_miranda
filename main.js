async function loadRooms() {
    const response = await fetch('http://localhost:3000/room');
    const rooms = await response.json();
    
    const containter = document.querySelector('.room-scroll');
    containter.innerHTML = '';

    rooms.forEach(room => {
        const card = document.createElement('article');
        card.className = 'room-card';
        card.innerHTML = `<div class="img-container">
                        <img src=""http://localhost:3000${room.image_url}"" alt="Room image">
                    </div>
                    <div class="room-info">
                        <p class="room-type">${room.type}</p>
                        <p class="room-price">от ${room.price}</p>
                        <button class="room-more-btn" type="button">Подробнее</button>
                    </div>`;
        containter.appendChild(card);
    });
};

loadRooms();