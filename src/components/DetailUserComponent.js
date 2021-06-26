import React from 'react'
import { connect } from "react-redux";
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
    return{
        getUserDetail : state.users.getUserDetail,
        errorUserDetail : state.users.errorUserDetail
    };
};
const DetailUserComponent = (props) => {
    return (
        <Table striped>
          <tbody>
            <tr>
              <td width="10%">Nama</td>
              <td width="5%">:</td>
              <td>{props.getUserDetail.nama}</td>
            </tr>
            <tr>
              <td width="10%">Alamat</td>
              <td width="5%">:</td>
              <td>{props.getUserDetail.alamat}</td>
            </tr>
            <tr>
              <td width="10%">Umur</td>
              <td width="5%">:</td>
              <td>{props.getUserDetail.umur}</td>
            </tr>
          </tbody>
        </Table>
      );
}

export default connect(mapStateToProps,null)(DetailUserComponent);
