## 📜 ISoCashBankBackOfficeServices interface

Interface for the back office to accounts, nostros and local credit and debits.

This interface exposes methods for whitelisted back office wallets. 

### Events

#### 📢 __BankCreation__
Event emitted when the module is created

```js
event BankCreation(address indexed bank, string bic, string currency)
```
Deprecated: Prefer the event `BankModuleSet` emitted at registration in the referential in [ISoCashCountryStateManagement](./api-ISoCashCountryStateManagement)

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module that is created |
|2 | bic | string | string | The BIC of the bank |
|3 | currency | string | string | The currency of the bank |


#### 📢 __BankRegistration__
Event emitted when the bank module is Registered

```js
event BankRegistration(address indexed bank, bool registered)
```
Deprecated (and not emitted in Diamond implementation). Use `BankModuleSet` emitted at registration in the referential in [ISoCashCountryStateManagement](./api-ISoCashCountryStateManagement)

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module that is registered |
|2 | registered | bool | bool | True if the bank is registered, false if it is unregistered |


### Methods

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


