chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: "cleanup-curpage",
		title: chrome.i18n.getMessage("contextItemCurpageTitle"),
		contexts: ["page"],
		type: "normal",
	})
	chrome.contextMenus.create({
		id: "cleanup-link",
		title: chrome.i18n.getMessage("contextItemLinkTitle"),
		contexts: ["link"],
		type: "normal",
	})
})

chrome.contextMenus.onClicked.addListener(e => {
	switch (e.menuItemId) {
		case "cleanup-curpage": {
			const url = `https://web0.cc/a?url=${encodeURIComponent(e.pageUrl)}`
			chrome.tabs.create({ url })
			break
		}
		case "cleanup-link": {
			const url = `https://web0.cc/a?url=${encodeURIComponent(e.linkUrl)}`
			chrome.tabs.create({ url })
			break
		}
	}
})
