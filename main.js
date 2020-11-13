#! /usr/bin/env node

const cmd = require("commander");
const chalk = require('chalk')
const downGit = require('./src/download')
const options = require('./src/options')

// npm 包名 pjc-cli 
// npm 登录：pt166166  pjc123456789
// npm login  ， npm publish

cmd.command('create').description('初始化模板').action(async (args) => {
    typeof args !== 'string' && (console.log(chalk.red('缺少必填参数')), process.exit(1))
    console.log(chalk.yellow('pjc脚手架初始化模板，不要问我为什么是中文的，因为我英语不好 \n'))
    // 填选项
    await options()
    // 拉取
    await downGit(args)
})
cmd.parse(process.argv) 