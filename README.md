# data-validator
A module for defining all of your form validation logic as data attributes.

### Why?

If anything is going to change on the fly it is your form validation requirements.
This module prevents you from having to dig into your JS files.  It also makes it
easy to have localized error messaging.

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

##### Globals

```javascript
var errors = validator.validate({
  form: '.form',
  dump: '.errorList'
});

if (errors.length < 1) {
  // Carry on...
}
```

##### CommonJS

```javascript
var validator = require('data-validator');

var errors = validator.validate({
  form: '.form',
  dump: '.errorList'
});

if (errors.length < 1) {
  // Carry on...
}
```

> Requires jQuery
