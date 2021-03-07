---
sidebar: auto
---

# Linux Commands

## 1-File Control
### awk
AWK 是一种处理文本文件的语言，是一个强大的文本分析工具。
```shell
awk [选项参数] 'script' var=value file(s)
或
awk [选项参数] -f scriptfile var=value file(s)
```

### wc
> wc命令用来计算数字。利用wc指令我们可以计算文件的Byte数、字数或是列数。

语法： wc [options] [filename]
Options:
-l：=line 统计行数
-m：=member 统计字符数
-w：=Word 统计词数

```shell
[root@adai003 tmp]# wc -l !$wc -l 2.txt2 2.txt
[root@adai003 tmp]# wc -m 2.txt10 2.txt
[root@adai003 tmp]# cat !$cat 2.txt1234qwer
[root@adai003 tmp]# cat -A 2.txt1234$qwer$[root@adai003 tmp]# wc -w 2.txt4 2.txt
[root@adai003 tmp]# cat 2.txt1234 456 789,10qwer
```

::: tip
说明： wc -m会统计文件内所有字符，包括隐藏的换行符“&”；wc -w是以空格作为分隔符进行词组统计的。
:::

## 3-System Control

### id
Linux id命令用于显示用户的ID，以及所属群组的ID。

> id会显示用户以及所属群组的实际与有效ID。若两个ID相同，则仅显示实际ID。若仅指定用户名称，则显示目前用户的ID。

```shell
id [-gGnru][--help][--version][用户名称]
```

+ -g或--group 　显示用户所属群组的ID。
+ -G或--groups 　显示用户所属附加群组的ID。
+ -n或--name 　显示用户，所属群组或附加群组的名称。
+ -r或--real 　显示实际ID。
+ -u或--user 　显示用户ID。
+ -help 　显示帮助。
+ -version 　显示版本信息。

## 4-File Edit

### grep
> Linux grep 命令用于查找文件里符合条件的字符串。

> grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。