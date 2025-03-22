## 📜 ISoCashBankPaymentSimulation interface

Interface for simulating the execution plan of a transfer

This interface exposes methods to simulate the execution plan of a transfer. Its implementation is not mandatory and discourage in production environment.

### Methods

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


