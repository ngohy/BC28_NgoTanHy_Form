import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormInfo extends Component {

    handleChange = (e) => {
        let { id, value } = e.target;
        const action = {
            type: 'HANDLE_CHANGE',
            payload: {
                id,
                value
            }
        }
        this.props.dispatch(action);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const action = {
            type: 'HANDLE_SUBMIT',
            payload: this.props.infoStudent
        }

        this.props.dispatch(action);
    }
    
    handleUpdate= () => {
        const action = {
            type: 'UPDATE_STUDENT',
            payload: this.props.infoStudent
        }
        this.props.dispatch(action);

        // console.log(this.props.infoStudent);
    }
    

    render() {
        let { infoStudent } = this.props
        return (
            <div className='row' >
                <div className="col-6">
                    <div className="form-group">
                        <p>Ma SV</p>
                        <input type="text" className="form-control" id='maSV' value={infoStudent.maSV}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <p>So dien thoai</p>
                        <input type="number" className="form-control" id='sdt' value={infoStudent.sdt}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success mt-2"
                        onClick={this.handleSubmit}
                        >Them sinh vien</button>
                        <button className="btn btn-primary mt-2 ms-2"
                        onClick={()=>{
                            this.handleUpdate()
                        }}
                        >update sinh vien</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Ho va ten</p>
                        <input type="text" className="form-control" id='name' value={infoStudent.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <p>Email</p>
                        <input type="email" className="form-control" id='email' value={infoStudent.email}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    infoStudent: state.infoReducer.infoStudent
})

export default connect(mapStateToProps)(FormInfo)