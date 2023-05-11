import Pagina from '@/components/Pagina'
import apiArtes from '@/services/apiArtes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {MdOutlineZoomOutMap} from 'react-icons/md'
import {FaHandPointLeft} from 'react-icons/fa'

const Detalhes = ({ arte }) => {
    return (
        <Pagina titulo={arte.title}>
            <Row>

                {arte.image_id &&
                    <Col md={4}>
                        <Card border="danger">
                            <Card.Header className='bg-danger text-white'>Foto</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top"
                                    src={"https://www.artic.edu/iiif/2/" + arte.image_id + "/full/843,/0/default.jpg"} />

                                <a className='mt-2 btn btn-primary' target="_blank" href={"https://www.artic.edu/iiif/2/" + arte.image_id + "/full/843,/0/default.jpg"}>
                                    Ampliar <MdOutlineZoomOutMap />
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                }

                <Col md={arte.image_id ? 8 : 12}>
                    <Card border="danger">
                        <Card.Header className='bg-danger text-white'>Foto</Card.Header>
                        <Card.Body>
                            <p><strong>Artista: </strong> {arte.artist_title}</p>
                            <p><strong>Departamento: </strong> {arte.department_title}</p>
                            <p><strong>Origem: </strong> {arte.place_of_origin}</p>
                            <p><strong>Dimensões: </strong> {arte.dimensions}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Link className='btn btn-success mt-2' href={'/obras'}>
                <FaHandPointLeft /> Voltar
            </Link>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiArtes.get('/artworks/' + id)
    const arte = res.data.data

    return {
        props: { arte }
    }
}
