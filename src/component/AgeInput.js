import { useState } from "react";
import { Select } from "antd";

const MAX_AGE = 20;

const options = Array.from(Array(MAX_AGE + 1)).map((_, idx) => {
  return {
    value: idx,
    label: idx,
  };
});

function AgeInput({ isRangeOverlapped, ageValue, selectAgeRange, id }) {
  const [secondOptions, seSecondOptions] = useState(
    Array.from(Array(MAX_AGE + 1)).map((_, idx) => {
      return {
        value: idx,
        label: idx,
      };
    })
  );
  return (
    <div>
      <p style={{ color: "#8E8E8E", fontSize: "12px", margin: ".2rem" }}>
        年齡
      </p>
      <div style={{ display: "flex" }}>
        <Select
          className="selectA"
          defaultValue={0}
          style={{
            width: 120,
            borderRadius: 0,
          }}
          value={ageValue[0]}
          size="large"
          onChange={(e) => {
            selectAgeRange(id, e, "first");
            seSecondOptions((prev) => {
              return prev.map((item, idx) => {
                if (idx < e)
                  return {
                    ...item,
                    disabled: true,
                  };
                return item;
              });
            });
          }}
          options={options}
        />
        <div
          style={{
            width: "30px",
            background: "#F0F0F0",
            border: "1px solid #BEBEBE",
            borderRight: "none",
            borderLeft: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#4F4F4F",
              fontSize: "16px",
              textAlign: "center",
              margin: 0,
            }}
          >
            ~
          </p>
        </div>
        <Select
          className="selectB"
          defaultValue={0}
          style={{
            width: 120,
            borderRadius: 0,
          }}
          size="large"
          value={ageValue[1]}
          onChange={(e) => {
            selectAgeRange(id, e, "second");
          }}
          options={secondOptions}
        />
      </div>
      {isRangeOverlapped && (
        <div
          style={{ background: "#F8EAE8", borderRadius: "5px", width: "100%" }}
        >
          <p
            style={{
              color: "#E2683F",
              fontSize: "12px",
              margin: 0,
              padding: ".4rem",
              fontWeight: "bold",
            }}
          >
            年齡區間不可重疊
          </p>
        </div>
      )}
    </div>
  );
}

AgeInput.propTypes = {};

export default AgeInput;
