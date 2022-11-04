
    // Hides side pannel of suggested videos
    document.getElementById("related").style.visibility = "hidden";

    // Hides comment section
    document.getElementById("comments").style.visibility = "hidden";

    // Hides homepage button
    document.getElementById("logo").style.visibility = "hidden";

    // Hides sidebar
    document.getElementById("scrim").style.visibility = "hidden";

    // Hides sidebar
    document.getElementById("guide").style.visibility = "hidden";

    // Hides suggested videos on homepage
    document.getElementById("contents").style.visibility = "hidden";

    // Hides endscreen suggested videos 
    document.getElementsByClassName('html5-endscreen')[0].style.visibility = 'hidden';


    chrome.runtime.onInstalled.addListener(() => {
        chrome.action.setBadgeText({
            text: "OFF",
        });
    });

    const extensions = 'https://developer.chrome.com/docs/extensions'
    const webstore = 'https://developer.chrome.com/docs/webstore'

    chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });