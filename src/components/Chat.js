import Message from "./Message";

const Chat = ({ chat }) => {
    const user = chat.findLast(c => c.sender_name !== 'bot')?.sender_name;
    return (
        <>
            <h1>Conversation with <span>{user}</span></h1>
            <ul id="chat">
                {chat.map((c, i) => (
                    <Message key={i} msg={c} chat={chat} />
                ))}
            </ul>
        </>
    );
}

export default Chat;