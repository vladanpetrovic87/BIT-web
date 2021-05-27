function print () {
    var hello = "World";
    console.log(hello);
}

print();

function getPlatform () {
    console.log('Platform:' + window.navigator.platform);
}

getPlatform();

function getVersion () {
    console.log('AppVersion:' + window.navigator.userAgent);
}

getVersion();


function getVendor () {
    console.log('AppVersion:' + window.navigator.vendor);
}

getVendor();


console.log(window.location.href);