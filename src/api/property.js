fetch('logement.json')
    .then(response => response.json())
    .then(data => {
        // Handle the data here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });