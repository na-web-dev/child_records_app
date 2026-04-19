import type { Child } from "../types";

type Props = {
  childrenList: Child[];
  onSelectedChildId: (childId: number) => void;
  selectedChildId: number | null;
};

const ClassList = ({
  childrenList,
  onSelectedChildId,
  selectedChildId,
}: Props) => {
  return (
    <div
      style={{
        width: "300px",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
      }}
    >
      <ul>
        園児名
        {childrenList.map((child) => (
          <ol
            key={child.id}
            onClick={() => onSelectedChildId(child.id)}
            style={{
              backgroundColor:
                selectedChildId === child.id ? "lightblue" : "white",
            }}
          >
            {child.name}
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
