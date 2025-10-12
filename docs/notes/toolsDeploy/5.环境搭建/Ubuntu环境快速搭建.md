---
title: Ubuntu环境快速搭建
createTime: 2025/10/02 16:51:17
permalink: /toolsDeploy/kc6ni8d2/
---


## vim
```bash
sudo apt install vim
```

## git
1. 安装git
   ```bash
   sudo apt install git
   ```

2. 生成密钥
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. 密钥配对
   ```bash
   vim /home/eric/.ssh/id_ed25519.pub
   ```

4. 初次配置git
   ```bash
   git config --global user.name "your_name"
   ```

   ```bash
   git config --global user.email "your_email@example.com"
   ```
5. git常用命令
   ```bash
   git init # 初始化git仓库
   git status # 查看本地与云端仓库的状态
   git clone 项目地址   # 克隆仓库
   git pull # 拉取代码

   -- 代码推送相关
   git add . # 将本地所有改动添加到暂存区
   git reset --mixed # 撤销暂存区文件，但保留本地修改
   git commit -m "注释" # 为待提交代码添加注释
   git push # 代码推送

   -- 分支相关
   git brunch # 查看分支
   git checkout 分支名  # 切换分支
   ```
## node.js
1. 下载nvm
   ```bash
   # Download and install nvm:
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
   # in lieu of restarting the shell
   \. "$HOME/.nvm/nvm.sh"
   ```
2. 安装nodejs
   ```bash
   nvm install 22
   node -v # Should print "v22.14.0".
   nvm current # Should print "v22.14.0".
   npm -v # Should print "10.9.2".
   ```
3. nvm常用命令
   ```bash
   nvm list # 显示一安装的版本
   nvm list available   # 显示所有可下载的版本
   nvm install 14.x.x   # 安装特定版本的node.js
   nvm use 14.5.0    # 使用某版本的node.js
   ```


## python
Ubuntu默认有一个python环境，这是由于ubuntu的某些软件包依赖于python，但是系统python不建议修改，推荐使用pyenv下载和管理python版本：
### 安装pyenv
1. 安装python环境依赖：
    ```bash
    sudo apt update
    sudo apt install -y make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev
    ```
2. 安装pyenv：
   ```bash
   curl -fsSL https://pyenv.run | bash
   ```
3. 设置环境变量
   `~/.bashrc`中添加：
   ```bash
   echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
   echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
   echo 'eval "$(pyenv init - bash)"' >> ~/.bashrc
   ```
   
   `~/.profile`中添加：
   ```bash
   echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.profile
   echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.profile
   echo 'eval "$(pyenv init - bash)"' >> ~/.profile
   ```
4. 重启终端，或运行:
   ```bash
   source ~/.bashrc
   source ~/.profile
   ```
5. 使用pyenv
```bash
pyenv update
pyenv install -list # 列出所有可下载的python版本

pyenv install 3.x.x     # 下载指定版本
pyenv uninstall 3.x.x   # 卸载指定版本
pyenv version   # 查看当前使用的python版本
pyenv versions  # 查看系统中所有python版本

pyenv shell 3.x.x   # 指定当前shell的python版本
pyenv local 3.x.x   # 指定当前目录的python版本
pyenv global 3.x.x  # 指定全局的python版本
```

### 常见报错及解决方案
- 找不到 `tkinter` 和 `lzma` 模块：
![python环境报错1](https://raw.githubusercontent.com/AliceSpring123/img/main/ubuntu报错1.png)

   安装`Tkinter`和`LZMA`依赖：
   ```bash
   sudo apt update
   sudo apt install -y tk-dev
   sudo apt install -y liblzma-dev
   ```
   卸载重新安装`python3.x.x`
   ```bash
   pyenv uninstall 3.x.x
   pyenv install 3.x.x
   ```


## Picgo
1. 到官网下载对应的`.APPImage`文件
   https://github.com/molunerfinn/picgo/releases

2. 本地安装依赖

   ```bash
   sudo apt install libfuse2
   ```
   > 新版本的 Ubuntu 默认使用更新的 libfuse3，但 AppImage 生态目前仍然普遍依赖 libfuse2，所以需要手动安装

3. 赋予安装包执行权限

   ```bash
   cd ~/Downloads

   chmod +x PicGo-2.4.0-beta.10.AppImage
   ```

4. 执行安装包<br>
   右键点击执行或运行以下命令执行
   ```bash
   ~/Downloads/PicGo-2.4.0-beta.10.AppImage
   ```

5. 配置GitHub图床


![](https://raw.githubusercontent.com/AliceSpring123/img/main/Snipaste_2025-09-03_18-10-16.png)



## PyTorch

1. 升级系统CUDA版本(可选)
   - 移除旧版本(关键步骤)
      ```bash
      # 卸载所有通过apt安装的cuda工具包包
      sudo apt --purge remove "*cuda*" "*cublas*" "*cufft*" "*cufile*" "*curand*" "*cusolver*" "*cusparse*" "*gds-tools*" "*npp*" "*nvjpeg*" "nsight*" "*nvvm*"
      # 注意：这个命令不会移除NVIDIA驱动本身
      sudo apt autoremove
      ```
   - 下载[CUDA Toolkit](https://developer.nvidia.com/cuda-downloads), 选择平台（`Linux` -> `x86_64` -> `Ubuntu` -> `24.04` -> `deb (network)`）
   - 按照官方提示的安装指令安装新版本的CUDA Toolkit
   - 更新环境变量`.bashrc`
      ```bash
      # 替换原来的环境变量
      export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
      export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
      ```

   - 让更改立即生效：
      ```bash
      source ~/.bashrc
      ```
   - 检查cuda版本
      ```bash
      nvcc --version
      ```
      ![](https://raw.githubusercontent.com/AliceSpring123/img/main/Snipaste_2025-09-03_20-11-02.png)
2. 下载对应[pyTorch包](https://pytorch.org/get-started/locally/)

   ![](https://raw.githubusercontent.com/AliceSpring123/img/main/Snipaste_2025-09-03_20-00-31.png)

   ```bash
   pip3 install torch torchvision --index-url https://download.pytorch.org/whl/cu129
   ```
3. python控制台测试验证

   ```python
   import torch
   torch.cuda.is_available()
   ```

   ![](https://raw.githubusercontent.com/AliceSpring123/img/main/Snipaste_2025-09-04_11-39-41.png)

## MySQL

1. 执行命令

   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```

2. 运行安全配置脚本(重要)

   ```bash
   sudo mysql_secure_installation
   ```
    - 系统会问你是否要设置 VALIDATE PASSWORD COMPONENT（验证密码插件）。这个插件可以强制要求用户设置强密码。根据你的安全需求选择 Y 或 n
    - 为 MySQL root 用户设置一个密码。请务必记住这个密码
    - 移除匿名用户？Y
    - 禁止远程 root 登录？Y (这能提高安全性)
    - 移除测试数据库以及对其的访问？Y
    - 立即重新加载权限表？Y

3. 检查MySQL服务运行状态
   - 确保MySQL服务正在运行
   ```bash
   sudo systemctl status mysql
   ```
   - 如果没有运行，使用以下命令启动它：
   ```bash
   sudo systemctl start mysql
   ```
   - 设置开机自启
   ```bash
   sudo systemctl enable mysql
   ```

4. 以root身份登录mysql

   ```bash
   sudo mysql -u root -p
   ```


## pyCharm

### 安装
1. 官网下载压缩包(https://www.jetbrains.com/pycharm/download/?section=linux)
2. 解压安装包

   ```bash
   # 通常建议解压到/opt目录下
   sudo tar -xzf ~/Downloads/pycharm-*.tar.gz -C /opt/
   ```
   解压后会生成一个类似`pycharm-2025.2.1.1`的目录
3. 运行安装脚本
   ```bash
   cd /opt/pycharm-2025.2.1.1/bin
   ./pycharm.sh
   ```
   首次运行会进行初始化设置，根据提示选择即可。

4. 解决pycharm无法输入中文的问题

   修改上面的`pycharm.sh`脚本

   ```bash
   sudo vim /opt/pycharm-2025.2.1.1/bin/pycharm.sh
   ```
   添加如下代码:

   ```bash
   export GTK_IM_MODULE=ibus
   export QT_IM_MODULE=ibus
   export XMODIFIERS=@im=ibus
   ```
   重启pycharm

5. 添加桌面快捷方式

   首次启动时，菜单栏选择 `Create Desktop Entry...`

   ![](https://raw.githubusercontent.com/AliceSpring123/img/main/Snipaste_2025-09-07_04-43-20.png)
   
### 卸载
1. 删除安装目录：使用 rm 命令删除你之前解压的 PyCharm 目录。
   ```bash
   # 请将路径替换为你的实际安装路径
   udo rm -rf /opt/pycharm-2025.2.1.1/
   ```
2. 删除配置目录：PyCharm 的用户配置、缓存和插件通常保存在你家目录下的隐藏文件夹中。删除它们以移除所有个人设置。
   ```bash
   # 删除社区版配置
   rm -rf ~/.config/JetBrains/PyCharmCE2023.3/
   # 删除专业版配置
   rm -rf ~/.config/JetBrains/PyCharm2023.3/
   # 同时建议删除本地共享和缓存中的相关数据
   rm -rf ~/.local/share/JetBrains/
   rm -rf ~/.cache/JetBrains/
   ```




## 实用终端

### Terminator

1. 安装

   ```bash
   sudo apt install terminator
   ```

2. 设置为默认终端

   设置莫默认终端可以使用 `ctrl` + `alt` + `T` 快速打开
   ```bash
   gsettings set org.gnome.desktop.default-applications.terminal exec /usr/bin/terminator
   gsettings set org.gnome.desktop.default-applications.terminal exec-arg "-x"
   ```

   换回默认设置

   ```bash
   gsettings reset org.gnome.desktop.default-applications.terminal exec
   gsettings reset org.gnome.desktop.default-applications.terminal exec-arg
   ```

### Wrap

1. 安装

官网下载 https://www.warp.dev/download

----------------------------------------
<更新中...>