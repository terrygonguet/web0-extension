#!/usr/bin/env zx
import chokidar from "chokidar"

const { manifest_v2 } = await import("./manifest.mjs")
const colorize = chalk.magenta.bold
$.verbose = false

async function copyFiles() {
	echo(colorize("Copying source files..."))
	await fs.ensureDir("dist")
	await fs.copy("_locales", "dist/_locales")
	await fs.copy("icons", "dist/icons")
	await fs.copy("scripts", "dist/scripts")
	await fs.copy("README.md", "dist/README.md")
}

async function writeManifest() {
	echo(colorize("Writing manifest..."))
	return fs.writeJSON("dist/manifest.json", manifest_v2(), { spaces: "\t" })
}

await copyFiles()
await writeManifest()

echo(colorize("\nWatching for file changes..."))

chokidar
	.watch(["_locales", "icons", "scripts", "README.md", "manifest.mjs"], { ignoreInitial: true })
	.on("all", async () => {
		await copyFiles()
		await writeManifest()
	})
