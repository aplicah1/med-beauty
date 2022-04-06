
import React, { useEffect, useState } from "react"
import styles from "./styles.css"

function SocialNetwork(props) {
  const { redes: data, blockClass } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (!data) return null
  if (loading) return null
  return (
    <div className={`${styles.wdtSocialNetwork} ${blockClass}`}>
      {data.map(item =>
        <a href={item.link} target="_blank">
          <img src={item.iconUrl} alt={item.socialName} />
          {item.showName && <div className={`${styles.name}`}>{item.socialName}</div>}
        </a>)}
    </div>
  )
}

SocialNetwork.schema = {
  title: 'Redes Sociais',
  type: 'object',
  properties: {
    redes: {
      title: 'Items',
      type: 'array',
      items: {
        title: 'Item',
        type: 'object',
        properties: {
          showName: {
            title: "Aparecer o nome?",
            type: 'boolean',
            default: true
          },
          socialName: {
            title: "Nome na rede social?",
            type: 'string',
            default: "@teste"
          },
          link: {
            title: "Link para rede social?",
            type: 'string',
            default: "https://teste.com"
          },
          iconUrl: {
            title: "Icone da Rede Social",
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            }
          }
        }
      }
    }
  }
}



export default SocialNetwork;