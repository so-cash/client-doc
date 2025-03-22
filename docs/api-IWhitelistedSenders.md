## 📜 IWhitelistedSenders interface for whitelisted senders

The whitelisted senders service is used to manage the list of senders that are allowed to send transactions to the so|cash scope. 

It is a facet to manage a list of allowed wallets for any kind of service, so it can be imported by other facet and this interface exposed.

This interface is used to manage the list of senders that are allowed by other facet.  

This implementation does not do anything specifically other than enabling the setting of the allowed wallets. 

Note that the implementation normally also implement [IOwnable](./api-IOwnable) to manage the owner of the whitelisting. 

Inherit from [IWhitelistedSendersInternal](./api-IWhitelistedSendersInternal) to access the events.

### Events

#### 📢 __Whitelisted__
Emitted when a sender is whitelisted or blacklisted.

```js
event Whitelisted(address indexed account, bool status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |
|2 | status | bool | bool |  |


### Methods

#### ⚙️ __blacklist__
Remove sender from the whitelist.

```js
function blacklist(address oldSender)
```
Only an other whitelisted sender (or the owner, or the targetted sender) can blacklist a sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address | The address of the sender to remove. |


#### ⚙️ __isWhitelisted__
Check if a sender is whitelisted.

```js
function isWhitelisted(address sender) view returns (bool)
```
No control of caller is done in this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | sender | address | address | The address of the sender. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the sender is whitelisted or the owner, false otherwise. |


#### ⚙️ __whitelist__
Whitelist a sender.

```js
function whitelist(address newSender)
```
Only an other whitelisted sender (or the owner) can whitelist a new sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address | The address of the sender. |


