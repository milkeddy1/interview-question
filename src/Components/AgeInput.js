import { useState } from "react";
import { Select } from "antd";

const MAX_AGE = 20;

const options = Array.from(Array(MAX_AGE + 1)).map((_, idx) => {
  return {
    value: idx,
    label: idx,
  };
});

function AgeInput({ rangeIsOverLapped }) {
  const [selectedRange, setSelectedRange] = useState([0, 0]);
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
          value={selectedRange[0]}
          size="large"
          onChange={(e) => {
            setSelectedRange((prev) => {
              if (e > prev[1]) {
                return [e, e];
              }
              return [e, prev[1]];
            });
            seSecondOptions(options.slice(e));
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
          value={selectedRange[1]}
          onChange={(e) => {
            setSelectedRange((prev) => [prev[0], e]);
          }}
          options={secondOptions}
        />
      </div>
      {rangeIsOverLapped && (
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
