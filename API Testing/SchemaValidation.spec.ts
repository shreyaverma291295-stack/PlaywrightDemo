import {test,expect} from "@playwright/test"
import Ajv from "ajv"

test("Schema validation",async({request})=>{
    //send request and get the response
    const response=await request.get("https://mocktarget.apigee.net/json")
    const getresponsebody=await response.json()
    console.log(getresponsebody)


    //define schema
    const schema={
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "state": {
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "city",
    "state"
  ]
}

//check response against schema
const ajv=new Ajv()
const validate=ajv.compile(schema) //return validator function
const isvalid=validate(getresponsebody)
expect(isvalid).toBeTruthy()

})