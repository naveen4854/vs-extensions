import * as vscode from 'vscode';
import * as cp from "child_process";

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('My-Pallets.openNewTabWT', async () => {
		const paths = vscode.workspace.workspaceFolders?.map(folder => folder.uri.path);
		console.log(paths, vscode.workspace.name);
		if (paths && paths.length > 0) {
			console.log(await execShell(`wt -w 0 nt -d ${paths[0][0] === '/' ? paths[0].slice(1) : paths[0]}`));
			vscode.window.showInformationMessage('Opened in Windows Terminal!!');
		}
	});

	context.subscriptions.push(disposable);
}

const execShell = (cmd: string) =>
	new Promise<string>((resolve, reject) => {
		cp.exec(cmd, (err, out) => {
			if (err) {
				console.log(err)
				return reject(err);
			}
			return resolve(out);
		});
	});

export function deactivate() { }
