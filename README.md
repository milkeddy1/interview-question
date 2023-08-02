# Interview question

## Descriptions

- 實作正規表達式 function 將數字加上千分位
- 實作一個 function，input 為區間的 Array，output 為 0-20 不包含的區間

e.g.

```
input: [[1,2], [5,20]] output: [3,4]
```

- 刻出 select & input UI，並具備以下功能

  - 符合設計稿 UI
  - 正確的 select 互動及錯誤提示
  - 正確的數字呈現方式（千分位）

## 實作 functions

數字新增千分位 function 位於 `src/utils/ThousandthsFormatter`

區間過濾 function 位於 `src/utils/FindNotIncludedRange`
