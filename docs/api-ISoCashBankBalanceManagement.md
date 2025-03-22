## 📜 ISoCashBankBalanceManagement interface 

Interface for exposing account balance information

This interface exposes read only methods to get the balance of an account 

Inherits from [ISoCashBankBalanceManagementInternal](./api-ISoCashBankBalanceManagementInternal).

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


