import type { Class } from "../types";

type Props = {
  classes: Class[];
  onSelectedClassId: (classId: number) => void;
  selectedClassId: number | null;
};

const MainSidebar = ({
  classes,
  onSelectedClassId,
  selectedClassId,
}: Props) => {
  return (
    <div
      style={{
        width: "250px",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
      }}
    >
      <ul>
        今年度在籍園児
        {classes.map((classItem) => (
          <ol
            key={classItem.id}
            onClick={() => onSelectedClassId(classItem.id)} // setSelectedClassId(classItem.id)呼び出し
            style={{
              backgroundColor:
                selectedClassId === classItem.id ? "lightblue" : "white",
            }}
          >
            {classItem.name}
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default MainSidebar;
