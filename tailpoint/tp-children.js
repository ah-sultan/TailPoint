const totalCol = 12;
const _1colValue = 100 / totalCol;

const tpCol = Array(12)
  .fill()
  .reduce((acc, _, index) => {
    const makeCol = {
      [`.tp--row > .tp--col-${index + 1}`]: {
        flex: "0 0 auto",
        width: `calc(${_1colValue * (index + 1)}% - var(--tp-gx) + 1% )`,

      },
    };

    return { ...acc, ...makeCol };
  }, {});

export const tpChildren = {
  tpCol,
};
