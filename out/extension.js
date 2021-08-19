"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const cp = require("child_process");
function activate(context) {
    let disposable = vscode.commands.registerCommand('My-Pallets.openNewTabWT', () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const paths = (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.map(folder => folder.uri.path);
        console.log(paths, vscode.workspace.name);
        if (paths && paths.length > 0)
            console.log(yield execShell(`wt -w 0 nt -d ${paths[0][0] === '/' ? paths[0].slice(1) : paths[0]}`));
        // vscode.window.createTerminal()
        vscode.window.showInformationMessage('Hello World from Test!');
    }));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
const execShell = (cmd) => new Promise((resolve, reject) => {
    cp.exec(cmd, (err, out) => {
        if (err) {
            console.log(err);
            return reject(err);
        }
        return resolve(out);
    });
});
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map