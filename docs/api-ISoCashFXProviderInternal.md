## 📜 ISoCashFXProviderInternal

### Events

#### 📢 __CurrencyAccountSet__
```js
event CurrencyAccountSet(bytes3 indexed ccy, address account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### 📢 __FXSettlement__
```js
event FXSettlement(address indexed from, address indexed to, uint256 amount, uint256 rate)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | amount | uint256 | uint256 |  |
|4 | rate | uint256 | uint256 |  |


