## 📜 ISoCashCountryManager

The interface for the CountryManager facet

The interface is used to get and set the country contract in the referential

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


