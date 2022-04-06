import React from 'react'
import { SearchBar as VtexSearchBar } from 'vtex.store-components'
import * as S from "./styles"

export default function SearchBar() {
    return (
        <S.Container >
            <VtexSearchBar autoFocus placeholder={"O que você está buscando?"} displayMode="search-button" />
        </S.Container>
    );
}