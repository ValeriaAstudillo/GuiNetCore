var keyRAW = new Uint8Array([245, 87, 124, 4, 123, 198, 122, 12, 71, 15, 134, 220, 59, 62, 131, 187, 76, 243, 65, 156, 191, 171, 114, 189]);
var ivRAW = new Uint8Array([62, 81, 92, 156, 178, 142, 221, 199]);
var keySize = 24;
var ivSize = 8;
var salt = null
var password = null;
var derivedBytes = forge.pbe.opensslDeriveBytes(password, salt, keySize + ivSize);

function encrypt3DES(input) {
    var cipher = forge.cipher.createCipher('3DES-ECB', keyRAW);
    cipher.start({ iv: ab2str(ivRAW.buffer) });
    cipher.update(forge.util.createBuffer(input, 'binary'));
    cipher.finish();
    var output = forge.util.createBuffer();
    if (salt !== null) {
        output.putBytes('Salted__'); 
        output.putBytes(salt);
    }
    output.putBuffer(cipher.output);
    encrypted = forge.util.encode64(output.getBytes());
    return encrypted;
}

function decrypt(input) {
    input = forge.util.decode64(input);
    input = forge.util.createBuffer(input, 'binary');
    var decipher = forge.cipher.createDecipher('3DES-ECB', keyRAW);
    decipher.start({ iv: ab2str(ivRAW.buffer) });
    decipher.update(input);
    var result = decipher.finish(); 
    decrypted = decipher.output.getBytes();
    return decrypted;
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); 
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}