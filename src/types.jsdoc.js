/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Options to the listPipeline function
 *
 * @typedef {object} ListPipelineOptions
 * @property {boolean} busy - if true, only busy pipelines will be returned
 */

/**
 * @typedef {object} DownloadedLog
 * @property {string} path - the path where the log was stored
 * @property {string} url - the url of the log that was downloaded
 */

/**
 * @typedef {object} PipelineUpdate
 * @property {string} branch - the new branch
 * @property {string} repositoryId - the new repository id
 */

/**
 * @typedef {object} CommerceCLICommandStatus
 * @property {string} id - the id of the command
 * @property {string} status - the status of the command
 * @property {string} type - the type of command
 * @property {string} command - the command
 * @property {string} message - a status message about the command
 * @property {string} options - options passed to the command
 * @property {string} startedAt - started time
 * @property {string} completedAt - completed time
 * @property {string} startedBy - user initiating the command
 */
