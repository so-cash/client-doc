## 📜 ISoCashCountryReferential

The interface for the CountryReferential 

The interface is used to get the country code, the bank module, the correspondent banks, the FX provider and the SSI 



Inherits from the [ISoCashBankController](./api-ISoCashBankController), [ISoCashBankControllerInternal](./api-ISoCashBankControllerInternal) and [ISoCashCountryStateManagement](./api-ISoCashCountryStateManagement) interfaces

### Events

#### 📢 __BankControllerSet__
Event emitted when a bank controller is set or removed for a bank

```js
event BankControllerSet(bytes10 indexed bankCode, address controller, bool indexed allowed)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | controller | address | address |  |
|3 | allowed | bool | bool |  |


#### 📢 __BankModuleSet__
Event emitted when a bank module is set for a bank

```js
event BankModuleSet(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, address indexed bankModule)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | bankModule | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address |  |


#### 📢 __CorrespondentBankChange__
Event emitted when a correspondent bank is set for a bank

```js
event CorrespondentBankChange(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, tuple(bytes2 country, bytes10[] codes) correspondent, bool added)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |
|5 | added | bool | bool |  |


#### 📢 __FXProviderSet__
Event emitted when a FX provider is set for a bank

```js
event FXProviderSet(bytes10 indexed bankCode, address indexed fxProvider, bool indexed added)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address |  |
|3 | added | bool | bool |  |


#### 📢 __SSIChange__
Event emitted when a SSI is set for a bank

```js
event SSIChange(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, tuple(uint8 model, address bank, address account) account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | account | [BankAccount](./api-t-BankAccount.md) | tuple |  |


### Methods

#### ⚙️ __addCorrespondent__
Add a correspondent bank for a bank defined by its codes.  



A Correspondent is a bank that can sent payment instruction to the bank and therefore call the `interbankTransfer()` function in the [ISoCashInterBank](./api-ISoCashInterBank) interface.

```js
function addCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent)
```
The function is expected to emit the CorrespondentBankChange event. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module that defines this correspondent |
|2 | currency | bytes3 | bytes3 | The currency managed by the correspondent bank. |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the correspondent bank that is set for the bank. |


#### ⚙️ __countryCode__
get the country code of this country referential

```js
function countryCode() view returns (bytes2)
```
The function returns the country code of the country referential implementation.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bytes2 | bytes2 | The country code of the country referential in bytes like `0x4652` for `FR`. |


#### ⚙️ __delCorrespondent__
Remove a correspondent bank for a bank defined by its codes.

```js
function delCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent)
```
The function is expected to emit the CorrespondentBankChange event. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module that defines this correspondent |
|2 | currency | bytes3 | bytes3 | The currency managed by the correspondent bank. |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the correspondent bank that is removed for the bank. |


#### ⚙️ __getBankModule__
Get the bank module for a bank defined by its codes and currency

```js
function getBankModule(bytes10[] codes, bytes3 currency) view returns (address)
```
The function returns the bank module for the bank defined by its codes and currency or zero if not found.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module. Typically the bank code, branch code. Any number of codes can be set. |
|2 | currency | bytes3 | bytes3 | The currency managed by the bank module. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address | The bank module for the bank defined by its codes and currency or zero if not found. |


#### ⚙️ __getCorrespondentBanks__
Get the correspondent banks for a bank defined by its codes and currency 



Returns the list of banks that are allowed to send payment instructions to the bank.

```js
function getCorrespondentBanks(bytes10[] codes, bytes3 currency) view returns (tuple(bytes2 country, bytes10[] codes)[] correspondents)
```
The function returns the list of correspondent banks defined by their country, codes. The result can be empty.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module reachable by these correspondents |
|2 | currency | bytes3 | bytes3 | The currency managed by the correspondent banks. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondents | [BankIdentifier[]](./api-t-BankIdentifier.md) | tuple[] | The list of correspondent banks for the bank defined by its codes and currency. |


#### ⚙️ __getSSI__
Get the Default Settlement Instructions (SSI) for a bank and currency 



For the moment a single SSI can be defined by bank and currency.

```js
function getSSI(bytes10[] codes, bytes3 currency) view returns (tuple(uint8 model, address bank, address account) account)
```
The function returns the SSI for the bank defined by its codes and currency or zeros if not found.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module that defines this SSI |
|2 | currency | bytes3 | bytes3 | The currency of the SSI. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [BankAccount](./api-t-BankAccount.md) | tuple | The SSI for the bank defined by its codes and currency or zeros if not found. |


#### ⚙️ __isBankController__
Check if a wallet is a controller for a bank code

```js
function isBankController(bytes10 bankCode, address controller) view returns (bool)
```
The function returns true if the wallet is a controller for the bank code, false otherwise.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank to check the controller for. |
|2 | controller | address | address | The address of the wallet to check if it is a controller for the bank. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | True if the wallet is a controller for the bank code, false otherwise. |


#### ⚙️ __isCorrespondent__
Check if a bank is a correspondent for the provided bank

```js
function isCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent) view returns (bool)
```
The function returns true if the bank is a correspondent for the provided bank, false otherwise.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module that is expected to have the correspondent |
|2 | currency | bytes3 | bytes3 | The currency managed by the correspondent bank. |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple | The bank identifier of the correspondent bank that is checked for the bank. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | True if the bank is a correspondent for the provided bank, false otherwise. |


#### ⚙️ __setBankController__
Set the bank controller for a bank code

```js
function setBankController(bytes10 bankCode, address controller)
```
The function is expected to emit the BankControllerSet event. 



Only an allowed wallet for the country referential should be allowed to call this function.  



Note that the wallet address can be the address of another smart contract that the bank is using to automate its declaration in the referential.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank the controller wallet is given access to. |
|2 | controller | address | address | The address of the wallet that is given access to the bank. |


#### ⚙️ __setBankModule__
Set the bank module contract for a bank defined by its codes

```js
function setBankModule(bytes10[] codes, bytes3 currency, address bankModule)
```
The function is expected to emit the BankModuleSet event. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module. Typically the bank code, branch code. Any number of codes can be set. |
|2 | currency | bytes3 | bytes3 | The currency managed by the bank module. |
|3 | bankModule | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address | The address of the bank module that is set for the bank. Typically a [ISoCashBankExternal](./api-ISoCashBankExternal) contract. |


#### ⚙️ __setFXProvider__
Set the FX provider for a bank

```js
function setFXProvider(bytes10 bankCode, address fxProvider)
```
The function is expected to emit the FXProviderSet event. 



The Fx provider does not need to be unique per bank code, there is no state recording of the FX Provided in the chain, only the event enables developpers to find the FX provider for a bank. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank the FX provider is set for. |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address | The address of the FX provider that is set for the bank. Typically a [ISoCashFXProvider](./api-ISoCashFXProvider) contract. |


#### ⚙️ __setSSI__
Set the SSI for a bank

```js
function setSSI(bytes10[] codes, bytes3 currency, tuple(uint8 model, address bank, address account) account)
```
The function is expected to emit the SSIChange event. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] | The codes that defines the bank module that defines this SSI |
|2 | currency | bytes3 | bytes3 | The currency of the SSI. |
|3 | account | [BankAccount](./api-t-BankAccount.md) | tuple | The bank account that is set for the bank. Can be a so|cash account or an ERC20 account. |


#### ⚙️ __unsetBankController__
Unset the bank controller for a bank code

```js
function unsetBankController(bytes10 bankCode, address controller)
```
The function is expected to emit the BankControllerSet event. 



Only an allowed wallet for the country referential should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank the controller wallet is removed from. |
|2 | controller | address | address | The address of the wallet that is removed from the bank. |


#### ⚙️ __unsetFXProvider__
Remove the FX provider for a bank

```js
function unsetFXProvider(bytes10 bankCode, address fxProvider)
```
The function is expected to emit the FXProviderSet event. 



Only the controller of the bank should be allowed to call this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank the FX provider is removed for. |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address | The address of the FX provider that is removed for the bank. |


