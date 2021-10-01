function fetchData() {
    // console.log('start fetch');
    fetch('https://reqres.in/api/users')
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw Error('Error');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        const record = data.data
        .map(user => {
            return `
            <div class="user">
                <p>
                    <img src="${user.avatar}" alt="${user.first_name}">
                </p>
                <p>Name: ${user.first_name}</p>
                <p>Email: ${user.email}</p>
            </div>
            `;
        })
        .join(" ");
        console.log("Array data....",record);
        document.querySelector('#app').insertAdjacentHTML('afterbegin', record); 
    })
    .catch(error => {
        console.log(error);
    });
}
fetchData();



function postData() {
    // console.log('start fetch');
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application.json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "leader"
        })
    })
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw Error('Error');
        }
        return response.json();
    })
    .then(data => {
        console.log("Post Data...", data) 
    })
    .catch(error => {
        console.log(error);
    });
}
postData();