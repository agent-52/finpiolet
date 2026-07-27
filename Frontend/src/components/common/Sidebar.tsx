import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <SidebarCard
        name="Dashboard"
        img=""
        onClickFn={(e) => {
          navigate("/dashboard");
        }}
      />
      <SidebarCard
        name="Transactions"
        img=""
        onClickFn={(e) => {
          navigate("/transactions");
        }}
      />
      <SidebarCard
        name="Budgets"
        img=""
        onClickFn={(e) => {
          navigate("/budgets");
        }}
      />
      <SidebarCard
        name="Goals"
        img=""
        onClickFn={(e) => {
          navigate("/goals");
        }}
      />
      <SidebarCard
        name="Analytics"
        img=""
        onClickFn={(e) => {
          navigate("/analytics");
        }}
      />
      <SidebarCard
        name="Saving Planner"
        img=""
        onClickFn={(e) => {
          navigate("/saving-planner");
        }}
      />
      <SidebarCard name="Categories" img="" onClickFn={(e) => {navigate("/categories")}}/>
    </nav>
  );
};

const SidebarCard = ({
  name,
  img,
  onClickFn,
}: {
  name: string;
  img: string;
  onClickFn?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div onClick={onClickFn}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>{name}</div>
    </div>
  );
};
