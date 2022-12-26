let url1 = new URL(location.href);
let postID = url1.searchParams.get('post');
console.log(postID);

const info = document.querySelector('.post_info');

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(value => value.json())
    .then(post => {
        for (const item in post) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post_block');
            postDiv.innerText = `${item}: ${post[item]}`;
            info.appendChild(postDiv);
        }
    });

const commBlock = document.querySelector('.comments_block');

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {

            const commDiv = document.createElement('div');
            commDiv.classList.add('comments_body');

            const email = document.createElement('h2');
            email.classList.add('email_comm');
            email.innerText = ` Email: ${comment.email}`;

            const commText = document.createElement('p');
            commText.classList.add('comm_text');
            commText.innerText = `${comment.body}`;

            commDiv.append(email, commText);
            commBlock.appendChild(commDiv);
        }

    })