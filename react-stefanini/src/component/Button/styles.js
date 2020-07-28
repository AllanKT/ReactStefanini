import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 60px;
    color: var(--white);
    background-color: var(--green);
    border: 0;
    border-radius: 50px;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        filter: brightness(70%);
        transition: 0.3s ease;
    }
`;
