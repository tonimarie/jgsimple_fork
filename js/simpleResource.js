/*!
 * @package:  JoomGap Library
 *
 * @author    Name: Andrea Gentil & Anibal Sanchez, JoomGap.com
 *            Email: team[at]joomgap.com
 *            Url: http://www.JoomGap.com
 *
 * @copyright Copyright (C) 2015 - 2016 Andrea Gentil & Anibal Sanchez.
 *            All rights reserved.
 *
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 */

/* globals angular */

"use strict";

angular.module('jg.simple-resource', ['ngResource'])
  .factory('JgSimpleResource', ['$resource',

    function ($resource) {

      var _this = this;

      _this.getResource = function (apiMethodUrl, parameters, success, error, opts) {
        var options;

        // Connection options defined
        if (opts) {
          options = opts;
        } else {
          // In Mobile setup, default POST
          if (window.cordova) {
            options = {
              method: 'POST'
            };
          } else {
            // In desktop setup, default JSONP for development
            options = {
              method: 'JSONP',
              callback: 'JSON_CALLBACK',
              params: {
                callback: 'JSON_CALLBACK'
              }
            };
          }
        }

        _this.webResource = $resource(apiMethodUrl, {}, { get: options });

        return _this.webResource.get(parameters, success, error);
      };

      return {
        get: _this.getResource
      };

    }]);
