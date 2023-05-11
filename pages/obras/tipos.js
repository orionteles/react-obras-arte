import Pagina from '@/components/Pagina'
import apiArtes from '@/services/apiArtes'
import React from 'react'

const tipos = ({ tipos }) => {
    return (
        <Pagina titulo="Tipos de Obras de Arte">
            <ul>
                {tipos.map(item => (
                    <li key={item.id}>{item.title} (Atualizado em: {item.updated_at})</li>
                ))}
            </ul>
        </Pagina>
    )
}

export default tipos

export async function getServerSideProps(context) {

    const res = await apiArtes.get('/artwork-types')
    const tipos = res.data.data

    return {
        props: { tipos },
    }
}