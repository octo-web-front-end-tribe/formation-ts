interface Customer {
    firstname: string;
    lastname: string;
    activities?: string []
}

const client: Customer = {
    firstname: 'John',
    lastname: 'Doe'
}

function sayHello(user: Customer) {
    console.log(`Welcome M ${user.firstname} ${user.lastname}`);
}


