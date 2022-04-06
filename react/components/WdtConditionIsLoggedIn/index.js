import React, { useState, useEffect } from 'react'
import { Query, useLazyQuery } from 'react-apollo'
import getSession from '../../queries/getSession.gql'
import { Link } from 'vtex.render-runtime'
import tokens from './tokens'
import styles from './styles.css'

export default function WdtConditionIsLoggedIn(props) {
    const { Then, Else } = props
    const [fetchSession, { data: session, loading: sessionLoading }] = useLazyQuery(getSession)
    const [allowed, setAllowed] = useState(false)
    const [message, setMessage] = useState()

    useEffect(() => fetchSession(), [])
    useEffect(() => {
        if (session && session.profile != null) {
            const url = `/api/dataentities/CL/search?_fields=_all&_where=(email=${session.profile.email})`;
            const options = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.vtex.ds.v10+json",
                    'X-VTEX-API-AppKey': tokens.appKey,
                    'X-VTEX-API-AppToken': tokens.appToken
                },
            };
            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    if (data[0].doctor || data[0].distributor || data[0].distributor2 || data[0].hof || data[0].franchise || data[0].discountClient || data[0].multiply) {
                        setAllowed(true)
                    } else {
                        setAllowed(false)
                        setMessage("Infelizmente o site é restrito apenas para usuários com perfil pré determinado pela MedBeauty, para obter acesso entre em contato por aqui.")
                    }
                })
                .catch(err => console.error('error:' + err));
        } else {
            setAllowed(false)
        }
    }, [session, sessionLoading])

    const handleClick = (e) => {
        e.preventDefault()
        window.location.href = `/login?returnUrl=${window.location.pathname}`
    }

    if (!session) return null
    return ( <
        div className = { styles.containerLoggedIn } > {!allowed ?
            <
            >
            {
                message ? < Link to = "https://medbeauty.com.br/#contact-form"
                target = "_blank"
                className = { styles.responseMessage } > { message } < /Link> : <
                Link onClick = { handleClick }
                className = { styles.loginCta } > Login < /Link>} < / >
                :
                    <
                    Then / >
            } <
            /div>
        );
    }