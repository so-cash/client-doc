## 📜 ISoCashBankExternal interface 

Interface for external parties (clients, 3rd parties) to interact with the bank module

This interface exposes functions that relate to transfers and non transfer services. 

Inherits from [ISoCashBankExternalWOTransfer](./api-ISoCashBankExternalWOTransfer) and [ISoCashBankExternalTransfer](./api-ISoCashBankExternalTransfer).

### Events

#### 📢 __AccountActivation__
Event emitted when an account is activated or deactivated

```js
event AccountActivation(address indexed account, bool active)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | active | bool | bool |  |


#### 📢 __AccountRegistration__
Event emitted when an account is registered or unregistered

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
Event emitted when the balance of one or two accounts are updated

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
get the account number for an account smart contract

```js
function accountNumberOf(address account) view returns (uint32)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to get the account number of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [AccountNumber](./api-t-AccountNumber.md) | uint32 | The account number of the account or zero if not found |


#### ⚙️ __addressOf__
get the account address for an account number

```js
function addressOf(uint32 accountNumber) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | accountNumber | [AccountNumber](./api-t-AccountNumber.md) | uint32 | The account number to get the account address of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account address of the account number or zero if not found |


#### ⚙️ __addressOfFullAccount__
get the account address for an account string as present in an IBAN

```js
function addressOfFullAccount(string account) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | string | string | The account part of the IBAN to get the account address of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account address of the account of zero if not found |


#### ⚙️ __balanceOf__
```js
function balanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


#### ⚙️ __bankIdentifier__
Get the bank identifier of the bank

```js
function bankIdentifier() view returns (tuple(bytes2 country, bytes10[] codes) id)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the bank |


#### ⚙️ __bic__
Get the BIC of the bank

```js
function bic() view returns (string)
```
This is also returned by the `name()` method of the ERC20 compatibility

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The BIC of the bank |


#### ⚙️ __codes__
Get the bankCode and branchCode of the bank

```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
This is deprecated and should be replaced by the `bankIdentifier()` method

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bankCode of the bank |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 | The branchCode of the bank |


#### ⚙️ __decimals__
```js
function decimals() view returns (uint8)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint8 | uint8 |  |


#### ⚙️ __decodeIBAN__
Decode an IBAN to get the bank and account

```js
function decodeIBAN(string iban) view returns (address bank, address account)
```
Implementation should return the bank and account that are represented by the IBAN 

The implementation should try to decode the IBAN even when it is in another bank module, using the referential if needed

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string | The IBAN to decode |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank that holds this account |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is represented by the IBAN |


#### ⚙️ __fullBalanceOf__
Get the full balance of an account

```js
function fullBalanceOf(address account) view returns (int256)
```
The full balance is the actual liability of the bank towards the account holder. It can be negative it the account is in overdraft. 

Note that the `balanceOf()` method of the ERC20 standard is also available in the bank module via the interface [IERC20Compatibility](./api-IERC20Compatibility).

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to get the full balance of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | int256 | int256 | The full balance of the account |


#### ⚙️ __ibanOf__
Get the IBAN of the account

```js
function ibanOf(address account) view returns (string)
```
Implementation should return a valid IBAN that includes the bank codes and the account number.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The balance of the account |


#### ⚙️ __lockFunds__
Function to lock a balance instructed by the account smart contract only

```js
function lockFunds(uint256 amount) returns (bool)
```
The sender should be a registered account

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 | The amount to lock |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the lock is successful, exception otherwise |


#### ⚙️ __lockedBalanceOf__
Get the locked balance of an account

```js
function lockedBalanceOf(address account) view returns (uint256)
```
The locked balance is the amount that has been earmarked for specific transactions by the account owner (or the bank)

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to get the locked balance of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | The locked balance of the account |


#### ⚙️ __name__
Get the name of the account

```js
function name() view returns (string)
```
Get the name of the account for developers

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The name of the account |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __totalSupply__
```js
function totalSupply() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


#### ⚙️ __transfer__
Transfer funds from the caller account to a recipient account

```js
function transfer(tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
This method can only be called by a smart contract that is registered as an account in the bank module 

Events Transfer and TransferEx are emitted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient account to transfer the funds to |
|2 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|3 | details | string | string | The details of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false otherwise |


#### ⚙️ __transferInfo__
Get the record of the transfer with the given id

```js
function transferInfo(uint256 id) view returns (tuple(address sender, tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 valueTime, uint256 amount, uint8 status, string details, string reason))
```
This method is used to get the information of a transfer 

The `TransferInfo` structure is defined as follow:

 | Field          | Description                                                                                                              |
 |----------------|--------------------------------------------------------------------------------------------------------------------------|
 | `sender`       | The account that initiated the transfer                                                                                   |
 | `recipient`    | The recipient of the transfer                                                                                            |
 | `valueTime`    | The time to consider the interest calculation. The actual time of the transfer is the block timestamp defined by the TransferEx event |
 | `amount`       | The amount of the transfer expressed in the smallest unit of the currency                                                 |
 | `status`       | The status of the transfer and can be `NEW=0`, `STP=1`, `PENDING=2` (when stopped by the BO), `CANCELLED=3`, `PROCESSED=4`|
 | `details`      | The details of the transfer                                                                                              |
 | `reason`       | The reason of the status of the transfer when put in pending, cancelled or processed                                                                                 |


| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [TransferInfo](./api-t-TransferInfo.md) | tuple | The record of the transfer |


#### ⚙️ __unlockFunds__
Function to unlock a balance instructed by the account smart contract only

```js
function unlockFunds(uint256 amount) returns (bool)
```
The sender should be a registered account

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 | The amount to unlock |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the unlock is successful, exception otherwise |


#### ⚙️ __unlockedBalanceOf__
Get the unlocked balance of an account

```js
function unlockedBalanceOf(address account) view returns (uint256)
```
The unlocked balance is the amount that is immediatly available for the account owner to spend

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to get the unlocked balance of |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | The unlocked balance of the account |


#### ⚙️ __version__
Get the version of the implementation

```js
function version() view returns (string)
```
Semver syntax is expected.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | "1.0.0" or "2.0.0" currently. The Diamond implementation starts at "2.0.0".  |


