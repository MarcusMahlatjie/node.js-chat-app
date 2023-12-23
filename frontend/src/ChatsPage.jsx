import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '6807bdfc-a97a-4f5c-8b37-fb90561b3316', 
        props.user.username, 
        props.user.secret
    );
    return (
        < div style = {{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style = {{height: '100vh'}} />
        </div>      
    )
}

export default ChatsPage