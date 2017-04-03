import './starlight-loader.css';
import './mplus-1p-bold-sub-woff.css';
import './pace.css';

/* eslint-disable */
import Pace from 'imports?define=>false!pace-progress';
/* eslint-enable */

// Define as a global param in order to make it disconnectable.
const observer = new MutationObserver(function (mutation) {
    // When pace-progress's "data-progress-text" is mutated, the following code runs.
    document.getElementsByClassName("starlight-ratio")[0].textContent = mutation[0].target.getAttribute("data-progress-text");
});

let wrapper;

function createLoader() {
    const wrapper = document.createElement('div');
    const back = document.createElement('div');
    const banner = document.createElement('div');
    const panel = document.createElement('div');
    const ratio = document.createElement('div');

    wrapper.className = 'starlight-loading';
    back.className = 'starlight-back';
    banner.className = 'starlight-banner';
    panel.className = 'starlight-panel';
    ratio.className = 'starlight-ratio';

    // --------------------------------------------------
    // Setup starlight-panel

    const message_up = document.createElement('p');
    const message_dn = document.createElement('p');
    message_up.className = 'message-up';
    message_dn.className = 'message-down';
    message_up.appendChild(document.createTextNode('データダウンロード中'));
    message_dn.appendChild(document.createTextNode('※通信環境の良い所で実行してください'));
    panel.appendChild(message_up);
    panel.appendChild(message_dn);

    const progress_border = document.createElement('div');
    progress_border.className = 'progress-border';
    panel.appendChild(progress_border);

    // --------------------------------------------------
    // Setup starlight-banner

    const nowLoading = document.createElement('p');
    nowLoading.appendChild(document.createTextNode('Now Loading...'));
    banner.appendChild(nowLoading);

    const heart = document.createElement('div');
    heart.className = 'heart';
    banner.appendChild(heart);

    // --------------------------------------------------
    // Integrate

    wrapper.appendChild(back);
    wrapper.appendChild(banner);
    wrapper.appendChild(panel);
    wrapper.appendChild(ratio);
    document.body.appendChild(wrapper);
    return wrapper;
}

Pace.on('start', function () {
    if (!wrapper) {
        wrapper = createLoader();
    } else {
        wrapper.classList.remove("hide");
    }
    // --------------------------------------------------
    // Setup starlight-ratio

    // check if pace-progress's "data-progress-text" is mutated by pace.js
    const progressElem = document.getElementsByClassName("pace-progress")[0];
    observer.observe(progressElem, {attributes: true, attributeFilter: ["data-progress-text"]});
});

Pace.on('done', function () {
    const wrapper = document.getElementsByClassName("starlight-loading")[0];
    wrapper.classList.add("hide");
    observer.disconnect();
});

Pace.options = {
    elements: {
        selectors: ['img', 'video', 'audio']
    }
};

export {Pace as StarlightLoader};
