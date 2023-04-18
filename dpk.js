const crypto = require("crypto");

//ORIGINAL VERSION

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };





// REFACTORED VERSION
const TRIVIAL_PARTITION_KEY = "0"
const MAX_PARTITION_KEY_LENGTH = 256;

const generatePartitionKey = (event) => {
  const data = JSON.stringify(event);
  return crypto.createHash('sha3-512').update(data).digest('hex');
}

const truncatePartitionKey = (partitionKey) => {
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash('sha3-512').update(partitionKey).digest('hex').slice(0, MAX_PARTITION_KEY_LENGTH / 2);
  }
  return partitionKey;
}

const deterministicPartitionKey = (event = "0") => {
  const { partitionKey } = event;

  if(!event){
    return "0"
  } 

  if (typeof partitionKey === 'string') {
    return truncatePartitionKey(partitionKey);
  } 

  const generatedPartitionKey = generatePartitionKey(event);
  return truncatePartitionKey(generatedPartitionKey);
}

exports.deterministicPartitionKey = deterministicPartitionKey;
