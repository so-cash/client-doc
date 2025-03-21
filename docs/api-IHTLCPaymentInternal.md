## 📜 IHTLCPaymentInternal

### Events

#### 📢 __HTLCPaymentCreated__
```js
event HTLCPaymentCreated(bytes32 indexed id, bytes32 indexed hashlockPaid, tuple(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque, uint8 state) htlc)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |
|2 | hashlockPaid | bytes32 | bytes32 |  |
|3 | htlc | [HTLC](./api-t-HTLC.md) | tuple |  |


#### 📢 __HTLCPaymentRemoved__
```js
event HTLCPaymentRemoved(bytes32 indexed id, uint256 amount, uint256 deadline, string usingSecret, string opaque, bool cancelled)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |
|2 | amount | uint256 | uint256 |  |
|3 | deadline | uint256 | uint256 |  |
|4 | usingSecret | string | string |  |
|5 | opaque | string | string |  |
|6 | cancelled | bool | bool |  |


