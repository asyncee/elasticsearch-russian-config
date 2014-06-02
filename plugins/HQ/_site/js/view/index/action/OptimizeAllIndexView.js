/*
 Copyright 2013 Roy Russo

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Latest Builds: https://github.com/royrusso/elasticsearch-HQ
 */

var OptimizeAllIndexView = Backbone.View.extend(
    {
        render:function () {
            var template = _.template(indexActionTemplate.optimizeAll, {res:this.model});
            $('#infoModal-loc').html(template);
            prettyPrint();
            $('#optimizeallmodal').modal('show');
            $('#optimizeallmodal').on('hidden', function () {
                router.navigate("indices", true);
            });
            return this;
        }
    }
);