let randomBytes = new Uint8Array(16); // Allocate 16 bytes (128 bits) for random data
crypto.getRandomValues(randomBytes); // Fill randomBytes with cryptographically secure random values
console.log(randomBytes); // Output the array of random bytes
