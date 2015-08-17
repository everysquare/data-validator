# data-validator
A module for defining all of your form validation logic as data attributes.

## Example

```html
<form class="form">

  <input type="text" name="name"
    data-validate
    data-validate-required="true"
    data-validate-required-msg="Please enter your name." />
    
  <input type="text" name="email"
    data-validate
    data-validate-required="true"
    data-validate-required-msg="Please enter your email."
    data-validate-format="^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$"
    data-validate-format-msg="Please enter a valid email address." />
    
</form>
```

```javascript
var validator = require('data-validator');

var errors = validator.validate({
  form: '.form',
  dump: '.errorList'
});
```

> Requires jQuery
