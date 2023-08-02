import { useState, useEffect } from "react";
import { PriceSetting } from "./container";
import { Button } from "antd";
import {
  FindNotIncludedRange,
  FindIsRangeOverlapped,
  ThousandthsFormatter,
} from "./utils";
function App() {
  const [allRangeSelected, setAllRangeSelected] = useState(false);
  const [isRangeOverlapped, setIsRangeOverlapped] = useState(false);
  const [inputsValue, setInputsValue] = useState([
    {
      id: 1,
      ageValue: [0, 0],
      priceValue: "",
    },
  ]);

  const addSettings = () => {
    setInputsValue((prev, idx) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          ageValue: [0, 0],
          priceValue: "",
        },
      ];
    });
  };

  const removeSettings = (id) => {
    setInputsValue((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const selectAgeRange = (id, value, order) => {
    if (order === "first") {
      setInputsValue((prev) => {
        const initialValue = JSON.parse(JSON.stringify(prev));
        if (value > initialValue[id - 1].ageValue[1]) {
          initialValue[id - 1].ageValue = [value, value];
        } else {
          initialValue[id - 1].ageValue[0] = value;
        }
        return initialValue;
      });
    } else {
      setInputsValue((prev) => {
        const initialValue = JSON.parse(JSON.stringify(prev));
        initialValue[id - 1].ageValue[1] = value;
        return initialValue;
      });
    }
  };

  const priceHandle = (value, id) => {
    if (value === "")
      setInputsValue((prev) => {
        return prev.map((item) => {
          if (item.id === id) return { ...item, priceValue: value };
          return item;
        });
      });
    const removedCommaNumber = value.replace(/,/g, "");
    if (Number(removedCommaNumber) || removedCommaNumber === "0") {
      const formattedPrice = ThousandthsFormatter(removedCommaNumber);
      setInputsValue((prev) => {
        return prev.map((item) => {
          if (item.id === id) return { ...item, priceValue: formattedPrice };
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const ranges = inputsValue.map((item) => item.ageValue);

    // 檢查區間是否被全選
    setAllRangeSelected(FindNotIncludedRange(ranges).length === 0);

    // 檢查區間是否有重疊
    setIsRangeOverlapped(FindIsRangeOverlapped(ranges));
  }, [inputsValue, setIsRangeOverlapped]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        {inputsValue.map((item) => {
          return (
            <PriceSetting
              key={item.id}
              id={item.id}
              ageValue={item.ageValue}
              priceValue={item.priceValue}
              removeSettings={removeSettings}
              selectAgeRange={selectAgeRange}
              isRangeOverlapped={isRangeOverlapped}
              priceHandle={priceHandle}
            />
          );
        })}
        <Button
          disabled={allRangeSelected}
          type="link"
          style={{
            color: allRangeSelected ? "#BEBEBE" : "#20AEA1",
            padding: 0,
            fontWeight: "500",
          }}
          onClick={addSettings}
        >
          ＋新增價格設定
        </Button>
      </div>
    </div>
  );
}

export default App;
