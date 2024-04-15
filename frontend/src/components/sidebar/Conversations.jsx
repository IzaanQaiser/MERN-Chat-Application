import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation'

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS: ", conversations)
  return (
    <div className='py-2 pr-2 overflow-auto'>

    {conversations.map((conversation, idx) =>(
      <Conversation 
      key = {conversation._id}
      conversation = {conversation}
      lastIdx = {idx === conversations.length - 1}
      />
    ))}

        {loading ? <span className='loading loading-spinner mx-autto'></span> : null}
    </div>
  )
}

export default Conversations
