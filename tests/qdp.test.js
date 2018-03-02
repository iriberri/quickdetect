const qd = require('../dist/qdp.min');

test('QD exists', () => {
	expect(QD).toBeDefined();
});

test('QD log should not exist.', () => {
	expect(QD.dev).toBeUndefined();
});

