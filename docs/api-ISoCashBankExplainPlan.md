## 📜 ISoCashBankExplainPlan interface

Interface for debugging the execution plan of a transfer

This interface exposes an event that is not a public api purpose but is usefull for debugging the execution plan 

An `ExecutionPlan` structure indicates what action the bank module needs to do to execute a transfer. It is defined as follow:

 | Field          | Description                                                                                                              |
 |----------------|--------------------------------------------------------------------------------------------------------------------------|
 | `transferId`   | The unique identifier of the transfer                                                                                     |
 | `debitLocalAccount` | The account that should be debitted in the local bank module. Can be Zero.                                              |
 | `creditLocalAccount` | The account that should be credited in the local bank module. Can be Zero.                                              |
 | `payFromNostro` | The nostro account that should be used to pay the beneficiary directly. Zero if interbank transfer is needed.        |
 | `payViaBank`   | The correspondent bank via which the payment should be done. Zero not needed.                                           |
 | `payViaAccount` | The nostro account to use to credit the correspondent bank `payToAccount`                                              |
 | `payToAccount` | The account of the `payViaBank` that should be credited. Always present if `payViaAccount` is present.                 |
 

  

The business logic for interpreting the plan is as follow: 

- If `debitLocalAccount` is not Zero, this account, that is local, is debitted 

- If `creditLocalAccount` is not Zero, this account, that is local, is credited 

- If `payFromNostro` is not Zero, the beneficiary is paid by a transfer from this nostro account. The bank instruct the transfer directly on its account. 

- If `payViaBank` is not Zero, then the bank relies on the correspondent bank to pay the beneficiary using the `interbankTransfer()` method. 

    - If the `creditLocalAccount` was credited, it was the account of th correspondent, to trigger the interbank transfer 

    - Else, the bank execute a transfer its `payViaAccount` account to the `payToAccount` of the correspondent and then trigger the interbank transfer.

### Events

#### 📢 __ExplainPlan__
Event emitted (optionally) when the bank performs a transfer.

```js
event ExplainPlan(tuple(uint256 transferId, address debitLocalAccount, address creditLocalAccount, address payFromNostro, address payViaBank, tuple(uint8 model, address bank, address account) payViaAccount, tuple(uint8 model, address bank, address account) payToAccount) plan)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | plan | [ExecutionPlan](./api-t-ExecutionPlan.md) | tuple |  |


