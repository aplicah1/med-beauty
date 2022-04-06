import * as S from './styles'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'

export default function ProductSpecifications({ blockClass }) {
  const [specifications, setSpecifications] = useState()
  const productContext = useProduct()

  useEffect(() => {
    let imageOneFiltered = productContext.product.items.map(item =>
      item.images.filter(item => item.imageLabel === "descricao1"))
    let imageTwoFiltered = productContext.product.items.map(item =>
      item.images.filter(item => item.imageLabel === "descricao2"))
    let imageThreeFiltered = productContext.product.items.map(item =>
      item.images.filter(item => item.imageLabel === "descricao3"))
    let imageFourFiltered = productContext.product.items.map(item =>
      item.images.filter(item => item.imageLabel === "descricao4"))
    let imageFiveFiltered = productContext.product.items.map(item =>
      item.images.filter(item => item.imageLabel === "descricao5"))
    let textOneFiltered = productContext.product.properties.filter(item =>
      item.name === "Especificação 1")
    let textTwoFiltered = productContext.product.properties.filter(item =>
      item.name === "Especificação 2")

    setSpecifications({
      one: {
        images: {
          imageOne: imageOneFiltered?.[0],
          imageTwo: imageTwoFiltered?.[0],
          imageThree: imageThreeFiltered?.[0]
        },
        text: textOneFiltered
      },
      two: {
        images: {
          imageOne: imageFourFiltered?.[0],
          imageTwo: imageFiveFiltered?.[0]
        },
        text: textTwoFiltered
      }
    })
  }, [productContext])

  if (!specifications) return null
  return (
    <S.Container>
      {specifications.one.text.length > 0 && specifications.one.images.imageOne.length > 0 && specifications.one.images.imageTwo.length > 0 &&
        <div className="description-1">
          <div className="row-1">
            {specifications.one.text &&
              <div
                dangerouslySetInnerHTML={{ __html: specifications.one.text[0]?.values }}
                className="text"
              />}
            {specifications.one.images.imageOne &&
              <div className="img">
                <img
                  src={specifications.one.images.imageOne[0]?.imageUrl}
                  alt={specifications.one.images.imageOne[0]?.imageText}
                />
              </div>}
          </div>
          <div className="row-2 ">
            {specifications.one.images.imageTwo &&
              <img
                src={specifications.one.images.imageTwo[0]?.imageUrl}
                alt={specifications.one.images.imageTwo[0]?.imageText}
              />}
            {specifications.one.images.imageThree &&
              <img
                src={specifications.one.images.imageThree[0]?.imageUrl}
                alt={specifications.one.images.imageThree[0]?.imageText}
              />}
          </div>
        </div>}
      {specifications.two.text.length > 0 && specifications.two.images.imageOne.length > 0 && specifications.two.images.imageTwo.length > 0 &&
        <div className="description-2">
          <div className="flex items-center">
            <div className="col-1">
              {specifications.two.text &&
                <div
                  dangerouslySetInnerHTML={{ __html: specifications.two.text[0]?.values }}
                  className="text"
                />}
              {specifications.two.images.imageOne &&
                <img
                  src={specifications.two.images.imageOne[0]?.imageUrl}
                  alt={specifications.two.images.imageOne[0]?.imageText}
                />}
            </div>
            <div className="col-2">
              {specifications.two.images.imageTwo &&
                <img
                  src={specifications.two.images.imageTwo[0]?.imageUrl}
                  alt={specifications.two.images.imageTwo[0]?.imageText}
                />}
            </div>
          </div>
        </div>}
    </S.Container>
  )
}
