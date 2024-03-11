const Message = ({ msg, chat }) => {
    const reply = msg.reply_to_id ? chat.find(c => c.id === msg.reply_to_id) : null;
    return (
        <li className={msg.sender_name === 'bot' ? 'bot' : 'user'}>
            <p className="number">{msg.sender_number}</p>
            {reply ?
                <p className="reply">
                    {`Replying to ${reply.sender_name}: "${reply.message_text}"`}
                </p>
                : null
            }
            <p className="msg">{msg.message_text}</p>
        </li>
    );
}

export default Message;