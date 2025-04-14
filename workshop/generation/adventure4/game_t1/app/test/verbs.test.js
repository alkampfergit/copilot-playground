const { processVerbs } = require('../modules/verbs'); // Corrected import for CommonJS module

console.log('Module exports:', require('../modules/verbs'));
console.log('Imported processVerbs:', processVerbs);

describe('Verbs Module', () => {
  test('should process verbs correctly', () => {
    const verbs = [
      { name: 'move', description: 'Allows the player to move to a different location in the game world.' },
      { name: 'look', description: 'Provides a description of the current surroundings or a specific object.' }
    ];

    console.log = jest.fn(); // Mock console.log
    processVerbs(verbs);

    expect(console.log).toHaveBeenCalledWith('Processing verbs:', verbs);
    expect(verbs.length).toBeGreaterThan(0); // Ensure the verbs array is not empty
  });
});
