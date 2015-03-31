var root = this;

root.isAuthenticated = function(callback, $this) {
    return callback && callback.call($this ? $this : {});
}
