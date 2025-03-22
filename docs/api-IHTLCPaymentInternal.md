## 📜 IHTLCPaymentInternal

The HTLC payment service for an account emits events defined in this interface.

This interface exposes the events of the HTLC payment service. 

Note the definition of the HTLC structure in the [IHTLCPayment](./api-IHTLCPayment) interface.

### Events

#### 📢 __HTLCPaymentCreated__
Emitted when a new HTLC payment is created.

```js
event HTLCPaymentCreated(bytes32 indexed id, bytes32 indexed hashlockPaid, tuple(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque, uint8 state) htlc)
```
The `id` is a hash of several info to identify uniquely the structure. No specification set as long as it is unique for an account.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 | The unique identifier of the HTLC payment. |
|2 | hashlockPaid | bytes32 | bytes32 | The hash of the secret that locks the payment. |
|3 | htlc | [HTLC](./api-t-HTLC.md) | tuple | The HTLC structure. |


#### 📢 __HTLCPaymentRemoved__
Emitted when a HTLC payment is paid or cancelled.

```js
event HTLCPaymentRemoved(bytes32 indexed id, uint256 amount, uint256 deadline, string usingSecret, string opaque, bool cancelled)
```
The `id` is a hash of several info to identify uniquely the structure. No specification set as long as it is unique for an account.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 | The unique identifier of the HTLC payment. |
|2 | amount | uint256 | uint256 | The amount of the payment. |
|3 | deadline | uint256 | uint256 | The timestamp (in seconds since 1970) of when the HTLC expires. |
|4 | usingSecret | string | string | The secret used to unlock the payment. |
|5 | opaque | string | string | The optional opaque data provided when creating the lock. |
|6 | cancelled | bool | bool | True if the payment is cancelled, false if it is paid. |


