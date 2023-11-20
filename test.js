/* -----------------------------------------
    tp--col-1
------------------------------------------- */

function sectionBuilder({
    tpRowId,
    length,
    targetClass
}) {

    const getTpRow = document.getElementById(tpRowId)

    for(let i = 0; i < length; i++){
        const colDiv = document.createElement("div")
        colDiv.innerHTML = `<div class="box">.${targetClass}</div>`
        colDiv.classList.add(`${targetClass}`)
        getTpRow.append(colDiv)
    }


}


// ------------------------------------------------
sectionBuilder({
    tpRowId : "tp--col-1",
    targetClass : "tp--col-1",
    length: 12,
})