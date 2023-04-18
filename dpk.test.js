const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {


  it('generates a partition key from the event if no partitionKey is provided', () => {
    const event = { data: 'test' };
    expect(deterministicPartitionKey(event)).toHaveLength(128);
  });

  it('truncates partition keys longer than 256 characters', () => {
    const event = { data: 'a'.repeat(300) };
    expect(deterministicPartitionKey(event)).toHaveLength(128);
  });

  it('returns a string, even if a non-string value is passed in', () => {
    const event = { data: { test: true } };
    expect(typeof deterministicPartitionKey(event)).toEqual('string');
  });
});
