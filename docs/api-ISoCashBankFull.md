## 📜 ISoCashBankFull interface

Interface for the full bank module

This interface groups all the interfaces of the bank module [IWhitelistedSenders](./api-IWhitelistedSenders), [ISoCashBankExternal](./api-ISoCashBankExternal), [ISoCashInterBank](./api-ISoCashInterBank), [ISoCashBankBackOffice](./api-ISoCashBankBackOffice), 

 and optionnally:  [ISoCashBankPaymentSimulation](./api-ISoCashBankPaymentSimulation), [ISoCashBankExplainPlan](./api-ISoCashBankExplainPlan) 

 It also exposes the `owner()` method to get the owner of the bank module.

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


#### 📢 __Adviced__
Event emitted by a bank that receives a notification of debit/credit on an account it owns in another bank 

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
Event emitted when the module is created

```js
event BankCreation(address indexed bank, string bic, string currency)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | bic | string | string |  |
|3 | currency | string | string |  |


#### 📢 __BankRegistration__
Event emitted when the bank module is Registered

```js
event BankRegistration(address indexed bank, bool registered)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|2 | registered | bool | bool |  |


#### 📢 __ExplainPlan__
Event emitted (optionally) when the bank performs a transfer.

```js
event ExplainPlan(tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount) plan)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | plan | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple |  |


#### 📢 __NostroAccountRegistration__
Event emitted when a nostro account is registered or unregistered

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


#### 📢 __TransfertStateChanged__
Event emitted when the status of a transfer is `PENDING`, `CANCELLED` or `PROCESSED`

```js
event TransfertStateChanged(uint256 indexed id, uint8 status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 |  |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 |  |


#### 📢 __Whitelisted__
Emitted when a sender is whitelisted or blacklisted.

```js
event Whitelisted(address indexed account, bool status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |
|2 | status | bool | bool |  |


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


#### ⚙️ __advice__
The executing bank receives an advice from the calling bank that its account has been debitted or credited

```js
function advice(uint256 amount, uint8 direction, uint256 id) returns (bool)
```
The calling bank should be a correspondent of the executing bank. 

The executing bank will check that it has an account with the calling bank, check that the copy of the balance it has match with the difference of the advice amount and update the copy of its balance.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 | The amount of the advice (always positive) |
|2 | direction | [OperationDirection](./api-t-OperationDirection.md) | uint8 | The direction of the advice, `DEBIT=0` or `CREDIT=1` |
|3 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer related to the advice in the calling bank |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the advice is successful, false or fail otherwise |


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


#### ⚙️ __blacklist__
Remove sender from the whitelist.

```js
function blacklist(address oldSender)
```
Only an other whitelisted sender (or the owner, or the targetted sender) can blacklist a sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address | The address of the sender to remove. |


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


#### ⚙️ __correspondent__
Get the correspondent bank identifier of a correspondent bank module

```js
function correspondent(address correspondent) view returns (tuple(bytes2 country, bytes10[] codes) cb)
```
This method is used to get the correspondent bank identifier of a correspondent bank module

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address | The correspondent bank module |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | cb | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The correspondent bank identifier of the correspondent bank module |


#### ⚙️ __credit__
Credit the account with new funds coming from money received in bank nostro or from a loan or equivalent

```js
function credit(address account, uint256 amount, string details) returns (bool)
```
Accounting wise, the account is only a liability side, so when recording a credit, the bank should record a debit in an asset account. Such asset account can be a nostro account, held on-chain or outside the blockchain, or can be against the recognition of money that the client owes to the banks (payable, loan, ...). 

Only whitelisted back office wallets can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to credit |
|2 | amount | uint256 | uint256 | The amount to credit |
|3 | details | string | string | The details of the credit |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the credit is successful, false or fail otherwise |


#### ⚙️ __debit__
Debit the account reducing the liability to the client against an asset of the bank

```js
function debit(address account, uint256 amount, string details) returns (bool)
```
Accounting wise, the account is only a liability side, so when recording a debit, the bank should record a credit in an asset account. Such asset account can be a nostro account, held on-chain or outside the blockchain, or can be against the recognition of money that the client owes to the banks (payable, loan, ...). 

Only whitelisted back office wallets can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to debit |
|2 | amount | uint256 | uint256 | The amount to debit |
|3 | details | string | string | The details of the debit |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the debit is successful, false or fail otherwise |


#### ⚙️ __decidePendingTransfer__
Instruct the bank module to proceed with a pending transfer or to cancel it

```js
function decidePendingTransfer(uint256 id, uint8 status, string reason) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 | The status of the transfer, `CANCELLED=3`, `PROCESSED=4` |
|3 | reason | string | string | The reason of the status of the transfer when put in pending, cancelled or processed |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the decision is successful, false or fail otherwise |


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


#### ⚙️ __getNostroBalance__
Get the actual balance of a nostro account and the last copy in the bank module

```js
function getNostroBalance(address bank, address account) view returns (int256 actual, int256 last)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address | The bank that holds the nostro account |
|2 | account | address | address | The address of the account balance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | actual | int256 | int256 | The actual balance of the account in the bank that holds the account |
|2 | last | int256 | int256 | The last copy of the balance of the account in this bank module |


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


#### ⚙️ __interbankNetting__
Special function to request the executing bank to agree on a netting between accounts they hold with each other

```js
function interbankNetting(uint256 amount, uint256 id) returns (bool)
```
The calling bank should be a correspondent of the executing bank. 

The executing bank will need to check that its account has been reduced by the amount before performing the reduction of the caller account.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | amount | uint256 | uint256 | The amount of the netting expressed in the smallest unit of the currency |
|2 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the netting in the calling bank |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the netting is successful, false or fail otherwise |


#### ⚙️ __interbankTransfer__
The calling bank requests the executing bank to transfer funds to a recipient account.

```js
function interbankTransfer(tuple(uint8 model, address bank, address account) ssi, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, uint256 id) returns (bool)
```
The calling bank should be a correspondent of the executing bank. 

The executing bank will need to check that it has been paid in the `ssi` account before performing the transfer. To do this several methods are possible: 

- Keeping a record of the last balance of that account in the state of the bank module so to compare it with the actual balance 

- Other means to be determined

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ssi | [BankAccount](./api-t-BankAccount.md) | tuple | The SSI of the executing bank where the same amount should have been paid |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient account to transfer the funds to |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|4 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer in the calling bank |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false or fail otherwise |


#### ⚙️ __isAccountActive__
Test if an account is active

```js
function isAccountActive(address account) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to test |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is active, false otherwise |


#### ⚙️ __isAccountRegistered__
Test if an account is registered as an account of the bank module

```js
function isAccountRegistered(address account) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to test |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is registered, false otherwise |


#### ⚙️ __isCorrespondentRegistered__
Test if the bank module is a correspondent of this bank module

```js
function isCorrespondentRegistered(address correspondent) view returns (bool)
```
implemented normally via the referential but can be overriden

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module to test |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the bank module is a correspondent, false otherwise |


#### ⚙️ __isWhitelisted__
Check if a sender is whitelisted.

```js
function isWhitelisted(address sender) view returns (bool)
```
No control of caller is done in this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | sender | address | address | The address of the sender. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the sender is whitelisted or the owner, false otherwise. |


#### ⚙️ __lockFunds__
Locks some funds of the client

```js
function lockFunds(address account, uint256 amount) returns (bool)
```
The locked funds are not usable by the client for spending but are still part of the full balance of the account 

Note that this function is not to be confused with the `lockFunds(amount)` method of the [ISoCashBankExternalWOTransfer](./api-ISoCashBankExternalWOTransfer) interface. 

Only whitelisted back office wallets can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to lock the funds of |
|2 | amount | uint256 | uint256 | The amount to lock |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the lock is successful, false or fail otherwise |


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


#### ⚙️ __nostroAccountModel__
Get the model of a nostro account

```js
function nostroAccountModel(address bank, address account) view returns (uint8)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address | The bank that holds the nostro account |
|2 | account | address | address | The address of the account balance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [BankModel](./api-t-BankModel.md) | uint8 | The model of the nostro account : `UNDEFINED=0`, `SO_CASH=1`, `ERC20=2` |


#### ⚙️ __owner__
```js
function owner() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address |  |


#### ⚙️ __registerAccount__
Register an account smart contract as an account of the bank module

```js
function registerAccount(address account) returns (bool)
```
Only whitelisted back office wallets can call this method. 

The bank module should have been given ownership of the account smart contract before the call (`transferOwnership()`). 

Client can provide their own smart contract to the bank to be registered as an account as long as it respects the bank requirements.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to register |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is registered, false otherwise |


#### ⚙️ __registerNostroAccount__
Register a nostro account

```js
function registerNostroAccount(tuple(uint8 model, address bank, address account) nostro) returns (bool)
```
Only whitelisted back office wallets can call this method. 

A nostro account is either a so|cash account or an ERC20 token account that holds the balance of the bank module in another bank module.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | nostro | [BankAccount](./api-t-BankAccount.md) | tuple | The nostro account to register |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is registered, false otherwise |


#### ⚙️ __requestNetting__
request another bank that holds a nostro account to operate a netting

```js
function requestNetting(address correspondent, address loro, uint256 amount) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module that holds the nostro account |
|2 | loro | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account of the correspondent with the caller bank where the netting should be operated |
|3 | amount | uint256 | uint256 | The amount of the netting expressed in the smallest unit of the currency |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the netting is successful, false or fail otherwise |


#### ⚙️ __simulateInterbankTransfer__
Simulate the processing of a transfer instruction received from antoher bank module

```js
function simulateInterbankTransfer(address fromBank, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount) view returns (tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount))
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | fromBank | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module sending the transfer instruction |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient of the transfer |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple | The execution plan of the transfer |


#### ⚙️ __simulateTransfer__
Simulate a transfer from an account in this bank module to a recipient

```js
function simulateTransfer(address fromAccount, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount) view returns (tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount))
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | fromAccount | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to transfer the funds from |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient of the transfer |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple | The execution plan of the transfer |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __synchroNostro__
Forces the update of the copy of a nostro balance in the bank module

```js
function synchroNostro(address bank, address account) returns (bool)
```
This method requires that the caller is whitelisted 

The nostro account can be a so|cash account or an ERC20 token account

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address | The bank that holds the nostro account or the address of the ERC20 token |
|2 | account | address | address | The address of the account balance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the update is successful, false or fail otherwise |


#### ⚙️ __toggleAccountActive__
Activate or deactivate an account

```js
function toggleAccountActive(address account) returns (bool)
```
Only whitelisted back office wallets can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to activate or deactivate |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is now active and false if it is now deactivated |


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


#### ⚙️ __transferFrom__
Initiate a transfer from the back office side on behalf of a client

```js
function transferFrom(address from, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to transfer the funds from |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient account to transfer the funds to |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|4 | details | string | string | The details of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false or fail otherwise |


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


#### ⚙️ __unlockFunds__
Unlocks some funds of the client

```js
function unlockFunds(address account, uint256 amount) returns (bool)
```
The unlocked funds are usable by the client for spending and are part of the full balance of the account 

Note that this function is not to be confused with the `unlockFunds(amount)` method of the [ISoCashBankExternalWOTransfer](./api-ISoCashBankExternalWOTransfer) interface. 

Note that this function can unlock funds locked by the client via the HTLC protocol. 

Only whitelisted back office wallets can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to unlock the funds of |
|2 | amount | uint256 | uint256 | The amount to unlock |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the unlock is successful, false or fail otherwise |


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


#### ⚙️ __unregisterAccount__
Unregister an account smart contract as an account of the bank module

```js
function unregisterAccount(address account) returns (bool)
```
Only whitelisted back office wallets can call this method. 

The bank module should transfer the ownership to the caller wallet during the execution so that the back office can return the ownership to the client.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to unregister |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is unregistered, false otherwise |


#### ⚙️ __unregisterNostroAccount__
Unregister a nostro account

```js
function unregisterNostroAccount(address bank, address account) returns (bool)
```
Only whitelisted back office wallets can call this method. 

There is currently only one nostro account per bank module but the interface allows for multiple accounts.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address | The bank that holds the nostro account |
|2 | account | address | address | The address of the account balance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the account is unregistered, false otherwise |


#### ⚙️ __version__
Get the version of the implementation

```js
function version() view returns (string)
```
Semver syntax is expected.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | "1.0.0" or "2.0.0" currently. The Diamond implementation starts at "2.0.0".  |


#### ⚙️ __whitelist__
Whitelist a sender.

```js
function whitelist(address newSender)
```
Only an other whitelisted sender (or the owner) can whitelist a new sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address | The address of the sender. |


