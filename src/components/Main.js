import React, {Component} from 'react';
import Dashboard from './Dashboard';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: [
                {
                    name: 'Cash',
                    total: 64123
                },
                {
                    name: 'Credit',
                    total: 200000
                },
                {
                    name: 'Saving',
                    total: 600000
                }
            ],
            records: [
                {
                    type: 'expense',
                    amount: 43000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'transfer',
                    amount: 35000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'income',
                    amount: 100000,
                    category: 'Category 2',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'expense',
                    amount: 43000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'transfer',
                    amount: 35000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'income',
                    amount: 100000,
                    category: 'Category 2',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'expense',
                    amount: 43000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'transfer',
                    amount: 35000,
                    category: 'Category 1',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
                {
                    type: 'income',
                    amount: 100000,
                    category: 'Category 2',
                    description: 'Bla bla bla',
                    date: new Date(),
                },
            ]
        }
    }
    
    render() {
        return (
            <main>
                {
                    this.props.currentPage === 'dashboard' &&
                    <Dashboard 
                        accounts={this.state.accounts}
                        records={this.state.records}
                    />
                }
                {
                    this.props.currentPage === 'records' &&
                    <div>Records</div>
                }
                {
                    this.props.currentPage === 'graphic' &&
                    <div>Graphic</div>
                }
                {
                    this.props.currentPage === 'settings' &&
                    <div>Settings</div>
                }
            </main>
        );
    }
}