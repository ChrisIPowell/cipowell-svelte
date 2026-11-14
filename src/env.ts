import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	CONTENTFUL_ENVIRONMENT: {
		schema: (value) => value,
		description: 'Contentful environment to query against (defaults to "master").'
	},
	CONTENTFUL_API_KEY: {
		schema: (value) => value,
		description: 'Contentful Content Delivery API access token.'
	},
	CONTENTFUL_PREVIEW_API_KEY: {
		schema: (value) => value,
		description: 'Contentful Preview API access token, used when preview mode is enabled.'
	}
});
