import postscribe from '../../src/postscribe';
import * as wc from '../helpers/write-comparor';

describe.only('bugs', () => {
  describe('issue 306: Null pointer error fired on aborting postscribe execution', () => {
    it('does something', done => {
      wc
        .compare('something')
        .then(r => expect(r).to.be.ok())
        .fail(done)
        .always(() => {
          postscribe(null, null, 'clear');

          wc
            .compare('something again')
            .then(r => expect(r).to.be.ok())
            .fail(done)
            .always(done);
        });
    });
  });
});
