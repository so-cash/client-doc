## 📜 ISoCashBankExternal

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


#### 📢 __Approval__
```js
event Approval(address indexed owner, address indexed spender, uint256 value)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | owner | address | address |  |
|2 | spender | address | address |  |
|3 | value | uint256 | uint256 |  |


#### 📢 __Transfer__
```js
event Transfer(address indexed from, address indexed to, uint256 value)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | address | address |  |
|2 | to | address | address |  |
|3 | value | uint256 | uint256 |  |


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


#### ⚙️ __balanceOf__
```js
function balanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __bankIdentifier__
```js
function bankIdentifier() view returns (tuple(bytes2 country, bytes10[] codes) id)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __bic__
```js
function bic() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __codes__
```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |


#### ⚙️ __decimals__
```js
function decimals() view returns (uint8)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint8 | uint8 |  |


#### ⚙️ __decodeIBAN__
```js
function decodeIBAN(string iban) view returns (address bank, address account)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


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


#### ⚙️ __ibanOf__
```js
function ibanOf(address account) view returns (string)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __lockFunds__
```js
function lockFunds(uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


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


#### ⚙️ __name__
```js
function name() view returns (string)
```
Get the name of the account
Get the name of the account for developers
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __totalSupply__
```js
function totalSupply() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __transfer__
```js
function transfer(tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __transferInfo__
```js
function transferInfo(uint256 id) view returns (tuple(address sender, tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 valueTime, uint256 amount, uint8 status, string details, string reason))
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [TransferInfo](./api-t-TransferInfo.md) | tuple |  |


#### ⚙️ __unlockFunds__
```js
function unlockFunds(uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


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


#### ⚙️ __version__
```js
function version() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


