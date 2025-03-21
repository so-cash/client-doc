## 📜 ISoCashBankFull

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


#### 📢 __Approval__
```js
event Approval(address indexed owner, address indexed spender, uint256 value)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | owner | address | address |  |
|2 | spender | address | address |  |
|3 | value | uint256 | uint256 |  |


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


#### 📢 __ExplainPlan__
```js
event ExplainPlan(tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount) plan)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | plan | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple |  |


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


#### 📢 __TransfertStateChanged__
```js
event TransfertStateChanged(uint256 indexed id, uint8 status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 |  |


#### 📢 __Whitelisted__
```js
event Whitelisted(address indexed account, bool status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |
|2 | status | bool | bool |  |


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
|1 | null | bool | bool |  |


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


#### ⚙️ __blacklist__
```js
function blacklist(address oldSender)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address |  |


#### ⚙️ __codes__
```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |


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
|1 | null | bool | bool |  |


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
|1 | null | bool | bool |  |


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


#### ⚙️ __isWhitelisted__
```js
function isWhitelisted(address sender) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | sender | address | address |  |


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


#### ⚙️ __owner__
```js
function owner() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | address | address |  |


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


#### ⚙️ __simulateInterbankTransfer__
```js
function simulateInterbankTransfer(address fromBank, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount) view returns (tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount) plan)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | fromBank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | plan | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple |  |


#### ⚙️ __simulateTransfer__
```js
function simulateTransfer(address fromAccount, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount) view returns (tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount))
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | fromAccount | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | amount | uint256 | uint256 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple |  |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


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


#### ⚙️ __version__
```js
function version() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __whitelist__
```js
function whitelist(address newSender)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address |  |


