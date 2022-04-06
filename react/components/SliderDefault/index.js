import { useDevice } from 'vtex.device-detector'
import React, { useEffect, useState } from "react";
import { SliderLayout } from 'vtex.slider-layout'
import styles from './styles.css'

const SliderDefault = (props) => {
    const [loading, setLoading] = useState(true)
    const { isMobile } = useDevice(1);

    useEffect(() => {
        setLoading(false)
    }, [])

    const sliderSettings = {
        showPaginationDots: 'never',
        infinite: true,
        itemsPerPage: {
            desktop: props.slidesToShow?.desktop,
            tablet: props.slidesToShow?.mobile,
            phone: props.slidesToShow?.mobile
        },
        autoplay: { timeout: 4000, stopOnHover: false }
    }

    if (loading) return null
    return (
        <div className={` ${styles.containerSlider} ${props.blockClass}`}>
            <SliderLayout {...sliderSettings}>
                {props.banners?.map((item, index) =>
                    <a href={item.link ? item.link : "#"} className="container" key={index}>
                        <div className="containerText">
                            <h2>{item.title}</h2>
                        </div>
                        {isMobile ?
                            <img
                                src={item.image.mobile}
                                alt={item.image.alt}
                                width="100%"
                                height="auto"
                            />
                            :
                            <img
                                src={item.image.desktop}
                                alt={item.image.alt}
                                width="100%"
                                height="auto"
                            />}
                    </a>)}
            </SliderLayout>
        </div>
    );
}


SliderDefault.schema = {
    title: 'Carousel Principal',
    type: 'object',
    properties: {
        banners: {
            title: 'Items',
            type: 'array',
            items: {
                title: 'Item',
                type: 'object',
                properties: {
                    image: {
                        title: 'Imagens',
                        type: 'object',
                        properties: {
                            desktop: {
                                title: "Banner Principal",
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            mobile: {
                                title: "Mobile banner",
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                }
                            },
                            alt: {
                                title: "Texto alternativo das imagens",
                                type: 'string',
                                default: "#"
                            }
                        }
                    },
                    title: {
                        title: "Título",
                        type: 'string',
                        default: "Faça upgrade para um áudio 3D poderoso e conectado em um design compacto",
                        widget: {
                            'ui:widget': 'textarea',
                        }
                    },
                    link: {
                        title: "Link",
                        type: 'string',
                        default: "#"
                    }
                }
            }
        }
    }
}

export default SliderDefault;