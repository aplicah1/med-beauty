import React, { useEffect, useState } from 'react'
import * as S from "./styles"

function Filter({ children }) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => setLoading(false), [])

    if (loading) return null
    return (
        <S.Container>
            <div className="button-open" onClick={() => setOpen(!open)}>Filtrar</div>
            {open &&
                <div className="modal">
                    <div className="overlay" onClick={() => setOpen(false)}></div>
                    <div className="content">
                        <div className="close" onClick={() => setOpen(false)} />
                        {children}
                    </div>
                </div>}
        </S.Container>
    )
}

export default Filter
