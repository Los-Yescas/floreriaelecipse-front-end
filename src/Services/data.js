export const getData = (getFunction ,dataSet, errorSet) => {
    getFunction()
    .then(res => {
        dataSet(res.data)
        console.log(res.data);
    })
    .catch(err => {
        console.error(err)
        errorSet(err)
    })
}