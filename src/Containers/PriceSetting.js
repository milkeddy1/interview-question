import { AgeInput, PriceInput } from "../Components";
import { Divider, Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
function PriceSetting({
  id,
  removeSettings,
  ageValue,
  priceValue,
  selectAgeRange,
  isRangeOverlapped,
  priceHandle,
}) {
  const { Text } = Typography;
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text level={2}>價格設定 - {id}</Text>
        {id !== 1 && (
          <Button
            type="link"
            style={{ color: "#F46133", padding: 0, fontWeight: "500" }}
            onClick={() => {
              removeSettings(id);
            }}
          >
            <CloseOutlined />
            <span style={{ margin: 0 }}>移除</span>
          </Button>
        )}
      </div>
      <div style={{ display: "flex", gap: "1rem", height: "120px" }}>
        <div>
          <AgeInput
            isRangeOverlapped={isRangeOverlapped}
            ageValue={ageValue}
            selectAgeRange={selectAgeRange}
            id={id}
          />
        </div>
        <div>
          <PriceInput
            priceValue={priceValue}
            priceHandle={priceHandle}
            id={id}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
}

PriceSetting.propTypes = {};

export default PriceSetting;
