///Preloader)))
window.onload = () => {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

 

const placesForContent = document.querySelector('.main__content')

function loadPosts() {
    return new Promise((res, rej) => {
        fetch('https://ajax.test-danit.com/api/json/posts')
            .then(response => response.json())
            .then(postsList => res(postsList))
            .catch(err => rej(err))
    })
}

function loadUsers() {
    return new Promise((res, rej) => {
        fetch('https://ajax.test-danit.com/api/json/users')
            .then(response => response.json())
            .then(userList => res(userList))
            .catch(err => rej(err))
    })
}
let listRenderedPosts = [];
function loadUsersAndPosts() {
    Promise.all([loadPosts(), loadUsers()])
        .then(([posts, users]) => {
            posts.forEach((el, i) => {
                let post = new Card(el, users, i);
                post.render();
                listRenderedPosts.push(post)
            });
        })
}

function renderPost(name, title, text, email, i) {
    placesForContent.innerHTML += `<div class="user-post" id='${i}'>
    <div class="user__info">
        <p class="user__name">${name}</p>
        <p class="user__email">${email}</p>
        <button class="delete__btn" data-id='${i}'>Delete</button>
    </div>
    <div class="post__info">
        <p class="post__title">${title}</p>
        <p class="post__text">${text}</p>
    </div>
</div>`
    
    
}

function getUserInfo(usersArr, id, param) {
    let user = usersArr.filter(el => el.id === id);
    let [userObj] = user;
    return userObj[param];
}

class Card{
    constructor({userId, title, body, id}, users, i){
        this.userId = userId,
        this.body = body,
        this.title = title,
        this.postId = id,
        this.users = users,
        this.index = i
    }
    onDelete = (e) => {
        fetch(`https://ajax.test-danit.com/api/json/posts/${this.postId}`, {
                method: 'DELETE',})
            .then(response => {
                if (response.ok) {
                    document.getElementById(`${e.dataset.id}`).remove()
                }
            })
            .catch(err => console.log('Error: ', err))
    }
    render = () => {
        renderPost(getUserInfo(this.users, this.userId, 'name'), this.title, this.body, getUserInfo(this.users, this.userId, 'email'), this.index);
    }
    
}


loadUsersAndPosts()

placesForContent.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.value === 'delete__btn') {
        listRenderedPosts[target.dataset.id].onDelete(target)
    }
})

