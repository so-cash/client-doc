## 📜 ISoCashBankBalanceManagement

### Events

#### 📢 __AccountActivation__
```js
event AccountActivation(address indexed account, bool active)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | active | bool | bool |  |


#### 📢 __AccountRegistration__
```js
event AccountRegistration(address indexed account, bool registered)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | registered | bool | bool |  |


#### 📢 __TransferEx__
```js
event TransferEx(address indexed from, address indexed to, uint256 value, uint256 indexed id)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | value | uint256 | uint256 |  |
|4 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


### Methods

#### ⚙️ __accountNumberOf__
```js
function accountNumberOf(address account) view returns (uint32)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [AccountNumber](./api-t-AccountNumber.md) | uint32 |  |


#### ⚙️ __addressOf__
```js
function addressOf(uint32 accountNumber) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | accountNumber | [AccountNumber](./api-t-AccountNumber.md) | uint32 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### ⚙️ __addressOfFullAccount__
```js
function addressOfFullAccount(string account) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### ⚙️ __fullBalanceOf__
```js
function fullBalanceOf(address account) view returns (int256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | int256 | int256 |  |


#### ⚙️ __lockedBalanceOf__
```js
function lockedBalanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __unlockedBalanceOf__
```js
function unlockedBalanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


