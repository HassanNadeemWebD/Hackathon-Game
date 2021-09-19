function login() {
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            window.location.href("welcome.html")
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

const setData = (user) => {
    const databaseRef = database.ref('users/' + user.uid);
    databaseRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const lastLoggedInAt = data.lastLoggedInAt;
        const lastLoggedInSpan = document.getElementById("lastLoggedIn");
        lastLoggedInSpan.innerHTML = lastLoggedInAt;

    });
}

    // JS For Balloons
    let popped = 0;

    document.addEventListener('mouseover', function (e) {

        if (e.target.className === "balloon") {

            e.target.style.backgroundColor = "#ededed";
            e.target.textContent = "POP!";
            popped++;
            removeEvent(e);
            checkAllPopped();
        }
    });

    function removeEvent(e) {
        e.target.removeEventListener('mouseover', function () {

        })
    };

    function checkAllPopped() {
        if (popped === 16) {
            console.log('all popped!');
            let gallery = document.querySelector('#balloon-gallery');
            let message = document.querySelector('#yay-no-balloons');
            gallery.innerHTML = '';
            message.style.display = 'block';
        }
    };



