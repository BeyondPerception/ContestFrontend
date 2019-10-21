const djangoIP = 'http://dent:8000/';

function logError(err) {
    console.log("Fetch Error:");
    console.log(err);
}

export function createUser(name, password, email, school, success) {
    fetch(`${djangoIP}users/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name, password, email, school })
    }).then(res => res.json()).then(res => {
        if (res.detail) logError(res.detail);
        else success(res);
    })
}

export function authenticateUser(email, password, success, failure) {
    fetch(`${djangoIP}auth/login/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(res => {
        if (res.id) success(res);
        else failure();
    });
}