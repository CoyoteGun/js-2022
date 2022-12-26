let url = new URL(location.href);
let id = url.searchParams.get('id');

const usb = document.querySelector('.user_block');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(users => {

        for (const user in users) {

            const userBlock = document.createElement('p');
            userBlock.classList.add('text');

            if (typeof users[user] !== 'object') {

                userBlock.innerText = `${user} : ${users[user]}`;

            }else {
                userBlock.innerText = `${user} :`

                for (const item in users[user]) {
                    const userSmallBlock = document.createElement('p');

                    if (typeof users[user][item] !== 'object'){
                        userSmallBlock.innerText = `${item} - ${users[user][item]}`;
                    } else {
                        userSmallBlock.innerText = `${item} :`;

                        for (const element in users[user][item]) {
                            const innerInDiv = document.createElement('p');

                            if (typeof users[user][item][element] !== 'object') {
                                innerInDiv.innerText = `${element} : ${users[user][item][element]}`;

                            }
                            userSmallBlock.appendChild(innerInDiv);
                        }
                    }
                    userBlock.appendChild(userSmallBlock);
                }
            }

                usb.appendChild(userBlock);
        }
    });

const postTitle = document.querySelector('.post_title');
const btn = document.querySelector('.btn');

btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(resp => resp.json())
        .then(posts => {

            for (const post of posts) {
                console.log(post);
                const titleBlock = document.createElement('div');
                titleBlock.classList.add('t_block');

                const pargh = document.createElement('p');
                pargh.classList.add('title_text');
                pargh.innerText = `${post.title}`;

                const anchor = document.createElement('a');
                anchor.classList.add('anchor_link');
                anchor.innerText = '> More <';
                anchor.href = `post-details.html?post=${post.id}`;

                titleBlock.append(pargh, anchor);
                postTitle.appendChild(titleBlock);
            }

        });
    }