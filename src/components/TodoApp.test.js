const rewire = require("rewire")
const TodoApp = rewire("./TodoApp")
const filterReducer = TodoApp.__get__("filterReducer")
const todosReducer = TodoApp.__get__("todosReducer")
// @ponicode
describe("filterReducer", () => {
    test("0", () => {
        let callFunction = () => {
            filterReducer("Florida", { type: "SHOW_INCOMPLETED" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filterReducer({}, { type: "SHOW_INCOMPLETED" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filterReducer("Florida", { type: "SHOW_COMPLETED" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filterReducer({}, { type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filterReducer("Florida", { type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filterReducer(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("todosReducer", () => {
    test("0", () => {
        let param1 = [{}, {}, {}, "Alabama"]
        let callFunction = () => {
            todosReducer(param1, { task: "Developer", id: "a1969970175", type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = ["Alabama", {}, {}, {}]
        let callFunction = () => {
            todosReducer(param1, { task: "Producer", id: 56784, type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [{}, "Alabama", {}, {}]
        let callFunction = () => {
            todosReducer(param1, { task: "Manager", id: "bc23a9d531064583ace8f67dad60f6bb", type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [{}, {}, {}, {}]
        let callFunction = () => {
            todosReducer(param1, { task: "Developer", id: 12, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [{}, {}, {}, {}]
        let callFunction = () => {
            todosReducer(param1, { task: "Developer", id: 12345, type: "COMPLETE_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            todosReducer([], { task: "", id: -Infinity, type: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
