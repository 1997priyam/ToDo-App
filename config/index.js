var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname +':'+ configValues.pwd +'@ds261460.mlab.com:61460/priyamtodo';
    }
}
