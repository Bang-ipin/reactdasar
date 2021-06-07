import React, { Component } from 'react'
import { Container } from 'reactstrap'
import TableComponent from '../components/TableComponent'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <TableComponent />
            </Container>
        )
    }
}
