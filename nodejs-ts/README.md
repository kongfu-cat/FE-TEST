# nodejs-ts

> 测试项目，主要写一些 demo

## 项目架构

> 为了方便之后写一些 demo，需要先调整好这个项目结构以及所使用的技术方案来。

### 功能需求

> 先把需要的一些功能罗列出来

#### TS 编译配置

暂时不是很懂，就之后有需求了再弄吧，目前是通过 `tsc --init` 生成的

然后加了点 Vue 项目中使用的 include 与 exclude

#### 规范代码样式

针对文件：src 下的 \*.ts, \*.json, \*.js

方案：

(目前是随便写的之后再改)

-   配置 eslint
-   配置 prettier，通过配置 vscode 的 formatOnSave 实现保存时自动 format
-   onchange，监听文件变动，然后运行 prettier 调整样式
-   [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)，实现多个指令并行运行

#### 直接运行 TS 代码

方案：

-   ts-node，这个可以直接运行 ts 代码
-   [nodemon](https://github.com/remy/nodemon)，用这个监听 src 下文件变动，然后自动重新运行程序

#### Debug TS 代码

-   配置 vscode lanuch.json 使用 ts-node 进行 debug [参考](https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a)
-   不过有个不方便的地方，.vscode 文件夹只有在最顶层才有效，不过可以通过将该文件夹加入 workspace 来解决

#### 规范 commit

参考的规范为 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

-   [husky](https://github.com/typicode/husky#readme)，用这个来对设置对应的 git hook
-   @commitlint/config-conventional + @commitlint/cli，配置规则

#### 性能分析

记录一篇[文章](https://medium.com/voodoo-engineering/node-js-and-cpu-profiling-on-production-in-real-time-without-downtime-d6e62af173e2)，讲了些工具

准备采用 Clinic，可视化不香吗？emm，用了一下，主要是针对 server 的。以后再弄吧

-   [Clinic](https://github.com/clinicjs/node-clinic)
