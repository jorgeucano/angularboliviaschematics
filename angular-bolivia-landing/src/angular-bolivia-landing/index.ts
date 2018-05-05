// new imports
import {chain, mergeWith} from '@angular-devkit/schematics';
import { apply, filter, move, Rule, template, url, branchAndMerge } from "@angular-devkit/schematics";
import { classify } from "@angular-devkit/core/src/utils/strings";
import {normalize} from "@angular-devkit/core";
// schema
import { schemaOptions } from "./schema";

const stringUtils = {classify};

function filterTemplates(options: schemaOptions): Rule {
    if (!options.service) {
        return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
    }
    return filter(path => !path.match(/\.bak$/));
}

export default function(options: schemaOptions) {
    // validacion para que no falle
    options.path = options.path ? normalize(options.path) : options.path;

    const templateSource = apply(url('./files'), [
        filterTemplates(options),
        template({
            ...stringUtils,
            ...options
        }),
        move('src/app/angular-bolivia-landing')
    ]);

    return chain([
        branchAndMerge(chain([
            mergeWith(templateSource)
        ]))
    ]);
}
