fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  {

        let mainBlock = document.createElement('div');
        mainBlock.classList.add('wrapper_2', 'container_2');

        for (const user of users) {

            let smallBlock = document.createElement('div');
            smallBlock.classList.add('users', 'users__user', 'users__text');
            smallBlock.innerText = `${user.id} - ${user.name}`;

            let link = document.createElement('a');
            link.classList.add('link');
            link.innerText = 'More info';
            link.href = `user-details.html?id=${user.id}`;

            smallBlock.appendChild(link);
            mainBlock.appendChild(smallBlock);

            document.body.appendChild(mainBlock);
        }

    });