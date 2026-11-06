import {expect,test} from "@playwright/test"
import { buffer } from "node:stream/consumers"
import fs from 'fs'
const TextFileUpload:string=''

test.describe.serial("Upload and Download file using API chaining ",()=>{
test("Upload file",async({request})=>{
   const response= await request.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
            multipart:{
                file:{
                    name:"NameShreya.txt",
                    mimeType:"text/plain",
                    buffer:fs.readFileSync("./Uploadfile/NameShreya.txt")
                }
            }
        }
        
    )
    const responsebody=await response.json()
    expect(responsebody.originalname).toBe("NameShreya.txt")
    const TextFileUpload=responsebody.filename
    console.log(TextFileUpload)

})


test("Download file",async({request})=>{
   const dlfileresponse= await request.get(`https://api.escuelajs.co/api/v1/files/${TextFileUpload}`)
   const response=await dlfileresponse.text()
   //expect(dlfileresponse.status()).toBe(200)
   //expect(response).toContain("Shreya Verma")
   console.log(response)
})
})
