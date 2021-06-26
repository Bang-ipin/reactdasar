import React, { Component } from 'react'
import { Container } from 'reactstrap'
import TableComponent from '../components/TableComponent'
import { connect } from "react-redux";
import { DeleteUserDetail, getUsersList } from '../actions/userActions';


class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList());
        this.props.dispatch(DeleteUserDetail());
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