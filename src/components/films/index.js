import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carte } from '../../utils/card';
export const Films = ({Film}) => {
    return (
        <div>
            <Container>
                <Row>
                    {Film && Film.map((movie) => {
                        return (<Col md={3} key={movie.id}>
                                <Carte movie={movie}  />
                                </Col>)
                    })}

                </Row>
            </Container>
        </div>
    )
}
