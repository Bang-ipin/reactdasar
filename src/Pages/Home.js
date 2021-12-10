import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { DeleteDataUser, getUsersList } from "../actions/userActions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(DeleteDataUser());
  }
  render() {
    return (
      <Container>
        <TableComponent />
      </Container>
    );
  }
}
export default connect()(Home);
