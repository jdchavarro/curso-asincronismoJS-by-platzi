const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        } else {
            reject('Ups!');
        }
    });
};

somethingWillHappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));