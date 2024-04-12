// const crypto = globalThis.crypto;


// const { subtle } = globalThis.crypto;

// async function generateAesKey(length = 256) {
//   const key = await subtle.generateKey({
//     name: 'AES-CBC',
//     length,
//   }, true, ['encrypt', 'decrypt']);

//   return key;
// } 

// export async function aesEncrypt(plaintext:string) {
//   const ec = new TextEncoder();
//   const key = await generateAesKey();
//   const iv = crypto.getRandomValues(new Uint8Array(16));

//   const ciphertext = await crypto.subtle.encrypt({
//     name: 'AES-CBC',
//     iv,
//   }, key, ec.encode(plaintext));

//   return {
//     key,
//     iv,
//     ciphertext,
//   };
// }

// export async function aesDecrypt(ciphertext:string, key, iv) {
//   const dec = new TextDecoder();
//   const plaintext = await crypto.subtle.decrypt({
//     name: 'AES-CBC',
//     iv,
//   }, key, ciphertext);

//   return dec.decode(plaintext);
// }