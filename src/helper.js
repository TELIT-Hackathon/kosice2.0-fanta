const isGood = (dataItem, filterKey, filterValue) => {
    const keylist = filterKey.split('@');
    if (keylist.length === 2) {
        if (keylist[1] === "From") {
            if (dataItem.hasOwnProperty(keylist[0])) {
                if (dataItem[keylist[0]] < filterValue) {
                    return false;
                }
            }
        }

        if (keylist[1] === "To") {
            if (dataItem.hasOwnProperty(keylist[0])) {
                if (dataItem[keylist[0]] > filterValue) {
                    return false;
                }
            }
        }
    }

    // obsahuje
    if (dataItem.hasOwnProperty(filterKey)) {
        if (dataItem[filterKey] !== filterValue) {
            return false;
        }
    }

    return true
}

export const filterData = (data, filter) => {
    const newData = data?.data?.filter(x => {
        for (var propertyName in filter) {
            if (!isGood(x, propertyName, filter[propertyName])) {
                return false;
            }
        }
        return true
    })

    return newData
}