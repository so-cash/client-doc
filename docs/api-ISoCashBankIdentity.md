## 📜 ISoCashBankIdentity interface 

Interface to get the identity of a bank module

This interface exposes read only methods to get the identity of a bank module

### Methods

#### ⚙️ __bankIdentifier__
Get the bank identifier of the bank

```js
function bankIdentifier() view returns (tuple(bytes2 country, bytes10[] codes) id)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the bank |


#### ⚙️ __bic__
Get the BIC of the bank

```js
function bic() view returns (string)
```
This is also returned by the `name()` method of the ERC20 compatibility

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The BIC of the bank |


#### ⚙️ __codes__
Get the bankCode and branchCode of the bank

```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
This is deprecated and should be replaced by the `bankIdentifier()` method

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bankCode of the bank |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 | The branchCode of the bank |


#### ⚙️ __version__
Get the version of the implementation

```js
function version() view returns (string)
```
Semver syntax is expected.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | "1.0.0" or "2.0.0" currently. The Diamond implementation starts at "2.0.0".  |


