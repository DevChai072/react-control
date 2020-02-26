const compareObjSortASC = attrName => (a, b) => {
 
    if (typeof a[attrName] == "number") { //สำหรับ sort column ที่เป็นตัวเลข

        return a[attrName] - b[attrName]

    } else {

        return a[attrName].toString().localeCompare(b[attrName], "th", {
            sensitivity: "base"
        })

    }

}

const compareObjSortDESC = attrName => (a, b) => {

    if (typeof a[attrName] == "number") { //สำหรับ sort column ที่เป็นตัวเลข
       
        return b[attrName] - a[attrName]

    } else {

         return b[attrName].localeCompare(a[attrName], "th", {
                sensitivity: "base"
        })

    }
   
}

export const sortObjASC = (arrObjData, attrName) => {
    const result = arrObjData.sort(compareObjSortASC(attrName))
    return result
}

export const sortObjDESC = (arrObjData, attrName) => {
    const result = arrObjData.sort(compareObjSortDESC(attrName))
    return result
}