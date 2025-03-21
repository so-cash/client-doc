## 📜 ISoCashPathFinder

### Methods

#### ⚙️ __resolveRoute__
```js
function resolveRoute(bytes3 currency, tuple(bytes2 country, bytes10[] codes) from, tuple(bytes2 country, bytes10[] codes) target) view returns (bool resolved, tuple(bytes2 country, bytes10[] codes)[] route)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | currency | bytes3 | bytes3 |  |
|2 | from | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |
|3 | target | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | resolved | bool | bool |  |
|2 | route | [BankIdentifier[]](./api-t-BankIdentifier.md) | tuple[] |  |


