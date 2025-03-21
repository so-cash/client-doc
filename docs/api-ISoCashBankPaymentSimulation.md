## 📜 ISoCashBankPaymentSimulation

### Methods

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


