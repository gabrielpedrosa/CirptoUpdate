
function call_webhooks(webhooks) {
    webhooks.forEach(url => {
        call_webhook(url);
    });
}

function call_webhook(url) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.send();
}

function wait_to_close(delay) {
    setTimeout(function() {
        window.close();
    }, delay);
}

function start() {
    let webhookUrls = [
        "https://hooks.zapier.com/hooks/catch/20433391/21wylx7/"
    ];

    call_webhooks(webhookUrls);
    wait_to_close(2000);
}