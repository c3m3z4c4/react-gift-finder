import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />>', () => {
    const title = 'Goku';
    const url = 'https://github.com/goku.jpg';

    test('should match with snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la  imagen cone l URL y el ALT indicado', () => {
        render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo del componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
