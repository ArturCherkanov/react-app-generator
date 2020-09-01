const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
 
// const mkdirp = require('mkdirp');
module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag
    }
  };

  module.exports = class extends Generator {
    prompting() {
      
      console.log(yosay(chalk.magentaBright(`Please, ensure that you ${chalk.red('ran create-react-app')}, and you are in a ${chalk.red('root directory!!!!')}`)));

      const question = {
        type: 'confirm',
        name: 'isTS',
        message: 'Do/will you have a TypeScript on your project',
        default: false
      }
      
      return this.prompt(question).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
      });
    }
    writing() {
      const extenstion = this.props.isTS ? '.ts' : '.js'
      const rootFolder = `src/`
      const structureMap = {
        pages: `pages/Home/index`,
        components: "components/testComponent/index",
        reducers: "reducers/rootReducer",
        utils: "utils/index",
        actions:"actions/index"
      }
      this.log(this.props.isTS)
      Object.keys(structureMap).forEach((elem)=>{
        this.fs.write(this.destinationPath(`src/${structureMap[elem]}${extenstion}`),'test=0')
      })
    }
  };