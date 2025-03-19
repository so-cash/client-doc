## Finding banks and accounts requires the referential

In the blockchain, banks and accounts are found by identifiers and these can be from the global referential. Ask your bank for its address.

The global referential is a central place linking country related store of referential data. Each country referential data is meant to be managed by a local regulator (e.g. AMF in France ...).

The local regulator is the one attributing bank code to the banks. It will allow the banks to self register their back office modules in the referential of their country.

Accounts are identified by IBAN (or IBAN like for countries not implementing IBAN yet). To resolve the IBAN of an account, the referential one can query the referential that will find the bank code and and ask the bank to resolve the account number into the smart contract of the account.
