import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableForm extends Component {

  handleClickEdit=(maSV) => {
     const action={
      type: 'EDIT_STUDENT',
      payload:maSV
     }
     this.props.dispatch(action);
  }

  handleClickDELE=(maSV) => {
     const action={
       type: 'DELETE_STUDENT',
       payload:maSV
     }
     this.props.dispatch(action);
  }

  render() {
    let{arrayStudent}=this.props;
    return (
        <div>
        <table className="table mt-2">
            <thead className="bg-dark text-light p-2">
                <tr>
                    <th>Ma SV</th>
                    <th>Ho Ten</th>
                    <th>So Dien Thoai</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

             {arrayStudent.map((student)=>{
                return <tr>
                   <td>{student.maSV}</td>
                   <td>{student.sdt}</td>
                   <td>{student.name}</td>
                   <td>{student.email}</td>
                   <td><button class="btn btn-primary me-2" 
                   onClick={() =>{this.handleClickEdit(student.maSV)}}>EDIT</button>
                   <button class="btn btn-primary" 
                   onClick={() =>{this.handleClickDELE(student.maSV)}}>XOA</button></td>
                </tr>
             })}
             
            </tbody>
        </table>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
   arrayStudent : state.infoReducer.arrayStudent
})

export default connect(mapStateToProps)(TableForm)

//rcredux