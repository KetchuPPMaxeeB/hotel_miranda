async function deleteBooking(id) {
    const bookingRaw = await fetch(`http://localhost:3000/booking/${id}`, {
        method: 'DELETE'
        })
    const booking = await bookingRaw.json();
}

document.querySelector('#cancel').addEventListener('click', () => deleteBooking(id));