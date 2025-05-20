# Mathias Renner 2024

- Bisherige Website musste komplett erneuert und nachgebaut werden, weil craft-vue nicht mehr unterstützt wrid.
- Grund: php hat von 7 auf 8 gewechselt, Craft von 3 auf 4.

## Ärger beim Deploy

- GitHub Auto-Pull/Webhook hat nicht geklappt. Lösung: `~/.ssh/git_known_hosts` löschen.
- Bilder waren nicht sichtbar. Lösung: `uploads/_small` auf 777 setzen, Inhalte auf 644. `_small` ist einer der Ordner, in dem Verkleinerungen, durch Crarfts File-Transformation gespeichert werden.

## Development

- use ddev
- docker app: ~~colima~~, OrbStack
- no npm, no valet

    $ ddev list
    $ ddev start mathiasrenner

## Deployment

See [Craft Docs](https://craftcms.com/knowledge-base/deployment-best-practices#codify-deployment-steps)


1. Pull or clone updated files using git pull;
2. Update PHP dependencies by running composer install --no-interaction;
3. Run php craft up to apply pending Craft, plugin, and content migrations, as well as project config changes;
4. Clear caches (this may include PHP’s opcache, static caches in a CDN, and/or Craft’s data and schema caches);
5. Restart any daemonized queue workers;

