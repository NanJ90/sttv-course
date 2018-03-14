// export const addSection = (filter) => {
//   return (
//     type: 'ADD_SECTION_VISILIBITY',
//     filter
//   );
// };
// export const addSubSec = (filter) => {
//   return (
//     type: 'ADD_SUBSEC_VISILIBITY',
//     filter
//   )};
export function addPractice(practice) {
  return {
    type: 'ADD_PRACTICE',
    practice
  };
}
