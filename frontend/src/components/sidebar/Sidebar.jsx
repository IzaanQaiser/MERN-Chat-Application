import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div>
			<SearchInput />
			<Conversations/>
			{/* <LogoutButton /> */} 
		</div>
	);
};
export default Sidebar;
