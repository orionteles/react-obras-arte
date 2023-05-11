import Pagina from '@/components/Pagina'
import apiArtes from '@/services/apiArtes'
import Link from 'next/link'
import React from 'react'
import { Table } from 'react-bootstrap'
import { BsSearchHeartFill } from 'react-icons/bs'

const index = ({ artes }) => {

    return (
        <Pagina titulo="Obras de Arte">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Título</th>
                        <th>Artista</th>
                        <th>Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    {artes.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/obras/' + item.id}>
                                    <BsSearchHeartFill />
                                </Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.artist_title}</td>
                            <td>{item.department_title}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const res = await apiArtes.get('/artworks')
    const artes = res.data.data

    return {
        props: { artes },
    }
}