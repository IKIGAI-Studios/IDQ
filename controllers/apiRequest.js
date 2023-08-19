// JS to fetch data from API
const server = "http://localhost:3000/api/";
// Fetch data from API
/**
 * Function to fetch login data from API
 * @param {*} user
 * @param {*} password
 * @returns {*} rslt.data | error
 */
export async function loginFetch(user, password) {
	try {
        await fetch(server + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, password }),
        }).then(async (res) => {
            const rslt = await res.json();
            if (!res.ok) {
                console.log(rslt.error);
                return {
                    error: rslt.error,
                };
            }
            // *** OK ***
            return rslt.data;
        });
    } catch (error) {
        return {
            error: error,
        };
    }
}

/**
 * Function to fetch register data from API
 * @param {*} user
 * @param {*} password
 * @param {*} name
 * @param {*} email
 * @param {*} img
 * @returns {*} rslt.data | error
 */
export async function registerFetch(user, password, name, email, img) {
	try {
        await fetch(server + "register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, password, name, email, img }),
        }).then(async (res) => {
            const rslt = await res.json();
            if (!res.ok) {
                console.log(rslt.error);
                return {
                    error: rslt.error,
                };
            }
            // *** OK ***
            return rslt.data;
        });
    } catch (error) {
        return {
            error: error,
        };
    }
}

export async function getDocs(idq) {
    try {
        await fetch(server + "getDocs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idq }),
        }).then(async (res) => {
            const rslt = await res.json();
            if (!res.ok) {
                console.log(rslt.error);
                return {
                    error: rslt.error,
                };
            }
            // *** OK ***
            return rslt.data;
        });
    } catch (error) {
        return {
            error: error,
        };
    }
}