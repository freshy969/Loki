/**
 * Copyright 2014 Micc (Media Integration and Communication Center) http://www.micc.unifi.it
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @author      Media Integration and Communication Center http://www.micc.unifi.it (Micc) <info@micc.unifi.it>
 * @license     Apache License https://github.com/miccunifi/Loki/LICENSE.txt
 * @link        Official page and description: http://www.micc.unifi.it/vim/opensource/loki-a-cross-media-search-engine/
 *              GitHub Repository: https://github.com/miccunifi/Loki
 * 
*/

//PARAMS TO BE CUSTOMIZED
var absoluteRootPath= 'http://localhost/Loki/web/';
var solrUrl= 'http://localhost:8080/solr_471/loki/';


//Global config

var CFG = {
		//Directory absolute path
		absoluteRootPath: absoluteRootPath,
		//Directory absolute path
		absolutePath: absoluteRootPath+'app/',
		//Media server path
		mediaDirPath: absoluteRootPath+'media/',
		//Solr path
		solrCoreUrl: solrUrl,
		//Solr select url for search
		solrSelectUrl: solrUrl+'select?',
		//Solr Lire plugin path
		solrLireUrl: solrUrl+'lireq?',
		//Solr Proxy url
		solrProxyUrl: absoluteRootPath+'app/php/solrProxy.php',
		//Set distance for LIRE
		LIREdistanceSearch: 50,
		LIREdistanceCluster: 30,
		maxResults: 15
};
