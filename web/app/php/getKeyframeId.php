<?

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



?><?php
session_start();
include ('../config.php');

$id_video = $_GET['id'];
$timepoint = $_GET['timepoint'];

$keyframe = '';
$query = "SELECT id_media FROM media WHERE id_media_video = ".$id_video." AND shot_startpoint > ".($timepoint)."  LIMIT 1";
$result = mysql_query($query) or trigger_error(mysql_error());
while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
	$keyframe = $row['id_media'];
}

echo $keyframe;
?>