## 📜 ISoCashGlobalReferentialFull

The global referential service is used to find and manage the global referential of the so|cash scope.

This interface inherits from [ISoCashGlobalReferential](./api-ISoCashGlobalReferential) and [I_IBANService](./api-I_IBANService). 



It is used to access the global referential and to create and decode IBANs.

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

#### ⚙️ __createIBAN__
Create an IBAN from a country code and a set of codes.

```js
function createIBAN(bytes2 country, string[] codes) view returns (string)
```
The function should return a valid IBAN if the country code and the codes are valid else it can fail.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 | The country code of the IBAN to create. It must be 2 letters long. |
|2 | codes | string[] | string[] | Array of codes of the IBAN to create accouding to the country standard. They must be valid for the country. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The IBAN created from the country code and the codes. |


#### ⚙️ __decodeIBAN__
Decode an IBAN to a country code and a set of codes.

```js
function decodeIBAN(string iban) view returns (bool valid, bytes2 country, string[] codes)
```
The function should return the country code and the codes if the IBAN is valid. The function should never fail. 



If the country code or the bank code cannot be resolved then the valid flag should be false.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string | The IBAN to decode. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool | True if the IBAN is valid, false otherwise. |
|2 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 | The country code of the IBAN. |
|3 | codes | string[] | string[] | Array of codes of the IBAN according to the country standard. |


#### ⚙️ __decodeIBANToContracts__
Decode an IBAN to a bank module and an account smart contract address.

```js
function decodeIBANToContracts(string iban) view returns (bool valid, address bank, address account)
```
The function should return the bank module and the account if the IBAN is valid. The function should never fail. 



If the bank or the account cannot be resolved then the valid flag should be false and the addresses are zeroed.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string | The IBAN to decode. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool | True if the IBAN is valid, false otherwise. |
|2 | bank | address | address | The bank address of the IBAN. Typically a [ISoCashBank](./api-ISoCashBank) contract or zero if the bank cannot be resolved. |
|3 | account | address | address | The account address of the IBAN. Typically a [ISoCashAccount](./api-ISoCashAccount) contract or zero if the account cannot be resolved. |


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


