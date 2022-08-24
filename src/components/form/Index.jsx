import React, { Component } from 'react'
import FormInfo from './FormInfo';
import TableForm from './TableForm';

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark text-light p-2">
                    <h3>Thong Tin Sinh Vien</h3>
                </div>
                <div className="">
                    <FormInfo />
                </div>
                <div className="">
                    <TableForm/>
                </div>
            </div>
        );
    }
}

