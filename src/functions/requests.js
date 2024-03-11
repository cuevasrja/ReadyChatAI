import axios from 'axios';

//GET from https://www.dev.readychatai.com/messages_json
/*
GET /messages_json
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    {
        "id": 29,
        "business_id": 84,
        "sender_name": "unknown",
        "message_text": "hello good morning",
        "message_date": "2024-02-29T15:10:51Z",
        "platform": "whatsapp",
        "sender_number": 584246018872,
        "received_number": 15550926585,
        "bot_sender": 0,
        "reply_to_id": 1
    },
    ...
]
*/

const client = axios.create({
    baseURL: 'https://www.dev.readychatai.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getMessages = async () => {
    const response = await client.get('/messages_json?format=json');
    return response.data;
}
