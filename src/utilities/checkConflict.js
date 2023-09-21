//main method to check if two times overlap => t1 and t2
//they will be in form of "days times" => we would already assume they have same term if we call this helper! 
const checkOverlap = (t1, t2) => {
    //check edge case: either of the two inputs are empty string => no conflict!
    if(t1.length === 0 || t2.length === 0){
        return true; 
    }
    const [t1Days, t1Times]= t1.split(" "); 
    const [t2Days, t2Times] = t2.split(" ");
    //call helper function here to get low to high range of days!
    const t1DayVals = getAllDays(t1Days);
    console.log(`t1DayVals: ${t1DayVals}`)
    const t2DayVals = getAllDays(t2Days);
    console.log(`t2DayVals: ${t2DayVals}`);

    const hasOverlappingDay = checkOverlappingDays(t1DayVals, t2DayVals); 
    console.log(`hasOverlappingDay: ${hasOverlappingDay}`)
    //check there is at least one day overlap! 
    if(hasOverlappingDay){
        //then check if times overlap! 
        const [lowT1Time, highT1Time] = t1Times.split("-");
        const [lowT2Time, highT2Time] = t2Times.split("-");
        const [lowT1Hr, lowT1Min] = lowT1Time.split(":");
        const [highT1Hr, highT1Min] = highT1Time.split(":");
        const [highT2Hr, highT2Min] = highT2Time.split(":");
        const [lowT2Hr, lowT2Min] = lowT2Time.split(":");
        const lowT1Int = parseInt(lowT1Hr + lowT1Min);
        console.log(`lowT1Int: ${lowT1Int}`)
        const lowT2Int = parseInt(lowT2Hr + lowT2Min);
        console.log(`lowT2Int: ${lowT2Int}`)
        const highT1Int = parseInt(highT1Hr + highT1Min);
        console.log(`highT1Int: ${highT1Int}`)
        const highT2Int = parseInt(highT2Hr + highT2Min);
        console.log(`highT2Int: ${highT2Int}`)
        //if any of these conditions are true, then there is no time conflict! 
        const check1 = lowT1Int > highT2Int; 
        console.log("check1: ", check1); 
        const check2 = highT1Int < lowT2Int; 
        console.log(`check2: ${check2}`)
        const check3 = lowT2Int > highT1Int; 
        console.log(`check3: ${check3}`)
        const check4 = highT2Int < lowT1Int; 
        console.log(`check4: ${check4}`)
        if(check1 || check2 || check3 || check4){
            return false; 
        }
        //if all cond false => implies two time intervals does overlap to some degree! 
        else{
            return true; 
        }
    } else {
        return false; 
    }


}

//helper function to get the low to high range of days string => 
const getAllDays = (days) => {
    const map = {"M": 0, "Tu": 1, "W": 2, "Th": 3, "F": 4, "Sat": 5, "Sun": 6};
    const length = days.length; 
    //current day string we built up! 
    var curDay = ""; 
    const ans = []; 

    for(var i = 0; i < length; i+=1){
        //append ith char for concatenating! 
        curDay += days[i];
        if(curDay in map){
            //get day value from map obj! 
            const curDayVal = map[curDay]; 
            ans.push(curDayVal); 
            //reset cur day string! 
            curDay=""
        }
    }

    return ans; 
}

//helper to check if two array inputs, rep. integer vals of days, have anything in common! If they do, return true. Otherwise, 
//return false! 
const checkOverlappingDays = (arr1, arr2) => {
    var flag = false; 
    for(var i = 0; i < arr1.length; i+=1){
        const cur = arr1[i];
        //if current ith element in first array also exists in 2nd array, then it's implied both schedule share
        //at least one overlapping day! 
        if(arr2.indexOf(cur) != -1){
            flag = true; 
            break; 
        }
    }
    return flag; 
}

export default checkOverlap; 
