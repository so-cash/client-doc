## 📜 ISoCashPathFinder

The interface for the PathFinder facet to resolve a payment path between banks

The interface is used to resolve the routing, finding the sequence of banks to reach the provided bank from the provided bank

### Methods

#### ⚙️ __resolveRoute__
Resolve the routing between two banks

```js
function resolveRoute(bytes3 currency, tuple(bytes2 country, bytes10[] codes) from, tuple(bytes2 country, bytes10[] codes) target) view returns (bool resolved, tuple(bytes2 country, bytes10[] codes)[] route)
```
The function returns the sequence of banks : 

The function operates using the declared correspondents in the referential.  

It starts by the `target` bank, that holds the account of the beneficiary, and progress backward to the `from` bank, if found. 

It returns the sequence of banks (identifier) ordered from the `from` bank to the `target` bank including both ends.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | currency | bytes3 | bytes3 | The currency of the payment, expressed in ISO 4217 3 letters code. Typically you send `EUR` as `0x455552`. |
|2 | from | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the bank where the payment starts. |
|3 | target | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the bank where the beneficiary account is to be credited. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | resolved | bool | bool | True if the routing is resolved, false otherwise, in which case the `route` is empty. |
|2 | route | [BankIdentifier[]](./api-t-BankIdentifier.md) | tuple[] | The sequence of banks (identifier) ordered from the `from` bank to the `target` bank including both ends. |


