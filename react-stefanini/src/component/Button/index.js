import React from 'react';

import { Container } from './styles';

export default function Button({ name }) {
    return (
        <>
            <Container type="submit">{name}</Container>
        </>
    )
}
