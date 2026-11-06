import { test, expect } from "@playwright/test"

const Base_URL = "https://restful-booker.herokuapp.com"
test("Create Booking using Static data", async ({ request }) => {
    //Request payload data    
    const requestpayload = {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
    //send the post request
    const response = await request.post(`${Base_URL}/booking`, { data: requestpayload })
    const responsebody = await response.json()

    //Print the response
    console.log(responsebody)

    //Validate Status Code
    expect(response.status()).toBe(200)
    //Validate Status Message
    expect(response.statusText()).toContain("OK")
    //Validate Properties present or not like booking id,firstname etc
    expect(responsebody).toHaveProperty("bookingid")
    expect(responsebody).toHaveProperty("booking")
    //Validate data type of properties 
    expect(responsebody.bookingid).toEqual(expect.any(Number))//Asymmetric matchers
    expect(responsebody.booking.bookingdates.checkin).toEqual(expect.any(String))
    // console.log(responsebody.booking.bookingdates.checkin)
    console.log(responsebody.booking.firstname)
    // await expect(responsebody.booking.firstname).toEqual()
    //To get the properties from response
    const bookingdata = await responsebody.booking
    //Compare response with request payload
    //expect(bookingdata).toMatchObject(requestpayload)
    expect(bookingdata).toMatchObject({
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    })

    //To validate bookingdates
    //expect(bookingdata.bookingdates).toMatchObject(requestpayload.bookingdates)
    expect(bookingdata.bookingdates).toMatchObject({
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    })



});