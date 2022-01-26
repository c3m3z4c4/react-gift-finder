import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un Titulo';
    const url = 'https://localhost:3000';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('Debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title )
    })
    
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src)
        // console.log(img.prop('url'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('debe de tener animate__ ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        expect(className.includes('animate__fadeInUp')).toBe(true);

    })
    
    
})

