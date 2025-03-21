## 📜 ISoCashBackOfficePayments

### Methods

#### ⚙️ __decidePendingTransfer__
```js
function decidePendingTransfer(uint256 id, uint8 status, string reason) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 |  |
|3 | reason | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __requestNetting__
```js
function requestNetting(address correspondent, address loro, uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | loro | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __synchroNostro__
```js
function synchroNostro(address bank, address account) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address |  |
|2 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __transferFrom__
```js
function transferFrom(address from, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | amount | uint256 | uint256 |  |
|4 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


