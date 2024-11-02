import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import PlayGameButton from "./GamePlayButton";
const SideBar = () => {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <PlayGameButton />
      <LogoutButton />
    </div>
  );
};
export default SideBar;
