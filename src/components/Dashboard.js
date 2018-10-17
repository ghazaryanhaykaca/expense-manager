import React, {Component} from 'react';

export default class Dashboard extends Component {

    render () {
        return (
            <div className="dashboard">
                <h1>
                    Total: 
                    {
                        this.props.accounts.reduce((acc, account) => {
                            acc += account.total
                            return acc;
                        }, 0)
                    }
                </h1>
                <div className="accounts">
                    {
                        this.props.accounts.map((account, index) => {
                            return (
                                <div key={index} className="account">
                                    <h2>{account.name}</h2>
                                    <div>{account.total}</div>
                                </div>
                            );
                        })
                    }
                </div>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.records.map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{record.amount}</td>
                                        <td>{record.type}</td>
                                        <td>{record.category}</td>
                                        <td>{record.date.toLocaleDateString()}</td>
                                        <td>{record.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}