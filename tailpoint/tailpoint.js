import { tpParent } from "./tp-parent";
import { tpChildren } from "./tp-children";
module.exports = function ({ addComponents }) {
    const newComponents = {
      ".tp--row" : tpParent.tpRow,
      ...tpChildren.tpCol
    }
  

    addComponents(newComponents, ['responsive']);
  };