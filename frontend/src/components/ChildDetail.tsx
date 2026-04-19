import type { Child } from "../types";

type Props = {
  selectedChildInfo: Child | undefined;
};

const ChildDetail = ({ selectedChildInfo }: Props) => {
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <div>
        {selectedChildInfo ? (
          <div>
            <div>名前：{selectedChildInfo.name}</div>
            <div>性別：{selectedChildInfo.sex}</div>
            <div>血液型：{selectedChildInfo.bloodType}</div>
          </div>
        ) : (
          <div>園児を選択してください</div>
        )}
      </div>
    </div>
  );
};

export default ChildDetail;
