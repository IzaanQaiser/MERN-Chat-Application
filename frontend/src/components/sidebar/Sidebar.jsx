import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			{/* <Conversations />
			<LogoutButton /> */}
		</div>
	);
};
export default Sidebar;
