## 📜 ISoCashCountryManagerInternal

The interface for the internal functions of the SoCashCountryManager
### Events

#### 📢 __CountrySet__
```js
event CountrySet(bytes2 indexed country, address indexed countryContract)
```
Event emitted when a country is set in the referential
When the param countryContract is ZeroAddress, it means the country is removed from the referential
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 | The country code as a Ascii encoded bytes2 |
|2 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract for the given country code or ZeroAddress if the country is removed from the referential |


