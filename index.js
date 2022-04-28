// code your solution here
//function superbowlWin(array){

const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
        //...
      ]
      
superbowlWin = (record) => {
    const won = record.find( record => record.result === "W" );
    return !!won ? won.year : undefined;
}

