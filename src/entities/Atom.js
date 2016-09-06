/* Atoms.js -- Transforms raw style information into an atom object
 *
 * Copyright (C) 2016 Michael Seibt
 *
 * With contributions from: -
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

'use strict';

var Entity = require('./Entity');

var Atom = function(raw) {
  // Call parent constructor
  Entity.call(this, raw);

  // Set atom-specific entity properties
  this.type = "Atom";
  this.fillable = ['atom', 'section', 'description', 'markup', 'deprecated', 'script'];

  // Validate the raw input data for common mistakes
  if (!this.validate()) return {};

  return {
    name: raw.annotations.atom,
    descriptor: raw.descriptor,
    type: 'atom',
    section: 'Atoms > ' + this.getSection(),
    description: raw.annotations.description,
    markup: raw.annotations.markup,
<<<<<<< HEAD
    script: raw.annotations.script || false,
    deprecated: raw.annotations.deprecated || false,
=======
    deprecated: raw.annotations.deprecated,
>>>>>>> upstream/master
    location: 'atoms.html',
    hash: this.hash()
  };

};

Atom.prototype = Object.create(Entity.prototype);

module.exports = Atom;
