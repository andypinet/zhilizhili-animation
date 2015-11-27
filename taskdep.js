var exec = require("child_process").exec;
var packageobj = require("./package.json");
var str = '';

for (var d in packageobj.taskdep) {
  str = str + d + ' ';
}

exec(`npm install ${str}`, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});
