import { tpColumn1 } from "./column/tpColumn1";

module.exports = function ({ addComponents, addUtilities }) {
    const newComponents = {
        ...tpColumn1
    }

    // const newUtilities = {
    //   ...tpParent.tpGapX,
    //   ...tpParent.tpGapY,
    //   ...tpParent.tpGap
    // }
  

    addComponents(newComponents, ['responsive']);
    // addUtilities(newUtilities, ["responsive"])
  };
