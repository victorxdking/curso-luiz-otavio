/* // 1º-------------------------------------------------------------------------------
function f1() {
    setTimeout(function() {
        console.log('f1');
    }, 500);
}

function f2() {
    setTimeout(function() {
        console.log('f2');
    }, 1000);
}
function f3() {
    setTimeout(function() {
        console.log('f3');
    }, 800);
}

f1();
f2();
f3();
console.log('Olá mundo!');
// ------------------------------------------------------------------------------- 


// 2º-------------------------------------------------------------------------------
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1() {
    setTimeout(function() {
        console.log('f1');
    }, rand());
}

function f2() {
    setTimeout(function() {
        console.log('f2');
    }, rand());
}
function f3() {
    setTimeout(function() {
        console.log('f3');
    }, rand());
}

f1();
f2();
f3();
console.log('Olá mundo!');
// ------------------------------------------------------------------------------- 


// 3º-------------------------------------------------------------------------------
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá mundo!');
        });
    });
});
// ------------------------------------------------------------------------------- */


// 4º-------------------------------------------------------------------------------
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

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
// -------------------------------------------------------------------------------
