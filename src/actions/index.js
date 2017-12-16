export const loadingData = ()=> {
    const puraniHaveliData = puraniHaveliInternalDataCall()
    console.log("action called  : LOAD_HAVELI_DATA")
    return {
        type : "LOAD_HAVELI_DATA",
        payload : puraniHaveliData
    }
}

function puraniHaveliInternalDataCall(){
    const data = {
        flatType : "2-BHK",
        roomDetails : {
            noOfWashRooms : 1,
            noOfBedRooms : 2,
            noOfHalls : 1,
            isTempleThere : true,
            isFurnished : false,
            maxNoOfPeopleToStay : 6
        },
        ownerDetails : {
            name : "Nandan Bla Bla",
            mobile : 1234567890
        },
        roomMatesList : [
            {
                name : "Pankaj Maurya",
                age : 23
            },
            {
                name : "Vinit Rohela",
                age : 25
            },
            {
                name : "Abhishek Baba",
                age : 24
            },
            {
                name : "KK Nayak",
                age : 23
            },
            {
                name : "Ajay Yadav",
                age : 25
            }
        ]
    }
    return data;
}