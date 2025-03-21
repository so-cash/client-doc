## 📜 ISoCashCountryManager

The interface for the SoCashCountryManager
### Methods

#### ⚙️ __getCountry__
```js
function getCountry(bytes2 country) view returns (address contractAddress)
```
Get the country contract for the given country code
The function is expected to return the ZeroAddress if the country is not in the referential
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 | The country code as a Ascii encoded bytes2 |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | contractAddress | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract for the given country code or ZeroAddress if the country is not in the referential |


#### ⚙️ __setCountry__
```js
function setCountry(address countryContract)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address |  |


