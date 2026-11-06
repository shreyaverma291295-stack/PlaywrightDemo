//create booking-->booking id
//booking id--->Get booking details
//booking id +request payload(json)--->Partial update of booking (patch)
//bookingid+requestpayload(json)---->Full update of booking(put)
//booking id-->delet the booking

import { test, expect } from "@playwright/test"
import fs from 'fs'
//Base url
const Base_URL = "https://restful-booker.herokuapp.com"
//utility function for reading data from Json file
function readjson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}


test("Create ,get ,partial update ,full update and delete the booking", async ({ request }) => {

    //create a new booking using post request 
    const createbookingdata = readjson("./testdata/booking_Post.json")
    const createresponse = await request.post(`${Base_URL}/booking`, { data: createbookingdata })
    const createbooking = await createresponse.json()
    const bookingId = await createbooking.bookingid //extracting booking id from json respnse body
    console.log("Booking id generated is", bookingId)



    //Get the booking using booking id--https://restful-booker.herokuapp.com/booking/322
    const getresponse = await request.get(`${Base_URL}/booking/${bookingId}`)
    const bookingdetails = await getresponse.json()
    console.log("Booking details using get method ", bookingdetails)
    /* expect(getresponse.status).toEqual(200)
    expect(getresponse.statusText).toEqual("OK") */




    //create token for update,patch and delete request
    const tokendata = readjson("./testdata/tokencreation.json")
    const tokenresponse = await request.post(`${Base_URL}/auth`, { data: tokendata })
    const tokenJson = await tokenresponse.json()
    const token = tokenJson.token //extracting token from response
    console.log("Token generated is ", token)
    /* expect(tokenresponse.status).toEqual(200)
    expect(tokenresponse.statusText).toEqual("OK") */



    //Partial update the booking using Patch request with body ,header
    const Patchrequestdata = readjson("./testdata/Partial_Update.json")
    const updatedresponsedata = await request.patch(`${Base_URL}/booking/${bookingId}`,
        {

            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${token}`,

            },
            data: Patchrequestdata,
        })
    const patchdata = await updatedresponsedata.json()
    console.log("Booking details partially updated as", patchdata)
    /* expect(updatedresponsedata.status).toEqual(200)
       expect(updatedresponsedata.statusText).toEqual("OK") */




    ////Full update the booking using Patch request with body ,header
    const Fullrequestdata = readjson("./testdata/Full_update.json")
    const Fullupdatedresponsedata = await request.put(`${Base_URL}/booking/${bookingId}`,
        {

            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${token}`,

            },
            data: Fullrequestdata,
        })
    const Fulldata = await Fullupdatedresponsedata.json()
    console.log("Booking details fully updated as", Fulldata)
    /* expect(Fullupdatedresponsedata.status).toBe(200)
    expect(Fullupdatedresponsedata.statusText).toBe("OK") */


    //delete the booking using token https://restful-booker.herokuapp.com/booking/4708
    const deletedata = await request.delete(`${Base_URL}/booking/${bookingId}`,
        {

            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${token}`,

            },
        })
    /* expect(deletedata.status).toBe(201)
    expect(deletedata.statusText).toBe("Created") */
    console.log("Delete operation performed successfully")

})