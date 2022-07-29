function superbowlWin(record) {
    for(let item of record) {
    console.log(item)
        if(item.result === "W") {
    
        return item.year
    }
    }
}
record.find(superbowlWin).year;