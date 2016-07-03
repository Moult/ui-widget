myapp.widget.switch = function() {
    this.isOn = false;
}

myapp.widget.switch.prototype.flick = function() {
    this.isOn = ! this.isOn;
};
