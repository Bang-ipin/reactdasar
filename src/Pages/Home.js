import React, { Component } from 'react'
import { Container } from 'reactstrap'
import TableComponent from '../components/TableComponent'
import { connect } from "react-redux";
import { getUsersList } from '../actions/userActions';


class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList());
    }
    render() {
        return (
            <Container>
                <TableComponent />
            </Container>
        )
    }
}
export default connect()(Home);