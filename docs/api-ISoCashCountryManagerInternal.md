## 📜 ISoCashCountryManagerInternal

The interface for the internal functions of the CountryManager facet

The interface collects the events that are emitted by the CountryManager facet

### Events

#### 📢 __CountrySet__
Event emitted when a country is set in the referential

```js
event CountrySet(bytes2 indexed country, address indexed countryContract)
```
When the param countryContract is ZeroAddress, it means the country is removed from the referential

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 | The ISO country code as a Ascii encoded bytes2. Typically you send `0x4652` for FR. |
|2 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract address for the given country code or ZeroAddress if the country is removed from the referential |


