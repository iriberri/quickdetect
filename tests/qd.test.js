const qd = require('../dist/qd.min');

test('QD exists', () => {
	expect(QD).toBeDefined();
});

test('QD log exists and is defaulted correctly.', () => {
	expect(QD.dev.mode).toBeFalsy();
});
