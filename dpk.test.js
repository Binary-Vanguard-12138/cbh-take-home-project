const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

function genRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value of stringified JSON object when given event with no partitionKey", () => {
    const event = {};
    event[genRandomString(64)] = genRandomString(64); // generate random event object
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex"));
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the unchanged partitionKey when given event with partitionKey as a string", () => {
    const partitionKey = '123456';
    const event = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(partitionKey);
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the stringified partitionKey when given event with partitionKey as a JSON object", () => {
    partitionKey = {};
    partitionKey[genRandomString(64)] = genRandomString(64); // generate random partition key object
    const event = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(partitionKey));
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given event with string partitionKey longer than 256 bytes", () => {
    const keyLen = Math.floor(Math.random() * 256) + 256;
    const partitionKey = genRandomString(keyLen);
    const event = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(partitionKey).digest("hex"));
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given event with JSON partitionKey longer than 256 bytes", () => {
    const keyLen = Math.floor(Math.random() * 256) + 256;
    const partitionKey = {};
    partitionKey[genRandomString(64)] = genRandomString(keyLen);
    const event = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify(partitionKey)).digest("hex"));
  });
});