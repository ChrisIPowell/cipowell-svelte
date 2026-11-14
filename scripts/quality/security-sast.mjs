import { runCommand } from './run-command.mjs';

await runCommand(
	'semgrep',
	[
		'scan',
		'--config',
		'p/javascript',
		'--config',
		'p/typescript',
		'--config',
		'p/nodejs',
		'--error',
		// semgrep-core has been OOM-killed (signal -11) on the default parallel job
		// count on standard GitHub-hosted runners; run single-threaded to keep peak
		// memory down. See https://semgrep.dev/docs/cli-reference for the -j flag.
		'-j',
		'1',
		'--exclude',
		'node_modules',
		'--exclude',
		'.svelte-kit',
		'--exclude',
		'.tmp',
		'--exclude',
		'build',
		'--exclude',
		'coverage',
		'--exclude',
		'storybook-static',
		'.'
	],
	[
		'Install Semgrep CE before running this check.',
		'Windows: pipx install semgrep or python -m pip install --user semgrep',
		'macOS: brew install semgrep or pipx install semgrep',
		'Linux: pipx install semgrep or python3 -m pip install --user semgrep'
	].join('\n')
);
