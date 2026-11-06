import { test, expect } from "@playwright/test"
import fs from 'fs'


const Base_URL = "https://restful-booker.herokuapp.com"

test("Create Booking using JSON data", async ({ request }) => {
    //Request payload data 

    //reading data from Json
    const jsonpath = "testdata/booking_Post.json"
    const requestpayload = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))


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
    const bookingdata = responsebody.booking
    //Compare response with request payload
    //expect(bookingdata).toMatchObject(requestpayload)
    expect(bookingdata).toMatchObject({
        "firstname": requestpayload.firstname,
        "lastname": requestpayload.lastname,
        "totalprice": requestpayload.totalprice,
        "depositpaid": requestpayload.depositpaid,
        "bookingdates": {
            "checkin": requestpayload.bookingdates.checkin,
            "checkout": requestpayload.bookingdates.checkout
        },
        "additionalneeds": requestpayload.additionalneeds
    })

    //To validate bookingdates
    //expect(bookingdata.bookingdates).toMatchObject(requestpayload.bookingdates)
    expect(bookingdata.bookingdates).toMatchObject({
        "checkin": requestpayload.bookingdates.checkin,
        "checkout": requestpayload.bookingdates.checkout
    })



});