# Material Design Icons on Silverstripe 4 admin

Provide [Material Design Icons](https://github.com/google/material-design-icons) for Silverstripe admin menu items.

Finally more icons!

Only uses simple css and javascript to replace class names that startswith with `mdi:`

## Installation

```
composer require jinjie/silverstripe-admin-material-icons
```

## How to use

No configuration is required. Make use of the current [$menu_icon_class](https://docs.silverstripe.org/en/4/developer_guides/customising_the_admin_interface/modeladmin/#custom-modeladmin-css-menu-icons-using-built-in-icon-font).
Instead of using the built in font, use something like `mdi:face`.

### Examples

```php
// In ModelAdmin
class MyModelAdmin extends ModelAdmin {
    private static $menu_icon_class = 'mdi:face';
}
```

```yml
# Or in yaml
SilverStripe\SiteConfig\SiteConfigLeftAndMain:
  menu_icon_class: 'mdi:settings'
```

## How it works

A script will find classes in that starts with `mdi:`, adds `material-icons` to it and text in the in the element.

## License

See [License](license.md)

## Maintainers
 * Kong Jin Jie <jinjie@swiftdev.sg>
  
## Development and contribution

If you would like to make contributions to the module please ensure you raise a pull request and discuss with the module maintainers.
