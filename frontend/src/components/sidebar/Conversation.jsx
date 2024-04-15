
const Conversation = ({conversation, lastIdx}) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-700 rounded-full p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="my-0 py-1 h-4" />}
    </>
  );
};

export default Conversation;
