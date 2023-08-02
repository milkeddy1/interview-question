import { useState } from "react";
import { Input } from "antd";
import { ThousandthsFormatter } from "../utils";
function PriceInput() {
  const [inputPrice, setInputPrice] = useState("");
  return (
    <div style={{ width: "290px" }}>
      <p style={{ color: "#8E8E8E", fontSize: "12px", margin: ".2rem" }}>
        入住費用（每人每晚）
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40px",
            background: "#F0F0F0",
            border: "1px solid #BEBEBE",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderRight: "none",
          }}
        >
          <p
            style={{ color: "#4F4F4F", fontSize: "12px", textAlign: "center" }}
          >
            TWD
          </p>
        </div>
        <Input
          placeholder="請輸入費用"
          value={inputPrice}
          onChange={(e) => {
            if (e.target.value === "") setInputPrice("");
            const removeComma = e.target.value.replace(/,/g, "");
            console.log(removeComma, "removeComma");
            if (Number(removeComma) || removeComma === "0") {
              console.log(e.target.value, "");
              const removeComma = e.target.value.replace(/,/g, "");
              const formattedPrice = ThousandthsFormatter(removeComma);
              setInputPrice(formattedPrice);
            }
          }}
          style={{
            width: "250px",
            border: "1px solid #FF8040",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            padding: ".5rem",
          }}
        />
      </div>
      {inputPrice === "" && (
        <div
          style={{ background: "#F8EAE8", borderRadius: "5px", width: "290px" }}
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
            不可以為空白
          </p>
        </div>
      )}
      <div>
        <p
          style={{
            color: "#8E8E8E",
            fontSize: "12px",
            margin: 0,
            textAlign: "end",
          }}
        >
          輸入0表示免費
        </p>
      </div>
    </div>
  );
}

PriceInput.propTypes = {};

export default PriceInput;
