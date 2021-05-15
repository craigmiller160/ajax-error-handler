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
