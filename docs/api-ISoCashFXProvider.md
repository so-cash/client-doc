## 📜 ISoCashFXProvider interface 

Interface for FX settlement and account association

This interface exposes methods to manage an FX Provider smart contract 

Inherits from [ISoCashFXProviderInternal](./api-ISoCashFXProviderInternal). 

An FXProvider smart contract is a simple solution to execute atomically two transfers in two different currencies with a rate signed by an external private key and valid for a certain amount of time. 

The smart contract is expose to its users and therefore offers features to get a rate from an external API (`getFXRateSource()`). 

The smart contract handles [FXRate](./api-t-FXRate) structures that are signed by a private key and verified by the smart contract. 

This structures is defined as follow:

 | Field          | Description                                                                                                              |
 |----------------|--------------------------------------------------------------------------------------------------------------------------|
 | `rate`         | The rate value in decimal form (1 base unit = rate quote unit * 10,000) - To be adjusted according to currency decimals                                                            |
 | `rateTime`     | The timestamp when the rate was created, in seconds                                                                      |
 | `expiryTime`   | The timestamp when the rate will expire, in seconds                                                                      |
 | `base`      | The base currency of the rate                                                                                            |
 | `quote`     | The quote currency of the rate                                                                                           |


### Events

#### 📢 __CurrencyAccountSet__
Event emitted when a currency account is set in the FX provider smart contract

```js
event CurrencyAccountSet(bytes3 indexed ccy, address account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### 📢 __FXSettlement__
Event emitted when the FX Provider smart contract settle the operation

```js
event FXSettlement(address indexed from, address indexed to, uint256 amount, uint256 rate)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | amount | uint256 | uint256 |  |
|4 | rate | uint256 | uint256 |  |


### Methods

#### ⚙️ __getFXRateSource__
Get the FX Rate API URL for a currency pair

```js
function getFXRateSource(bytes3 base, bytes3 quote) view returns (string)
```
Look at the `setFXRateSource()` method for more information

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | base | [CCY](./api-t-CCY.md) | bytes3 | The base currency of the rate |
|2 | quote | [CCY](./api-t-CCY.md) | bytes3 | The quote currency of the rate |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The URL of the API to get the rate |


#### ⚙️ __getRateSigner__
Get the rate signer of the FX Provider API

```js
function getRateSigner() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address | The address of the private key that signs the rates in the API |


#### ⚙️ __hashOfFXRate__
Calculate the hash of a FX Rate 

```js
function hashOfFXRate(tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate) view returns (bytes32)
```
The hash is `keccak256(abi.encodePacked(tx.origin, rate.base, rate.quote, rate.rate, rate.rateTime, rate.expiryTime))` 

The `tx.origin` is used to prevent replay attacks and represents the address that will initiate the settlement with that rate 

You can use this function to create the hash, or you can calculate it yourself off-chain.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | rate | [FXRate](./api-t-FXRate.md) | tuple | The FX Rate to hash |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bytes32 | bytes32 | The hash of the FX Rate |


#### ⚙️ __setCurrencyAccount__
Set the account of a currency in the FX Provider smart contract

```js
function setCurrencyAccount(bytes3 ccy, address account)
```
Only a whitelisted wallet of FX Provider smart contract can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 | The currency of the account |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to set. The FXProvider smart contract should be whitelisted on the account |


#### ⚙️ __setFXRateSource__
Set the FX Rate API URL for a currency pair

```js
function setFXRateSource(bytes3 base, bytes3 quote, string source)
```
Only a whitelisted wallet of FX Provider smart contract can call this method. 

In the current implementation, the currencies are not used and a single api url can be set. 

The API should follow the following standard: `https://<server.domain>/<path>?base=<base>&quote=<quote>&amount<amount>&origin<wallet-address-of-caller>` 

It should return a JSON object with the following fields:  

```js
 {
 rate: number; // rate value in decimal form (1 base unit = rate quote unit)
 rateTime: number; // the timestamp when the rate was created, in seconds
 expiryTime: number; // the timestamp when the rate will expire, in seconds
 baseCcy: string; // the base currency of the rate
 quoteCcy: string; // the quote currency of the rate
 signature: string; // the signature of the rate by the rate signer as a base64 encoded string
 signerAddress: string; // the address of the rate signer in 0x123...DEF format
 requestorAddress: string; // the tx.origin of the requestor, used to create the signature (integrated in the hash)
 }
 ```

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | base | [CCY](./api-t-CCY.md) | bytes3 | The base currency of the rate (not used in the current implementation) |
|2 | quote | [CCY](./api-t-CCY.md) | bytes3 | The quote currency of the rate (not used in the current implementation) |
|3 | source | string | string | The URL of the API to get the rate |


#### ⚙️ __setRateSigner__
Set the rate signer of the FX Provider API

```js
function setRateSigner(address signer)
```
Only a whitelisted wallet of FX Provider smart contract can call this method.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | signer | address | address | The address of the private key that signs the rates in the API |


#### ⚙️ __settlement__
Execute the settlement of a FX operation which rate has been obtained from the API

```js
function settlement(tuple(address account, bytes11 bic, bytes32 iban) from, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate, bytes signature, string details) returns (bool)
```
The rate will be verified against the signature and the time validity 

Before calling this method the caller must allow the FXProvider smart contract to spend the base currency amount from the `from` account using the `approve()` method.  

Then the FX Provider smart contract calculate the amount of the quote currency to credit to the `to` account and execute the transfer. 

The transfer is done atomically, in the form on two legs of payment  

- One leg is the debit of the `from` account in the base currency; credit the base currency account of the FX Provider 

- The second leg is the debit of the quote currency account of the FX Provider; credit the `to` account in the quote currency 

If the FX Provider does not have enough funds in the quote currency, then the settlement fails.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The account to debit in the base currency |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The account to credit in the quote currency |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the base currency |
|4 | rate | [FXRate](./api-t-FXRate.md) | tuple | The FX rate used for the settlement |
|5 | signature | bytes | bytes | The signature of the rate by the rate signer |
|6 | details | string | string | The details of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the settlement is successful, false or fail otherwise |


#### ⚙️ __verifyFXRate__
Verify the signature of a FX Rate

```js
function verifyFXRate(tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate, bytes signature) view returns (bool)
```
The signature is a bytes array of 65 bytes that represents the ecdsa signature of the hash of the rate. 

The signature is created by the API providing the rate. The signature DO NOT apply ethereum signature modifications:  No prefix; no v = 27 or 28; no chain id; But the recovery id is 0 or 1. The `secp256k1.ecdsaSign(hash, pk)` of the https://www.npmjs.com/package/secp256k1 library.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | rate | [FXRate](./api-t-FXRate.md) | tuple |  |
|2 | signature | bytes | bytes |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


