import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


/**
 * 
 * 
 * @class FlashMessage
 * @extends {React.Component}
 */
class FlashMessage extends React.Component {
    /**
     * 
     * @returns {FlashMessage} Deletes Flash Message
     * @memberof FlashMessage
     */
    componentWillUnmount() {
        this.props.deleteFlashMessage(this.props.message.id);
    }


    /**
     * @returns {FlashMessage} This displays the message format
     * @memberof FlashMessage
     */
    render() {
        const { type, text } = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error',
                'alert-info': type === 'info'
            })}>
                {(Object.prototype.hasOwnProperty.call(text, 'message') &&
        typeof text.message === 'object') &&
            <ul>
                { text.message.map((value, index) =>
                    <li key={index}>{value.message}</li>
                ) }
            </ul>
                }
                {(Object.prototype.hasOwnProperty.call(text, 'message') &&
            typeof text.message === 'string') &&
              text.message
                }

                {typeof text === 'string' &&
          text
                }
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
