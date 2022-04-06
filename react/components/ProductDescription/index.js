import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useProduct from "vtex.product-context/useProduct"
import { index as RichText } from 'vtex.rich-text'

function WhyBuyFromFuture(props) {
  const [description, setDescription] = useState()
  const productContext = useProduct()

  useEffect(() => {
    setDescription(productContext.product.description)
  }, [productContext])

  if (!description) return null
  return (
    <S.Container>
      <RichText text={description} />
    </S.Container>
  )
}

export default WhyBuyFromFuture
