## 📜 IHTLCPayment

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


### Methods

#### ⚙️ __getHTLCPayment__
```js
function getHTLCPayment(bytes32 id) view returns (tuple(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque, uint8 state))
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [HTLC](./api-t-HTLC.md) | tuple |  |


#### ⚙️ __verifyHTLC__
```js
function verifyHTLC(bytes32 id, string secret) view returns (bool ok, string reason)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |
|2 | secret | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ok | bool | bool |  |
|2 | reason | string | string |  |


#### ⚙️ __verifyHTLCCancel__
```js
function verifyHTLCCancel(bytes32 id, string secret) view returns (bool ok, string reason)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | bytes32 | bytes32 |  |
|2 | secret | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ok | bool | bool |  |
|2 | reason | string | string |  |


