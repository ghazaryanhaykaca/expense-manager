import React, {Component} from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <a 
                    className="add-button"
                    onClick={() => {
                        this.setState({
                            isOpen: !this.state.isOpen
                        })
                    }}
                >+</a>
                {
                    this.state.isOpen && 
                    <div className="modal-wrapper">
                        <div className="modal-content">Modal content</div>
                        <a 
                            className="modal-close"
                            onClick={() => {
                                this.setState({
                                    isOpen: false
                                })
                            }}
                        >X</a>
                    </div>
                }
            </div>
        );
    }
}