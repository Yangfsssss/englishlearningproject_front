import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, RenderResult} from "@testing-library/react"
import {prettyDOM} from '@testing-library/dom'


import {Provider} from "react-redux";
import store from "../../store"
import NewStudy from './NewStudy'



describe('NewStudy module',()=>{
    let component:RenderResult

    beforeEach(()=>{
        component = render(
            <Provider store={store}>
                <NewStudy />
            </Provider>
        )
    })

    test('title input',()=>{
        const inputsBefore = component.container.querySelectorAll('input')
        const buttonsBefore = component.container.querySelectorAll('button')
        const spansBefore = component.container.querySelectorAll('span')

        expect(inputsBefore).toHaveLength(4)
        expect(buttonsBefore).toHaveLength(4)
        expect(spansBefore).toHaveLength(4)

        const titleInput = inputsBefore[0]

        fireEvent.change(titleInput,{
            target:{
                value:'Test Title'
            }
        })

        const titleAddButton = buttonsBefore[0]

        fireEvent.click(titleAddButton)

        const inputsAfter = component.container.querySelectorAll('input')
        const buttonsAfter = component.container.querySelectorAll('button')
        const spansAfter = component.container.querySelectorAll('span')


        expect(inputsAfter).toHaveLength(3)
        expect(buttonsAfter).toHaveLength(3)
        expect(spansAfter).toHaveLength(5)

        expect(spansAfter[1]).toHaveTextContent('Test Title')
    })

    test('url input',()=>{
        const inputsBefore = component.container.querySelectorAll('input')
        const buttonsBefore = component.container.querySelectorAll('button')
        const spansBefore = component.container.querySelectorAll('span')

        expect(inputsBefore).toHaveLength(4)
        expect(buttonsBefore).toHaveLength(4)
        expect(spansBefore).toHaveLength(4)

        const urlInput = inputsBefore[1]

        fireEvent.change(urlInput,{
            target:{
                value:'Test Url'
            }
        })

        const urlAddButton = buttonsBefore[1]

        fireEvent.click(urlAddButton)

        const inputsAfter = component.container.querySelectorAll('input')
        const buttonsAfter = component.container.querySelectorAll('button')
        const spansAfter = component.container.querySelectorAll('span')


        expect(inputsAfter).toHaveLength(3)
        expect(buttonsAfter).toHaveLength(3)
        expect(spansAfter).toHaveLength(5)

        expect(spansAfter[2]).toHaveTextContent('Test Url')
    })



    test('words input',()=>{
        const liBefore = component.container.querySelectorAll('li')

        expect(liBefore).toHaveLength(0)

        const wordInput = component.container.querySelectorAll('input')[2]

        fireEvent.change(wordInput,{
            target:{
                value:'test1@测试1'
            }
        })

        const wordAddButton = component.container.querySelectorAll('button')[2]

        fireEvent.click(wordAddButton)

        const liAfter1 = component.container.querySelectorAll('li')

        expect(liAfter1).toHaveLength(1)
        expect(liAfter1[0]).toHaveTextContent('test1 测试1')

        fireEvent.change(wordInput,{
            target:{
                value:'test2@测试2'
            }
        })

        fireEvent.click(wordAddButton)

        const liAfter2 = component.container.querySelectorAll('li')


        expect(liAfter2).toHaveLength(2)
        expect(liAfter2[1]).toHaveTextContent('test2 测试2')

    })

})