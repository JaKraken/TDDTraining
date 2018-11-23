import React from "react";
import { shallow } from "enzyme";
import HelloWorldReact from "../../src/helloWorldReact";

describe("Hello World", () => {
    test("displays hello world", done => {
        Promise.resolve(shallow(< HelloWorldReact/>))
        .then(component => {
            expect(component.find("#random-text").text()).toBe("HELLO WORLD");
             done();
        })
    })
}) 