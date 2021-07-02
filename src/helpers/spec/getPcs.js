
function getPcs(dom_tetrisCont) {

    let activePcsList = [];
    let activePcsSet = new Set();

    let staticPcsList = [];
    let staticPcsSet = new Set();

    // let leftShift = NaN;
    // let rightShift = NaN;
    // let downShift = NaN;

    // lf lowest number val
    let leftC = Infinity;
    // lf highet number val
    let bottomR = 0;
    // lf highest number val
    let rightC = 0;

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                // spawnCoords.push([r, c]);
                // if (r > lowest) lowest = r;
                if (dom_tetrisCont.children[r].children[c].style.backgroundColor !== 'black') {
                    // active pc
                    activePcsList.push([r, c]);
                    activePcsSet.add(`${r}.${c}`);

                    if (c < leftC) leftC = c;
                    if (c > rightC) rightC = c;

                    if (r > bottomR) bottomR = r;

                } else {
                    // inactive pc
                    staticPcsList.push([r, c]);
                    staticPcsList.add(`${r}.${c}`);
                }

            }

        }

    }

    return {
        activePcsList,
        activePcsSet,

        staticPcsList,
        staticPcsSet,

        leftShift: leftC,
        rightShift: 9-rightC,
        downShift: 23-bottomR,
    };
};

export { getPcs };