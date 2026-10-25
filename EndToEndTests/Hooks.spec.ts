import {test,expect} from "@playwright/test"
test.beforeAll("Before All",()=>{
    console.log("It will be executed before all tests")
})

test.afterAll("After All",()=>{
    console.log("It will be executed after all tests")
})

test.beforeEach("Before each",()=>{
    console.log("It will be executed before each test")
})
test.afterEach("After each",()=>{
    console.log("It will be executed after each test")
})



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

    });