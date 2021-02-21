import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    const handlerSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, {text});
    
        setValue('');
    }

    const handlerChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const handlerUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''});
    }

    return(
        <form className="message-form" onSubmit={handlerSubmit}>
            <input 
                className="tmessage-input"
                placeholder="Send a message..."
                value={value}
                onChange={handlerChange}
                onSubmit={handlerSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={handlerUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
};

export default MessageForm;