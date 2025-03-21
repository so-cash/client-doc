## 📜 ISoCashAccountActions

### Methods

#### ⚙️ __balance__
```js
function balance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


#### ⚙️ __fullBalance__
```js
function fullBalance() view returns (int256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | int256 | int256 |  |


#### ⚙️ __lockFunds__
```js
function lockFunds(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque) returns (bytes32 key)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | deadline | uint256 | uint256 |  |
|4 | hashlockPaid | bytes32 | bytes32 |  |
|5 | hashlockCancel | bytes32 | bytes32 |  |
|6 | opaque | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |


#### ⚙️ __lockedBalance__
```js
function lockedBalance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


#### ⚙️ __transferEx__
```js
function transferEx(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __transferLockedFunds__
```js
function transferLockedFunds(bytes32 key, tuple(address account, bytes11 bic, bytes32 iban) recipient, string secret, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |
|2 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | secret | string | string |  |
|4 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __unlockFunds__
```js
function unlockFunds(bytes32 key, string secret) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |
|2 | secret | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __unlockedBalance__
```js
function unlockedBalance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


