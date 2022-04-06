import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as S from './styles';
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { FormattedPrice } from "vtex.formatted-price";

function ShippingProductPage({ value }) {
    const [requiredPrice, setRequiredPrice] = useState(1000);
    const [missingPrice, setMissingPrice] = useState(Number);
    const [calculatedValue, setCalculatedValue] = useState(0);

    const minicart = useOrderForm();
    const applyCalculations = () => {
        if (value) {
            setRequiredPrice(value)
        }
        let minicartValue = (minicart.orderForm.value / 100).toFixed(2);
        setMissingPrice(requiredPrice - minicartValue)
        setCalculatedValue((minicartValue / requiredPrice) * 100)
    }

    useEffect(() => applyCalculations(), [minicart]);


    return (
        <S.Container calculatedValue={calculatedValue}>
            <div className="message">
                <div>
                    <div className="message-default">Frete grátis acima de R$ {requiredPrice}</div>
                    {missingPrice > 0 ? (
                        <span className="price">Faltam <FormattedPrice value={missingPrice} /> para ganhar frete grátis</span>
                    ) : (
                        <span>Seu frete é grátis!</span>
                    )}
                </div>
            </div>
            <span className="background-progress">
                <div className="percentage-bar"></div>
            </span>
        </S.Container>
    )
}

ShippingProductPage.schema = {
    type: 'object',
    title: 'Pagina de Produto - Valor mínimo para frete grátis',
    properties: {
        value: {
            type: 'number',
            title: "Valor",
            default: 200
        }
    }
};

export default ShippingProductPage
