slowMath.add(6, 2).then(function(value) {
    console.log(value);
    slowMath.multiply(value, 2).then(function(value) {
        console.log(value);
        slowMath.divide(value, 4).then(function(value) {
            console.log(value);
            slowMath.subtract(value, 3).then(function(value) {
                console.log(value);
                slowMath.add(value, 98).then(function(value) {
                    console.log(value);
                    slowMath.remainder(value, 2).then(function(value) {
                        console.log(value);
                        slowMath.multiply(value, 50).then(function(value) {
                            console.log(value);
                            slowMath.divide(value, 40).then(function(value) {
                                console.log(value);
                                slowMath.add(value, 32).then(function(value) {
                                    console.log(`The final result is ${value}`);
                                })
                            })
                        })
                    })
                }).catch(function(error) {
                    console.log(error);
                })
            })
        })
    })
});