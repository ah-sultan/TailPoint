
 export const initialGap = 1


 const tpRow = {
    "--tp-gx" : `${initialGap}rem`,
    width : "100%",
    display : "flex",
    flexWrap : "wrap",
    columnGap : "var(--tp-gx)"
 }
 
 
//  const tpGap = Array(100).fill().reduce((acc, _, index) => {
//     const makeGap = {
//         [`.tp--row.tp--gx-${index + 1}`]: {
//             flex: "0 0 auto",
//             width: ``,
//         }
//     };

//     return { ...acc, ...makeCol };
// }, {});


export const tpParent = {
    tpRow,
}