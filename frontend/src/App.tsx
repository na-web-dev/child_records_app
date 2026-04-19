import { useState } from "react";
import { classes, children } from "./data/mockData";
import MainSidebar from "./components/MainSidebar";
import ClassList from "./components/ClassList";
import ChildDetail from "./components/ChildDetail";

function App() {
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const [selectedChildId, setSelectedChildId] = useState<number | null>(null);

  // 選択クラス情報
  const selectedClassInfo = classes.find((selectedClass) => {
    return selectedClass.id === selectedClassId;
  });

  // 選択クラスの園児名一覧
  const childrenList = children.filter((child) => {
    return child.classId === selectedClassId;
  });

  // 選択園児情報
  const selectedChildInfo = children.find((child) => {
    return child.id === selectedChildId;
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 左側 */}
      <MainSidebar
        classes={classes}
        onSelectedClassId={setSelectedClassId}
        selectedClassId={selectedClassId}
      />
      {/* 右側 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* 上：クラス名 */}
        <div style={{ padding: "10px" }}>
          {selectedClassInfo
            ? `${selectedClassInfo.name}組`
            : "クラスを選択してください"}
        </div>
        {/* 下：園児一覧＋詳細 */}
        {selectedClassInfo && (
          <div
            style={{ display: "flex", flex: 1, borderTop: "1px solid #ccc" }}
          >
            <ClassList
              childrenList={childrenList}
              onSelectedChildId={setSelectedChildId}
              selectedChildId={selectedChildId}
            />
            <ChildDetail selectedChildInfo={selectedChildInfo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
