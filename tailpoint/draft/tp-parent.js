
 export const initialGap = 1




 const tpRow = {   
    "--tp-gx" : `${initialGap}rem`,
    "--tp-gy" : `${initialGap}rem`, 
    display : "flex",
    flexWrap : "wrap",
    columnGap : "var(--tp-gx)",
    rowGap : "var(--tp-gy)",
    "> *" : {
        width : "100%",
        flex: "0 0 auto",
    }
 }
 
 

 const totalGap = 100

/* --------------------------------------
    Column Gap Counting
---------------------------------------*/  
 
 const tpGapX = Array(totalGap).fill().reduce((acc, _, index) => {
    const makeGapX = {
        [`.tp--gx-${index + 1}`]: {
            "--tp-gx" : `${(index + 1) / 16}rem`
        }
    };

    return { ...acc, ...makeGapX };
}, {});


/* --------------------------------------
    Row Gap Counting
---------------------------------------*/  
//  
const tpGapY = Array(totalGap).fill().reduce((acc, _, index) => {
    const makeGapY = {
        [`.tp--gy-${index + 1}`]: {
            "--tp-gy" : `${(index + 1) / 16}rem`
        }
    };

    return { ...acc, ...makeGapY };
}, {});


/* --------------------------------------
    Row and Column Gap Counting
---------------------------------------*/  
//  
const tpGap = Array(totalGap).fill().reduce((acc, _, index) => {
    const makeGap = {
        [`.tp--g-${index + 1}`]: {
            "--tp-gx" : `${(index + 1) / 16}rem`,
            "--tp-gy" : `${(index + 1) / 16}rem`
        }
    };

    return { ...acc, ...makeGap };
}, {});



export const tpParent = {
    tpRow,
    tpGapX,
    tpGapY,
    tpGap,
}