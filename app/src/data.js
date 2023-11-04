export const APPLICANT_OVERVIEW = { total: 10000, outstanding: 4000, paid: 6000 } 

export const APPLICANT_LOAN_DETAILS = [
    { orderId: 1, amount: 5000, currency: 'SGD', start: new Date("2015-03-25"), end: new Date("2017-03-25"), interest: '5%', status: 'approved', type: 'vehicle' },
    { orderId: 2, amount: 2500, currency: 'SGD', start: new Date("2016-03-25"), end: new Date("2018-03-25"), interest: '-', status: 'rejected', type: 'house'},
    { orderId: 3, amount: 2500, currency: 'SGD', start: new Date("2017-03-25"), end: new Date("2019-03-25"), interest: '-', status: 'pending', type: 'business'}
];

export const APPLICANT_PAYMENT_DETAILS = [
    { orderId: 1, paid: 1000, outstanding: 1000, currency: 'SGD', date: new Date("2015-07-24")},
    { orderId: 1, paid: 2000, outstanding: 2000, currency: 'SGD', date: new Date("2015-07-23")},
    { orderId: 1, paid: 1000, outstanding: 4000, currency: 'SGD', date: new Date("2015-07-22")},
];

export const BANK_OVERVIEW = { total: 90000, outstanding: 40000, paid: 50000 };

export const USER_LOAN_DETAILS = [
    { name: "John", total: 5000, outstanding: 1000, paid: 4000, currency: 'SGD', status: 'approved' },
    { name: "Ben", total: 5000, outstanding: 4000, paid: 1000, currency: 'SGD', status: 'approved' },
    { name: "Ryan", total: 40000, outstanding: 15000, paid: 25000, currency: 'SGD', status: 'approved'},
    { name: "Miny", total: 40000, outstanding: 15000, paid: 25000, currency: 'SGD', status: 'approved'},
];

export const USER_PAYMENT_DETAILS = [
    { name: "John", orderId: 1, paid: 1000, outstanding: 1000, currency: 'SGD', date: new Date("2015-07-24")},
    { name: "John", orderId: 1, paid: 2000, outstanding: 2000, currency: 'SGD', date: new Date("2015-07-23")},
    { name: "John", orderId: 1, paid: 1000, outstanding: 4000, currency: 'SGD', date: new Date("2015-07-22")},
    { name: "Ben", orderId: 7, paid: 1000, outstanding: 4000, currency: 'SGD', date: new Date("2015-07-24")},
    { name: "Ryan", orderId: 8, paid: 25000, outstanding: 15000, currency: 'SGD', date: new Date("2015-07-23")},
    { name: "Mini", orderId: 9, paid: 25000, outstanding: 15000, currency: 'SGD', date: new Date("2015-07-22")},
];

export const USER_LOAN_REQUESTS = [
    { name: "John", orderId: 1, amount: 5000, currency: 'SGD', start: new Date("2015-03-25"), end: new Date("2017-03-25"), interest: '-', status: 'pending', type: 'vehicle' },
    { name: "John", orderId: 2, amount: 2500, currency: 'SGD', start: new Date("2016-03-25"), end: new Date("2018-03-25"), interest: '-', status: 'rejected', type: 'house'},
    { name: "John",     orderId: 3, amount: 2500, currency: 'SGD', start: new Date("2017-03-25"), end: new Date("2019-03-25"), interest: '5%', status: 'approved', type: 'business'},
    { name: "Billy", orderId: 10, amount: 5000, currency: 'SGD', start: new Date("2015-03-25"), end: new Date("2017-03-25"), interest: '-', status: 'pending', type: 'vehicle' },
];