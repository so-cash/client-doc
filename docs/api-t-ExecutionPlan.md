## ExecutionPlan structure

| Pos | Field | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | transferId | [TransferId](./api-t-TransferId.md) | uint256 |  |
|2 | debitLocalAccount | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | creditLocalAccount | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|4 | payFromNostro | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|5 | payViaBank | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |
|6 | payViaAccount | [BankAccount](./api-t-BankAccount.md) | tuple |  |
|7 | payToAccount | [BankAccount](./api-t-BankAccount.md) | tuple |  |


