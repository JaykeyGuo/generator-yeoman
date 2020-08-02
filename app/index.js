var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
  }
  // method1() {
  //   this.log('this is method 1');
  // }
  // method2() {
  //   this.log('this is method 2');
  // }
  // _private_method() {
  //   console.log('private hey')
  // }
  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'cool',
        message: 'Cool!!!!',
      },
    ]);
    this.log('app name', answers.name);
    this.log('cool', answers.cool)
  }
}