// test.
fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    // Test code
    await t
        .takeScreenshot();
});