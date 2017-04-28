const {
  createTR,
  createTH,
  createTD,
  removeChildren
} = require('../dom-util');

describe('dom-util', () => {
  describe('DOM creation functions', () => {

    describe('createTH', () => {
      it('produces valid TH element', () => {
        const el = createTH();
        expect(el.tagName).toBe('TH');
      });

      it('sets the text of the TH', () => {
        const text = 'Oh that\'s great! Well, game over, man!';
        const el = createTH(text);
        expect(el.textContent).toEqual(text);
      });
    });

    describe('createTR', () => {
      it('produces valid TH element', () => {
        const el = createTR();
        expect(el.tagName).toBe('TR');
      });
    });

    describe('createTD', () => {
      it('produces valid TD element', () => {
        const el = createTD();
        expect(el.tagName).toBe('TD');
      });
    });

  });

  describe('removeChidlren()', () => {
    it('removes one child', () => {
      // set up initial state
      const parent = document.createElement('DIV');
      const child = document.createElement('STRONG');
      parent.appendChild(child);

      // inspect initial state
      expect(parent.childNodes.length).toBe(1);
      expect(parent.childNodes[0]).toBe(child);

      // execute code under test
      removeChildren(parent);

      // inspect resulting state
      expect(parent.childNodes.length).toBe(0);
    });
  })

});
