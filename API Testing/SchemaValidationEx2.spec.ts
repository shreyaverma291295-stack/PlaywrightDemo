import {test,expect} from "@playwright/test"
import Ajv from "ajv"

test("Schema validation example 2",async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
    const responsebody=await response.json()
    console.log(responsebody)

    const schema2={
  "type": "object",
  "properties": {
    "userId": {
      "type": "number"
    },
    "id": {
      "type": "number"
    },
    "title": {
      "type": "string"
    },
    "body": {
      "type": "string"
    }
  },
  "required": [
    "userId",
    "id",
    "title",
    "body"
  ]
}

const ajv=new Ajv()
const validate2=ajv.compile(schema2)
validate2(responsebody)
})