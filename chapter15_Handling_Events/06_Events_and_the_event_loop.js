/** Events and the event loop */

/**
 * In the context of the event loop, browser event handlers behave like other
 * asynchoronous notifications. They are scheduled when the event occurs but must
 * wait for other scripts that are running to finish before they get a chance to run.
 *
 * The fact that events can be processed only when nothing else is running means that,
 * if the event loop is tied up with other work, any iteraction with the page (which
 * happens through events)   will be delayed until there's time to process it. So if
 * you schedule too much work, either with long-running event handlers or with lots of
 * short-running ones, the page will become slow and cumbersome to use.
 *
 * For cases where you really do want to do some time-cosuming thong in the background
 * without freezing the page, browsers provide something called web workers. A worker
 * is a Javascript process that runs alongside the main script, on its own timeline.
 */
