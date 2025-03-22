## 📜 IWhitelistedSendersInternal

The whitelisted senders service emits events defined in this interface.

This interface exposes the events of the whitelisted senders service.

### Events

#### 📢 __Whitelisted__
Emitted when a sender is whitelisted or blacklisted.

```js
event Whitelisted(address indexed account, bool status)
```
The purpose of the whitelisting is context dependent.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address | The address of the sender. |
|2 | status | bool | bool | The status of the sender: true is allowed, false otherwise. |


