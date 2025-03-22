## 📜 IHTLCPayment interface for HTLC payments

The HTLC payment service is used to manage the HTLC payments for an account. 

It is implement by a facet to manage the HTLC payments for accounts.

This interface is used to manage the HTLC payments for an account.  

It is used to create, verify HTLC payments. 

There is no function to accept or cancel a payment in this interface as this is the role of the user of the facet to implement the logic. 

Inherit from [IHTLCPaymentInternal](./api-IHTLCPaymentInternal) to access the events. 

It is used by the functions `lockFunds` and `unlockFunds` of the [ISoCashAccountActions](./api-ISoCashAccountActions) implementation. 

 

The `HTLC` structure is defined as follow:

 | Field          | Description                                                                                                              |
 |----------------|--------------------------------------------------------------------------------------------------------------------------|
 | `recipient`      | The expected beneficiary of the locked funds                                                                             |
 | `amount`         | The amount locked for the payment                                                                                        |
 | `deadline`       | The timestamp in sec (same as block.timestamp) when the lock expires                                                     |
 | `hashlockPaid`   | The hash of the secret that locks the payment                                                                            |
 | `hashlockCancel` | The hash of the secret that can cancel the payment (optional - and not to be used)                                         |
 | `opaque`         | An optional opaque data to be interpreted by the user according to their protocol (a JSON string is recommended)           |
 | `state`          | The state of the HTLC and can be `INITIATED=0`, `PAID=1` or `CANCELLED=2`                                                 |


### Events

#### 📢 __HTLCPaymentCreated__
Emitted when a new HTLC payment is created.

```js
event HTLCPaymentCreated(bytes32 indexed id, bytes32 indexed hashlockPaid, tuple(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque, uint8 state) htlc)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |
|2 | hashlockPaid | bytes32 | bytes32 |  |
|3 | htlc | [HTLC](./api-t-HTLC.md) | tuple |  |


#### 📢 __HTLCPaymentRemoved__
Emitted when a HTLC payment is paid or cancelled.

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


### Methods

#### ⚙️ __getHTLCPayment__
get the HTLC payment structure for an id.

```js
function getHTLCPayment(bytes32 id) view returns (tuple(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque, uint8 state))
```
This function is used to get the HTLC payment structure for an id.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 | The unique identifier of the HTLC payment. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [HTLC](./api-t-HTLC.md) | tuple | The HTLC structure as defined above. |


#### ⚙️ __verifyHTLC__
Verify the secret of a HTLC payment.

```js
function verifyHTLC(bytes32 id, string secret) view returns (bool ok, string reason)
```
This function is used to verify the secret of a HTLC payment.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 | The unique identifier of the HTLC payment. |
|2 | secret | string | string | The secret to verify. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ok | bool | bool | True if the secret is correct, false otherwise. |
|2 | reason | string | string | The reason why the verification failed: status is not `INITIATED`, deadline is reached, secret does not match the hash. |


#### ⚙️ __verifyHTLCCancel__
Verify the possibility to cancel a HTLC payment.

```js
function verifyHTLCCancel(bytes32 id, string secret) view returns (bool ok, string reason)
```
This function is used to verify the possibility to cancel a HTLC payment.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 | The unique identifier of the HTLC payment. |
|2 | secret | string | string | The secret to cancel (discouraged). |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ok | bool | bool | True if the secret is correct, false otherwise. |
|2 | reason | string | string | The reason why the verification failed: status is not `INITIATED`, deadline is not reached, secret does not match the cancel hash. |


