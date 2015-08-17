# data-validator
A module for defining all of your form validation logic as data attributes.

## Example

```javascript
var validator = require('data-validator');

var errors = validator.validate({
  form: '.form',
  dump: '.errorList'
});
```

> Requires jQuery
