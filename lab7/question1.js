/*the problem with the code was the way we used 'this' for this part
askPasword(user.loginok,user.loginfail)
the 'this' is refered to the window not the user and to fix this we can use either 
.call , .apply or . bind*/

// solution using bind
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") {
        ok.bind(this)();
    } else {
        fail.bind(this)();
    }
}

let user = {
    name: "John",
    loginok() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to login`);
    },
};

askPassword.bind(user, user.loginok, user.loginFail)();



//  solution usin call
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") {
        ok.call(this);
    } else {
        fail.call(this);
    }
}

let user1 = {
    name: "Melles",
    loginok() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to login`);
    },
};

askPassword.call(user1, user1.loginok, user1.loginFail);



//  solution usin apply
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") {
        ok.apply(this);
    } else {
        fail.apply(this);
    }
}

let user2 = {
    name: "Hebron",
    loginok() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to login`);
    },
};

askPassword.apply(user2, [user2.loginok, user2.loginFail]);



// using wrapper
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") {
        ok();
    } else {
        fail();
    }
}

let user3 = {
    name: "Yonas",
    loginok() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to login`);
    },
};

function okWrap(){
    user3.loginok();
}
function failWrap(){
    user3.loginFail();
}
askPassword(okWrap,failWrap);



