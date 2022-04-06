
import React, { useEffect, useState } from "react"
import { FormattedPrice } from "vtex.formatted-price";
import useProduct from "vtex.product-context/useProduct";
import * as S from "./styles"

function ProductInstallments(props) {
    const [Installments, setInstallments] = useState()
    const productContext = useProduct();

    useEffect(() => {
        const selectedItem = productContext.selectedItem
        const Installments = selectedItem.sellers[0].commertialOffer.Installments

        setInstallments(Installments)
    }, [productContext])


    if (!Installments || Installments.length === 0 || Installments === undefined) {
        return null
    } else {
        const largest = Installments.sort((a, b) => a.NumberOfInstallments - b.NumberOfInstallments);
        const installment = largest.reverse()[0];

        return (
            installment.NumberOfInstallments > 1 ?
                <S.Container className={props.blockClass}>ou em até {installment.NumberOfInstallments}x de <FormattedPrice value={installment.Value} /></S.Container>
                : null
        )
    }
}

export default ProductInstallments;