const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function loadRoom() {
    const response = await fetch(`http://localhost:3000/room/${id}`);
    const roomsArr = await response.json();
    const data = roomsArr[0];

    document.querySelector('img').src = `http://localhost:3000${data.image_url}`;
    document.querySelector('#room_type').value = data.type;
    document.querySelector('#price').value = data.price;
}

loadRoom();

async function postGuest() {
    const response = await fetch(`http://localhost:3000/guests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.querySelector('#guest_name').value,
            email: document.querySelector('#email').value,
            phone_num: document.querySelector('#phone_number').value
        })
    });
    const guest = await response.json();
    return guest;
}

async function postBooking(guest_id) {

    const response = await fetch(`http://localhost:3000/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            guest_id: guest_id,
            arrive_date: document.querySelector('#arrive_date').value,
            departure_date: document.querySelector('#departure_date').value
        })
    });
    const booking = await response.json();

    return booking;
}

async function postBookingRooms(booking_id) {

    const response = await fetch(`http://localhost:3000/bookingRoom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            booking_id: booking_id,
            room_id: id
        })
    });
}

async function handleBooking() {
    const guest = await postGuest();
    const booking = await postBooking(guest[0].id);
    await postBookingRooms(booking.id);
}

document.querySelector('#book').addEventListener('click', async (event) => {
    event.preventDefault();
    await handleBooking();
});