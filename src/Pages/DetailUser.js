import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'

export default class DetailUser extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail User</h1>
            </Container>
        )
    }
}
