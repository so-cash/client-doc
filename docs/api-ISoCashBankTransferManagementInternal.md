## 📜 ISoCashBankTransferManagementInternal interface 

Interface for exposing events related to the management of transfers that require manual intervention

### Events

#### 📢 __TransfertStateChanged__
Event emitted when the status of a transfer is `PENDING`, `CANCELLED` or `PROCESSED`

```js
event TransfertStateChanged(uint256 indexed id, uint8 status)
```
This event is emitted when the bank module decides to put a transfer in pending, and then when the back office decides to cancel or process it

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer to retrieve the informations |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 | The status of the transfer, `PENDING=2`, `CANCELLED=3`, `PROCESSED=4` |


