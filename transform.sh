#!/bin/bash
echo "transform"
rm -r assets
rm -r dist
rm -r Css3
rm -r Frames
rm -r Golang
rm -r Html5
rm -r JavaScript
rm -r Linux
rm -r MarkDown
rm -r PersonalStyle
rm -r Shell
rm -r TypeScript
rm -r Vim
rm -r zh
rm 404.html
rm about.html
rm *.html
rm *.jpeg
rm *.png

cp -rf  /Users/kele/Desktop/history/MyBlog/docs/.vuepress/dist/* /Users/kele/Desktop/history/MyBlog/
rm -r dist
