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

const { ErrorWrapper, createUpdater } = require('@adobe/aio-lib-core-errors').AioCoreSDKErrorWrapper

const codes = {}
const messages = new Map()

/**
 * Create an Updater for the Error wrapper
 *
 * @ignore
 */
const Updater = createUpdater(
  // object that stores the error classes (to be exported)
  codes,
  // Map that stores the error strings (to be exported)
  messages
)

/**
 * Provides a wrapper to easily create classes of a certain name, and values
 *
 * @ignore
 */
const E = ErrorWrapper(
  // The class name for your SDK Error. Your Error objects will be these objects
  'CloudManagerError',
  // The name of your SDK. This will be a property in your Error objects
  'CloudManagerSDK',
  // the object returned from the CreateUpdater call above
  Updater
  // the base class that your Error class is extending. AioCoreSDKError is the default
  /* AioCoreSDKError, */
)

module.exports = {
  codes,
  messages
}

// Define your error codes with the wrapper
E('ERROR_SDK_INITIALIZATION', 'SDK initialization error(s). Missing arguments: %s')
E('ERROR_LIST_PROGRAMS', 'Cannot retrieve programs: %s')
E('ERROR_GET_PROGRAM', 'Cannot retrieve program: %s')
E('ERROR_LIST_PIPELINES', 'Cannot retrieve pipelines: %s')
E('ERROR_FIND_PROGRAM', 'Could not find program %s')
E('ERROR_FIND_PIPELINES', 'Could not find pipelines for program %s')
E('ERROR_FIND_PIPELINE_START', 'Cannot start execution. Pipeline %s does not exist in program %s.')
E('ERROR_FIND_PIPELINE', 'Pipeline %s does not exist in program %s.')
E('ERROR_PIPELINE_START', 'Cannot create execution: %s')
E('ERROR_PIPELINE_START_RUNNING', 'Cannot create execution. Pipeline already running.')
E('ERROR_GET_EXECUTION', 'Cannot get execution: %s')
E('ERROR_FIND_STEP_STATE', 'Cannot find step state for action %s on execution %s.')
E('ERROR_GET_METRICS', 'Cannot get metrics: %s.')
E('ERROR_FIND_CURRENT_STEP', 'Cannot find a current step for pipeline %s.')
E('ERROR_FIND_CANCEL_LINK', 'Cannot find a cancel link for the current step (%s). Step may not be cancellable.')
E('ERROR_FIND_ADVANCE_LINK', 'Cannot find an advance link for the current step (%s).')
E('ERROR_CANCEL_EXECUTION', 'Cannot cancel execution: %s')
E('ERROR_ADVANCE_EXECUTION', 'Cannot advance execution: %s')
E('ERROR_FIND_WAITING_STEP', 'Cannot find a waiting step for pipeline %s.')
E('ERROR_FIND_ENVIRONMENTS', 'Could not find environments for program %s.')
E('ERROR_FIND_ENVIRONMENT', 'Could not find environment %s for program %s.')
E('ERROR_RETRIEVE_ENVIRONMENTS', 'Could not find environments for program %s.')
E('ERROR_DELETE_PIPELINE', 'Cannot delete pipeline: %s')
E('ERROR_GET_LOG', 'Cannot get log: %s')
E('ERROR_NO_LOG_REDIRECT', 'Log %s did not contain a redirect. Was %s.')
E('ERROR_LOG_DOWNLOAD', 'Could not download %s to %s (%s %s).')
E('ERROR_LOG_UNZIP', 'Could not unzip %s to %s.')
E('ERROR_LOG_INITIAL_SIZE', 'Could not get initial size of %s')
E('ERROR_FIND_LOG', 'Log not found: %s (%s %s)')
E('ERROR_TAIL_LOG', 'Cannot tail log: %s (%s %s)')
E('ERROR_FIND_TAIL_LOGS', 'No logs for tailing available in %s for program %s')
E('ERROR_FIND_LOGS', 'No logs available in %s for program %s')
E('ERROR_NO_BUILD_PHASE', 'Pipeline %s does not appear to have a build phase.')
E('ERROR_NO_DEVELOPER_CONSOLE', 'Environment %s does not appear to support Developer Console.')
E('ERROR_FIND_VARIABLES_LINK_ENVIRONMENT', 'Could not find variables link for environment %s for program %s.')
E('ERROR_FIND_VARIABLES_LINK_PIPELINE', 'Could not find variables link for pipeline %s for program %s.')
E('ERROR_GET_VARIABLES', 'Cannot get variables: %s')
E('ERROR_SET_VARIABLES', 'Cannot set variables: %s')
E('ERROR_DELETE_PROGRAM', 'Cannot delete program: %s')
E('ERROR_DELETE_ENVIRONMENT', 'Cannot delete environment: %s')
E('ERROR_UPDATE_PIPELINE', 'Cannot update pipeline: %s')
