
function getPcs(dom_tetrisCont) {

    let activePcsList = [];
    let activePcsSet = new Set();

    let staticPcsList = [];
    let staticPcsSet = new Set();

    let leftShift = NaN;
    let rightShift = NaN;
    let downShift = NaN;

    for (let r = 0; r < dom_tetrisCont.children.length; r++) {

        for (let c = 0; c < dom_tetrisCont.children[r].children.length; c++) {
            if (!!dom_tetrisCont.children[r].children[c].style.backgroundColor) {
                // spawnCoords.push([r, c]);
                // if (r > lowest) lowest = r;
                if (dom_tetrisCont.children[r].children[c].style.backgroundColor !== 'black') {
                    // active pc
                } else {
                    // inactive pc
                }

            }

        }

    }

    return {
        activePcsList,
        activePcsSet,

        staticPcsList,
        staticPcsSet,

        leftShift,
        rightShift,
        downShift,
    };
};

export { getPcs };