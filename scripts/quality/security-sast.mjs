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
		// semgrep-core has been OOM-killed (signal -11) on the GitHub-hosted runner.
		// -j 1 alone didn't resolve it, so also cap per-file memory: semgrep skips
		// (with a warning) any single file that would exceed this instead of the
		// whole process dying. See https://semgrep.dev/docs/cli-reference.
		'-j',
		'1',
		'--max-memory',
		'2000',
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
		'--exclude',
		'package-lock.json',
		'.'
	],
	[
		'Install Semgrep CE before running this check.',
		'Windows: pipx install semgrep or python -m pip install --user semgrep',
		'macOS: brew install semgrep or pipx install semgrep',
		'Linux: pipx install semgrep or python3 -m pip install --user semgrep'
	].join('\n')
);
