## 📜 ISoCashInterBank interface 

Interface for relations between bank modules that have a correspondent relationship

This interface exposes methods to coordinate interbank transfers and advices 

Inherits from [ISoCashBankPaymentInternal](./api-ISoCashBankPaymentInternal).

### Events

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


### Methods

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


