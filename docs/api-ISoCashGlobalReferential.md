## 📜 ISoCashGlobalReferential

The interface for the GlobalReferential 

The interface is used to get the country manager, the country manager internal and the path finder 



Inherits from the [ISoCashCountryManager](./api-ISoCashCountryManager), [ISoCashCountryManagerInternal](./api-ISoCashCountryManagerInternal) and [ISoCashPathFinder](./api-ISoCashPathFinder) interfaces

### Events

#### 📢 __CountrySet__
Event emitted when a country is set in the referential

```js
event CountrySet(bytes2 indexed country, address indexed countryContract)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 |  |
|2 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address |  |


### Methods

#### ⚙️ __getCountry__
Get the country contract from the referential

```js
function getCountry(bytes2 country) view returns (address contractAddress)
```
The function returns the country contract address for the given country code or ZeroAddress if the country is not in the referential.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 | The ISO country code as a Ascii encoded bytes2. Typically you send `0x4652` for FR. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | contractAddress | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract address for the given country code or ZeroAddress if the country is not in the referential. |


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


#### ⚙️ __setCountry__
Set the country contract in the referential

```js
function setCountry(address countryContract)
```
The function is expected to emit the CountrySet event. 



The country code is not expected because it is retrieved from the country contract via the interface [ISoCashCountryStateManagement](./api-ISoCashCountryStateManagement)

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract to set in the referential. If Zero or not a compatible contract, the call fails when trying to get the country code. |


