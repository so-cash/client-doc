## 📜 ISoCashBankController

The interface for the BankController service that enables a country referential to allow banks to have the capacity to control their own declaration in the referential.

The interface is used to set and unset the bank controller for a bank and check the current status of the controller. 



Several controllers can be set for a particular bank code.

### Methods

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


