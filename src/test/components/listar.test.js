import React from 'react'
import { shallow } from 'enzyme'
import Listar, { cantidad } from '../../components/Listar'
// import { useSelector } from 'react-redux'

describe('Test <Listar />', () => {

    test('Comprobar === longitud array card', () => {
        const card = [
            {
            id: 1,
            url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            precio: '23422',
            nombre: 'Piña', 
            vendedor: 'Jackson', 
            },
            {
                id: 2,
                url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
                precio: '23422',
                nombre: 'Sandia', 
                vendedor: 'Jorge', 
            }
        ]
        const wrapper = shallow(<Listar defaultCard={card} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(`.product`).length).toBe(card.length)
    })
    test('Validar titulo', () => {
        expect(cantidad()).toEqual({nombre: 'jackson'})
    })
    
})
