## 📜 ISoCashBankPaymentInternal interface 

Interface for exposing events related to interbank payments 

### Events

#### 📢 __Adviced__
Event emitted by a bank that receives a notification of debit/credit on an account it owns in another bank 

```js
event Adviced(address indexed target, address indexed account, uint256 amount, uint8 direction, uint256 indexed id)
```
This notification is done via the `advice()` method in the [ISoCashInterBank](./api-ISoCashInterBank) interface

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | target | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank that receives the advice, always the bank that emits the event |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account that is debitted or credited in the other bank |
|3 | amount | uint256 | uint256 | The amount of the advice (always positive) |
|4 | direction | [OperationDirection](./api-t-OperationDirection.md) | uint8 | The direction of the advice, `DEBIT=0` or `CREDIT=1` |
|5 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer related to the advice in the calling bank |


