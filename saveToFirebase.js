function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('users').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email);
