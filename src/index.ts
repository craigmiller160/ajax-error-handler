import { DefaultErrorHandler } from '@craigmiller160/ajax-api';
import { AxiosError, AxiosResponse } from 'axios';

const getFullErrorMessage = (errorMsg: string, error: Error) =>
	`${errorMsg} Message: ${error.message}`;

export interface AjaxErrorHandlerConfig {
	responseMessageExtractor?: (response: AxiosResponse) => string;
	errorMessageHandler?: (message: string) => void;
	unauthorizedHandler?: () => void;
}

const createAjaxErrorHandler = (
	config?: AjaxErrorHandlerConfig
): DefaultErrorHandler => {
	return (status: number, error: Error, requestMessage?: string): void => {
		if (status > 0 && (error as AxiosError).response) {
			const response: AxiosResponse | undefined = (error as AxiosError)
				.response;
			if (response) {
				const responseMsg =
					config?.responseMessageExtractor?.(response) ?? '';
				const fullResponseMsg = responseMsg
					? `Response Message: ${responseMsg}`
					: '';
				const errorMsg = getFullErrorMessage(
					requestMessage || '',
					error
				);
				const fullMsg = `${errorMsg} Status: ${status} ${fullResponseMsg}`;
				config?.errorMessageHandler?.(fullMsg);
			}

			if (status === 401) {
				config?.unauthorizedHandler?.();
			}
		} else {
			const errorMsg = getFullErrorMessage(requestMessage || '', error);
			config?.errorMessageHandler?.(errorMsg);
		}
	};
};

export default createAjaxErrorHandler;
