document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const fetchButton2 = document.getElementById('fetchButton2');
    const fetchButton3 = document.getElementById('fetchButton3');
    const fetchButton4 = document.getElementById('fetchButton4');
    const fetchButton5 = document.getElementById('fetchButton5');
    const responseContainer = document.getElementById('responseContainer');
    const responseContainer2 = document.getElementById('responseContainer2');
    const responseContainer3 = document.getElementById('responseContainer3');
    const responseContainer4 = document.getElementById('responseContainer4');
    const userIdInput = document.getElementById('userId');
    const userIdInput2 = document.getElementById('userId2');
    const userIdInput3 = document.getElementById('userId3');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const name2 = document.getElementById('name2');
    const username2 = document.getElementById('username2');
    const email2 = document.getElementById('email2');

    fetchButton.addEventListener('click', () => {
        const userId = parseInt(userIdInput.value);

        fetch(`/user/${userId}`)
            .then(response => {
                if (response.status === 404) {
                    throw new Error('User not found');
                }
                return response.json();
            })
            .then(data => {
                responseContainer.textContent = `ID ${userId} : Name : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
            })
            .catch(error => {
                responseContainer.textContent = error.message;
            });
    });


    fetchButton2.addEventListener('click', () => {

            fetch(`/user/random`)
                .then(response => response.json())
                .then(data => {
                    responseContainer.textContent = `ID ${data.id} : nom : ${data.name} / Username : ${data.username} / Email : ${data.email}`;
                })
    });

    fetchButton3.addEventListener('click', () => {
        const userId2 = parseInt(userIdInput2.value);
        try {
            fetch(`/user/${userId2}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                if(data.boolean === true){
                    responseContainer2.textContent = data.message;
                }else{
                    responseContainer2.textContent = "Error";
                }
            });
        } catch (error) {
            responseContainer2.textContent = error;
        }
    });

    fetchButton4.addEventListener('click', () => {
        const name2_ = name2.value;
        const username2_ = username2.value;
        const email2_ = email2.value;
        try {
            const userId3 = parseInt(userIdInput3.value);
            fetch(`/user/${userId3}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name2_,
                        username: username2_,
                        email: email2_
                    }),
                }).then(response => response.json())
                .then(data => {
                    if(data.boolean === true){
                        responseContainer3.textContent = data.message;
                    }else{
                        responseContainer3.textContent = "Error";
                    }
                });
        }catch (error) {
            responseContainer3.textContent = error;
        }
    });

    fetchButton5.addEventListener('click', () => {
        const name_ = name.value;
        const username_ = username.value;
        const email_ = email.value;

        try {
            fetch('/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name_,
                    username: username_,
                    email: email_
                }),
            }).then(response => response.json())
                .then(data => {
                        responseContainer4.textContent = JSON.stringify(data, null, 2);
                });

        }catch  (error) {
            responseContainer2.textContent = error;
        }
    });
});