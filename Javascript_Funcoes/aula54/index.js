function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

function f1(callback) {
    setTimeout( () => {
        console.log('f1');;
        if(callback) callback()

    }, 1000)
    
}
function f2(callback) {
    setTimeout( () => {
        console.log('f2');
        if(callback) callback();

    }, 1000)
    
}
function f3(callback) {
    setTimeout( () => {
        console.log('f3');
        if(callback) callback();
    }, 1000)
    
}


// Callback hell 
// Árvore de natal
f1(function () {
    f2(function() {
        f3(function() {
            console.log('Olá mundo')
        });
    });
});

f1(f1Callback);


function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}
