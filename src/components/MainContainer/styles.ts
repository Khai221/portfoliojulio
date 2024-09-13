import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 769px and max-width: 1024px) {
        max-width: 1024px;
        width: 100%;
        padding: 0;

    }

    @media (max-width: 768px) {
        max-width: 768px;
        width: 100%;
        padding: 0;

    }
`