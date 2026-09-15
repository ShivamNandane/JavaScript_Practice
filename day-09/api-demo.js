import axios from "axios";

async function loadUsers() {

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);

    } catch (error) {

        console.error(error);

    }
}

loadUsers();
