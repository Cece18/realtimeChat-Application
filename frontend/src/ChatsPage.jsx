import { PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow 
            projectId='ca03dbee-026c-4e0e-a101-ef6d5974cdeb'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
        </div>
    )
}
export default ChatsPage