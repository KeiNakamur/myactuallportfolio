import React from 'react';

class Created extends React.Component{
    render(){

        return (
            <div className='created-main'>
                <ul className='created-lists'>
                    <div className='created-lists-container'>
                        <div className='created-title'>
                            <li>{this.props.title}</li>
                        </div>    
                            
                        <div className='created-description'>
                            <li>{this.props.description}</li>
                        </div>

                        <div className='created-url'>
                            <li>{this.props.url}</li>
                        </div>             
                    </div>
                </ul>
            </div>
        )
    }
}

export default Created;