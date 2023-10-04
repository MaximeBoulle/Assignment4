document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const fetchButton2 = document.getElementById('fetchButton2');
    const responseContainer = document.getElementById('responseContainer');
    const userIdInput = document.getElementById('userId');



    fetchButton.addEventListener('click', () => {

        const userId = parseInt(userIdInput.value);

        if (!userId) {
            alert("Insert an ID !");
            return;
        }
        if(userId < 1 || userId > 20) {
            alert("Insert a valid ID !");
            return;
        }

        fetch(`/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                responseContainer.textContent = `ID ${userId} : Name : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
            })
    });

    fetchButton2.addEventListener('click', () => {

            fetch(`/user/random`)
                .then(response => response.json())
                .then(data => {
                    responseContainer.textContent = `ID ${data.id} : nom : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
                })
    });
});