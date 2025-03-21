## 📜 ISoCashInterBank

### Events

#### 📢 __Adviced__
```js
event Adviced(address indexed target, address indexed account, uint256 amount, uint8 direction, uint256 indexed id)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | target | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | amount | uint256 | uint256 |  |
|4 | direction | [OperationDirection](./api-t-OperationDirection.md) | uint8 |  |
|5 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


### Methods

#### ⚙️ __advice__
```js
function advice(uint256 amount, uint8 direction, uint256 id) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 |  |
|2 | direction | [OperationDirection](./api-t-OperationDirection.md) | uint8 |  |
|3 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __interbankNetting__
```js
function interbankNetting(uint256 amount, uint256 id) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 |  |
|2 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __interbankTransfer__
```js
function interbankTransfer(tuple(uint8 model, address bank, address account) ssi, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, uint256 id) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ssi | [BankAccount](./api-t-BankAccount.md) | tuple |  |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | amount | uint256 | uint256 |  |
|4 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


