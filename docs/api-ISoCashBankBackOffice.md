## 📜 ISoCashBankBackOffice

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


#### 📢 __BankCreation__
```js
event BankCreation(address indexed bank, string bic, string currency)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | bic | string | string |  |
|3 | currency | string | string |  |


#### 📢 __BankRegistration__
```js
event BankRegistration(address indexed bank, bool registered)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | registered | bool | bool |  |


#### 📢 __NostroAccountRegistration__
```js
event NostroAccountRegistration(uint8 model, address indexed bank, address indexed account, bool registered)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | model | [BankModel](./api-t-BankModel.md) | uint8 |  |
|2 | bank | address | address |  |
|3 | account | address | address |  |
|4 | registered | bool | bool |  |


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


#### 📢 __TransfertStateChanged__
```js
event TransfertStateChanged(uint256 indexed id, uint8 status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 |  |


### Methods

#### ⚙️ __correspondent__
```js
function correspondent(address correspondent) view returns (tuple(bytes2 country, bytes10[] codes) cb)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | cb | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __credit__
```js
function credit(address account, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | amount | uint256 | uint256 |  |
|3 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __debit__
```js
function debit(address account, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | amount | uint256 | uint256 |  |
|3 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


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
|1 | null | bool | bool |  |


#### ⚙️ __getNostroBalance__
```js
function getNostroBalance(address bank, address account) view returns (int256 actual, int256 last)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address |  |
|2 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | actual | int256 | int256 |  |
|2 | last | int256 | int256 |  |


#### ⚙️ __isAccountActive__
```js
function isAccountActive(address account) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __isAccountRegistered__
```js
function isAccountRegistered(address account) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __isCorrespondentRegistered__
```js
function isCorrespondentRegistered(address correspondent) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __lockFunds__
```js
function lockFunds(address account, uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __nostroAccountModel__
```js
function nostroAccountModel(address bank, address account) view returns (uint8)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address |  |
|2 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [BankModel](./api-t-BankModel.md) | uint8 |  |


#### ⚙️ __registerAccount__
```js
function registerAccount(address account) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __registerNostroAccount__
```js
function registerNostroAccount(tuple(uint8 model, address bank, address account) nostro) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | nostro | [BankAccount](./api-t-BankAccount.md) | tuple |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


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
|1 | null | bool | bool |  |


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
|1 | null | bool | bool |  |


#### ⚙️ __toggleAccountActive__
```js
function toggleAccountActive(address account) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


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
|1 | null | bool | bool |  |


#### ⚙️ __unlockFunds__
```js
function unlockFunds(address account, uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __unregisterAccount__
```js
function unregisterAccount(address account) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __unregisterNostroAccount__
```js
function unregisterNostroAccount(address bank, address account) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address |  |
|2 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


