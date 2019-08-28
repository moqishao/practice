function change(object) {
    let arr = [];
    for(let i=0; i < Object.keys(object).length; i++){ arr[i] = [];
        arr[i].push(Object.keys(object)[i]);
        arr[i].push(object[Object.keys(object)[i]].Math);
        arr[i].push(object[Object.keys(object)[i]].English);
        arr[i].push(object[Object.keys(object)[i]].Music);
    }
    return arr;
}