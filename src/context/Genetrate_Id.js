// const UNIQUE_RETRIES = 9999;

// const generateUnique = function(previous) {
//   previous = previous || [];
//   var retries = 0;
//   var id;

//   // Try to generate a unique ID,
//   // i.e. one that isn't in the previous.
//   while(!id && retries < UNIQUE_RETRIES) {
//     id = generate();
//     if(previous.indexOf(id) !== -1) {
//       id = null;
//       retries++;
//     }
//   }

//   return id;
// };