import React, { Component } from 'react'
import ajax_loader from './ajax-loader.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={ajax_loader} alt='ajax_loader'></img>
            </div>
        )
    }
}
