(function(factory) {
    if (typeof exports === "object") {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    "use strict";

    var dataValidator = {};

    dataValidator.version = '1.0.0';

    var validate = function(options) {
        var errors = [];
        var $form = $(options.form);
        var $inputs = $form.find('[data-validate]');

        $inputs.each(function(index, element) {
            var $el = $(this);
            $el.removeClass("validation-error");

            if($el.data('validate-conditional')) {
                var conditional = $($el.data('validate-conditional'));

                if(!conditional.is(":checked")) {
                    return;
                }
            }

            if($el.data('validate-required')) {
                if($el.val() == "") {
                    $el.addClass("validation-error");
                    errors.push($el.data('validate-required-msg'));
                }
            }

            if($el.data('validate-format')) {
                var val = $el.val();
                var regex = new RegExp($el.data('validate-format'), 'i');

                if(!val.match(regex)) {
                    $el.addClass("validation-error");
                    errors.push($el.data('validate-format-msg'));
                }
            }
        });

        if(options.hasOwnProperty('dump')) {
            _dump(options.dump, errors);
        }

        return errors;

    }

    var _removeDuplicates = function(errors) {
        var uniqueErrors = [];

        $.each(errors, function(index, error){
            if($.inArray(error, uniqueErrors) === -1) uniqueErrors.push(error);
        });

        return uniqueErrors;
    }

    var _dump = function(container, errors) {
        var $container = $(container);
        $container.empty();
        errors = _removeDuplicates(errors); 

        $.each(errors, function(index, error) {
            $container.append('<li>'+error+'</li>');
        });
    }

    dataValidator.validate = validate;

    return dataValidator;

}));
