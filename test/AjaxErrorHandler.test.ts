import createAjaxErrorHandler, { AjaxErrorHandlerConfig } from '../src';
import { AxiosError } from 'axios';

const responseMessageExtractor = jest.fn();
const errorMessageHandler = jest.fn();
const unauthorizedHandler = jest.fn();

const config: AjaxErrorHandlerConfig = {
	responseMessageExtractor,
	errorMessageHandler,
	unauthorizedHandler
};

const ajaxErrorHandler = createAjaxErrorHandler(config);

const axiosError: AxiosError = {
	message: 'Error message',
	isAxiosError: true,
	config: {},
	name: 'Axios Error',
	toJSON: () => ({}),
	response: {
		status: 500,
		statusText: 'Internal Server Error',
		headers: {},
		config: {},
		data: {
			message: 'Hello World'
		}
	}
};

const error: Error = {
	message: 'Error message',
	name: 'Error'
};

describe('Ajax Error Handler', () => {
	it('handles axios error', () => {
		throw new Error();
	});

	it('handles axios 401 error', () => {
		throw new Error();
	});

	it('handles other error', () => {
		throw new Error();
	});
});
