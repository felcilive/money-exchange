// PLEASE DON'T change function name
module.exports = function makeExchange(x) {
    var h = 50;
    var q = 25;
    var d = 10;
    var n = 5;
    var p = 1;
    var balance;
    var getMoney = {};
    if (x <= 0)
        return {};
    if (x > 10000) {
        getMoney.error = "You are rich, my friend! We don\'t have so much coins for exchange";

        return (getMoney);
    }

    else {

        if (x > 49) {

            balance = Math.floor(x / h);
            x = x - (balance * h);
            getMoney.H = balance;
            console.log(x);
        }
        if (x > 24) {
            balance = Math.floor(x / q);
            x = x - (balance * q);
            getMoney.Q = balance;
        }
        if (x > 9) {

            balance = Math.floor(x / d);
            x = x - (balance * d);
            getMoney.D = balance;
        }
        if (x > 4) {
            balance = Math.floor(x / n);
            x = x - (balance * n);
            getMoney.N = balance;
        }
        if (x > 0) {
            balance = Math.floor(x / p);
            x = x - (balance * p);
            getMoney.P = balance;
        }

        return getMoney;
    }
}


