import React from 'react';

const Message = (props) => {
    return (
        <div className="ui icon message">
            <i className={`${props.messageIcon} icon`}></i>
            <div className="content">
                <div className="header">
                    {props.messageType}
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

Message.defaultProps = {
    messageType: 'Information!',
    message: 'Invalid operation',
    messageIcon: 'info circle'
}

export default Message;