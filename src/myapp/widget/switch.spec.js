describe('switch', function() {
    var sus;

    beforeEach(function() {
        sus = new myapp.widget.switch();
    });

    it('has a public api', function() {
        expect(sus.isOn).toBe(false);
    });

    it('can flick the switch', function() {
        sus.flick();
        expect(sus.isOn).toBe(true);
    });
});
