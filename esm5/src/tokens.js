/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Config object passed to initialize the platform.
 *
 * \@publicApi
 * @record
 */
export function PlatformConfig() { }
/** @type {?|undefined} */
PlatformConfig.prototype.document;
/** @type {?|undefined} */
PlatformConfig.prototype.url;
/** *
 * The DI token for setting the initial config for the platform.
 *
 * \@publicApi
  @type {?} */
export var INITIAL_CONFIG = new InjectionToken('Server.INITIAL_CONFIG');
/** *
 * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
 * before current platform state is rendered to string.
 *
 * \@publicApi
  @type {?} */
export var BEFORE_APP_SERIALIZED = new InjectionToken('Server.RENDER_MODULE_HOOK');
//# sourceMappingURL=tokens.js.map