import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="p-6 space-y-4">
			<SearchInput />
			<Conversations/>
			<LogoutButton /> 
		</div>
	);
};
export default Sidebar;
