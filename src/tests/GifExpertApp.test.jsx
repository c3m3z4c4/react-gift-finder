import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en componente <GifExpertApp />', () => {
    test('Debe de coincidir con el snapshot ', () => {
        const { container } = render(<GifExpertApp />);
        // screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('should ', () => {});
});
