const djangoIP = 'http://dent:8000/';



function logError(err) {
    console.log("Fetch Error:");
    console.log(err)
}

export async function createUser(name, password, email, school, success) {
    const response = await fetch(`${djangoIP}users/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name, password, email, school })
    });
    var json = response.json();
    if (json.detail) logError(json.detail);
    else success(json);
}

export async function authenticateUser(email, password, success) {
    const response = await fetch(`${djangoIP}auth/login/`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    var json = await response.json();
    if (json.key)
    {
        success(json);
        return true
    }
    else return false;
}