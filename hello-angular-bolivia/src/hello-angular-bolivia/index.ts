import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloAngularBolivia(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
      tree.create(options.name, 'Hola Angular Bolivia!');
      return tree;
  };
}
