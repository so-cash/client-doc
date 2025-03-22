## 📜 ISoCashBankBalanceManagementInternal interface 

Interface for exposing events related to account and balance management

### Events

#### 📢 __AccountActivation__
Event emitted when an account is activated or deactivated

```js
event AccountActivation(address indexed account, bool active)
```
An account is activated/deactivated by the bank back office when there are business or compliance reason to do so 

An innactive account can not receive or send funds, it places the funds in a pending state for the bank back office to intervene

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is activated or deactivated |
|2 | active | bool | bool | True if the account is activated, false if it is deactivated |


#### 📢 __AccountRegistration__
Event emitted when an account is registered or unregistered

```js
event AccountRegistration(address indexed account, bool registered)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is registered or unregistered |
|2 | registered | bool | bool | True if the account is registered, false if it is unregistered |


#### 📢 __TransferEx__
Event emitted when the balance of one or two accounts are updated

```js
event TransferEx(address indexed from, address indexed to, uint256 value, uint256 indexed id)
```
The `Transfer()` event of the ERC20 standard is also emitted in // for compatibility 

This event provides access to the transfer id that offers info about the transfer via the `transferInfo()` method of [ISoCashBankExternalWOTransfer](./api-ISoCashBankExternalWOTransfer) interface 

`from`and `to` are only accounts held in this bank module (or zero account), like in the ERC20 standard and only represents the local account entries 

For interbank transfers, the information of the end to end information is provided by the `transferInfo()` method.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is debitted |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is credited |
|3 | value | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|4 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer. Current implementation uses a counter but do not rely on this. |


