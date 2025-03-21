## 📜 ISoCashBankIdentity

### Methods

#### ⚙️ __bankIdentifier__
```js
function bankIdentifier() view returns (tuple(bytes2 country, bytes10[] codes) id)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __bic__
```js
function bic() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __codes__
```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |


#### ⚙️ __version__
```js
function version() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


