## 📜 ISoCashFXProviderInternal interface 

Interface for exposing events related to FX settlement and account association

### Events

#### 📢 __CurrencyAccountSet__
Event emitted when a currency account is set in the FX provider smart contract

```js
event CurrencyAccountSet(bytes3 indexed ccy, address account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 | The currency of the account |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is set |


#### 📢 __FXSettlement__
Event emitted when the FX Provider smart contract settle the operation

```js
event FXSettlement(address indexed from, address indexed to, uint256 amount, uint256 rate)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is debitted in the base currency |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is credited in the quote currency |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the base currency |
|4 | rate | uint256 | uint256 | The FX rate used for the settlement expressed as a rate of the quote currency in the base currency * 10,000. |


