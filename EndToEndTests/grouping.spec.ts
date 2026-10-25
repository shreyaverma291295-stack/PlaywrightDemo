import {test,expect} from "@playwright/test"
/* 
test("test1",async({page})=>{
        console.log("Execution of test 1")
    });

    test("test2",async({page})=>{
        console.log("Execution of test 2")
    });

    test("test3",async({page})=>{
        console.log("Execution of test 3")
    });

    test("test4",async({page})=>{
        console.log("Execution of test 4")

    }); */


test.describe("Group1",async()=>{
    test("test1",async()=>{
        console.log("Execution of test 1")
    })

    test("test2",async()=>{
        console.log("Execution of test 2")
    })
})


test.describe("Group2",async()=>{
    test("test3",async()=>{
        console.log("Execution of test 3")
    })

    test("test4",async()=>{
        console.log("Execution of test 4")
    })
}) 