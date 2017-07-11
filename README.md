# NodeTest

## Extended file attributes

Extended file attributes are file system features that enable users to associate computer files with metadata not interpreted
by the filesystem, whereas regular attributes have a purpose strictly defined by the filesystem (such as permissions or
records of creation and modification times). Unlike forks, which can usually be as large as the maximum file size,
extended attributes are usually limited in size to a value significantly smaller than the maximum file size.
Typical uses include storing the author of a document, the character encoding of a plain-text document, or a checksum,
cryptographic hash or digital certificate, and discretionary access control information.

## namespace

The name must be a null-terminated string prefixed by a namespace identifier and a dot character. Currently, four namespaces exist:

`user`, `trusted`, `security` and `system`

The user namespace has no restrictions with regard to naming or contents.
