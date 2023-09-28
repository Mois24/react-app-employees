import { Component } from 'react';

import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            appearStar: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    appear = () => {
        this.setState(({appearStar}) => ({
            appearStar: !appearStar
        }))
    }



    render() {
        const {name, surname, value} = this.props;
        const {increase, appearStar} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase'
        } if (appearStar) {
            classNames += ' like'
        }
    
        return (
            <li className={classNames}>
                <span className='list-group-item-label' onClick={this.appear}>{name} {surname}</span>
                <div className='list-group-item-right'>
                    <input type='text' className='list-group-item-input' defaultValue={value + '$'}/>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type='button'
                            className='btn-cookie btn-sm'
                            onClick={this.onIncrease}>
                            <i className='fas fa-cookie'></i>
                        </button>
    
                        <button type='button'
                            className='btn-trash btn-sm'>
                            <i className='fas fa-trash'></i>
                        </button>
                        <i className='fas fa-star'></i>
                    </div>
                </div>
            </li>
        )
    }
} 

   

export default EmployeesListItem;