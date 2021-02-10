/*
 * @Author: your name
 * @Date: 2021-01-27 22:17:44
 * @LastEditTime: 2021-02-10 12:52:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */
/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-02-06 14:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */
module.exports = {
  title: '二十多岁的老王的个人网站',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
    nav: [
      {
        text: 'Code Languages',
        items: [
          {
            text: 'FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript/'
              },
              {
                text: 'Css3',
                link: '/language/Css3/'
              },
              {
                text: 'Html5',
                link: '/language/Html5/'
              }
            ]
          },
          {
            text: 'BackEnd',
            items: [
              {
              text: 'Python',
              link: '/Python/'
              },
              {
              text: 'Golang',
              link: '/Golang/'
              },
              {
              text: 'Java',
              link: '/Java/'
              }
            ]
          },
        ]
      },
      {
        text: 'Personal Style',
        items: [
          {
            text: 'About Code Quality',
            items: [
              {
                text: 'Bad Codes',
                link: '/PersonalStyle/Code/BadCodes/'
              },
              {
                text: 'Nice Codes',
                link: '/PersonalStyle/Code/NiceCodes/'
              },
            ]
          },
          {
            text: 'Interviews FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/PersonalStyle/Interview/FrontEnd/JavaScript/'
              },
              {
                text: 'CSS',
                link: '/PersonalStyle/Interview/FrontEnd/Css3/'
              },
            ]
          },
          {
            text: 'Interviews Backend',
            items: [
              {
                text: 'GoLang',
                link: '/PersonalStyle/Interview/BackEnd/Golang/'
              },
              {
                text: 'Python',
                link: '/PersonalStyle/Interview/BackEnd/Python/'
              },
            ]
          },
        ]
      },
      {
        text: 'About Me',
        items: [
          {
            text: 'My Teaching Videos',
            items: [
              {
                text: 'Bilibili',
                link: 'https://space.bilibili.com/309430466/'
              },
            ]
          },
          {
            text: 'Souce Codes',
            items: [
              {
                text: 'GitHub(GayHub) - Home',
                link: 'https://github.com/PythonWongXb'
              },
            ]
          },
        ]
      },
      {
        text: 'Projects',
        items: [
          {
            text: 'VenueOnlineManageSystem',
            link: '/Projects/VenueOnlineManageSystem/'
          },
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/JavaScript/': [
        {
          title: 'JavaScript基础',
          path: '/JavaScript/#1',
          children: [
            {
              title: '1',
              path: '/JavaScript/one'
            },
            {
              title: '2',
              path: '/JavaScript/two'
            },
          ],
        },
        {
          title: 'JavaScript中级',
          path: '/JavaScript/#2',
          children: [
            '/'
          ]
        },
        {
          title: '算法',
          path: '/JavaScript/algorithm',
          children: [
            {
              title: 'fibo',
              path: '/JavaScript/algorithm/fibonacci'
            }, ]
        },
      ],
      '/Golang/': [
        {
          title: 'Golang基础',
          path: '/Golang/#1',
          children: [
            {
              title: '1',
              path: '/Golang/one'
            },
            {
              title: '2',
              path: '/Golang/two'
            },
          ],
        },
        {
          title: 'JavaScript中级',
          path: '/Golang/#2',
          children: [
            '/'
          ]
        },
        {
          title: '基础',
          path: '/Golang/primary/',
          children: [
            {
              title: '并发',
              path: '/Golang/primary/并发'
            }, ]
        },
      ],
      '/PersonalStyle/Code/BadCodes/': [
        {
          title: '1-MysteriousName',
          path: '/PersonalStyle/Code/BadCodes/1-MysteriousName',
        },
        {
          title: '2-DuplicatedCode',
          path: '/PersonalStyle/Code/BadCodes/2-DuplicatedCode',
        },
        {
          title: '3-LongFunction',
          path: '/PersonalStyle/Code/BadCodes/3-LongFunction',
        },
        {
          title: '4-LongParameterList',
          path: '/PersonalStyle/Code/BadCodes/4-LongParameterList',
        },
        {
          title: '5-GlobalData',
          path: '/PersonalStyle/Code/BadCodes/5-GlobalData',
        },
        {
          title: '6-DivergentChange',
          path: '/PersonalStyle/Code/BadCodes/6-DivergentChange',
        },
        {
          title: '7-MutableData',
          path: '/PersonalStyle/Code/BadCodes/7-MutableData',
        },
        {
          title: '8-ShotgunSurgery',
          path: '/PersonalStyle/Code/BadCodes/8-ShotgunSurgery',
        },
        {
          title: '9-FeatureEnvy',
          path: '/PersonalStyle/Code/BadCodes/9-FeatureEnvy',
        },
        {
          title: '10-DataClumps',
          path: '/PersonalStyle/Code/BadCodes/10-DataClumps',
        },
        {
          title: '11-PimitiveObsession',
          path: '/PersonalStyle/Code/BadCodes/11-PimitiveObsession',
        },
        {
          title: '12-RepeatedSwitches',
          path: '/PersonalStyle/Code/BadCodes/12-RepeatedSwitches',
        },
        {
          title: '13-Loops',
          path: '/PersonalStyle/Code/BadCodes/13-Loops',
        },
        {
          title: '14-LazyElement',
          path: '/PersonalStyle/Code/BadCodes/14-LazyElement',
        },
        {
          title: '15-SpeculativeGenerality',
          path: '/PersonalStyle/Code/BadCodes/15-SpeculativeGenerality',
        },
        {
          title: '16-TemporaryField',
          path: '/PersonalStyle/Code/BadCodes/16-TemporaryField',
        },
        {
          title: '17-MessageChains',
          path: '/PersonalStyle/Code/BadCodes/17-MessageChains',
        },
        {
          title: '18-MiddleMan',
          path: '/PersonalStyle/Code/BadCodes/18-MiddleMan',
        },
        {
          title: '19-InsiderTrading',
          path: '/PersonalStyle/Code/BadCodes/19-InsiderTrading',
        },
        {
          title: '20-LargeClass',
          path: '/PersonalStyle/Code/BadCodes/20-LargeClass',
        },
        {
          title: '21-AlternativeClassWithDifferentInterfaces',
          path: '/PersonalStyle/Code/BadCodes/21-AlternativeClassWithDifferentInterfaces',
        },
        {
          title: '22-DataClass',
          path: '/PersonalStyle/Code/BadCodes/22-DataClass',
        },
        {
          title: '23-RefusedBequest',
          path: '/PersonalStyle/Code/BadCodes/23-RefusedBequest',
        },
        {
          title: '24-Comments',
          path: '/PersonalStyle/Code/BadCodes/24-Comments',
        },
      ],
      '/Projects/VenueOnlineManageSystem/': [
        {
          title: '0-文件架构',
          path: '/Projects/VenueOnlineManageSystem/0-FileConstruction',
          children: [
            {
              title: '项目文件架构',
              path: '/Projects/VenueOnlineManageSystem/0-FileConstruction/0-1-StaticFile/'
            },
            {
              title: 'View架构',
              path: '/Projects/VenueOnlineManageSystem/0-FileConstruction/0-2-ViewConstruction/'
            },
            {
              title: '环境变量',
              path: '/Projects/VenueOnlineManageSystem/0-FileConstruction/0-3-EnvironmentVaries/'
            },
            {
              title: '插件',
              path: '/Projects/VenueOnlineManageSystem/0-FileConstruction/0-4-Plugins/'
            },
          ],
        },
        {
          title: '1-组件架构',
          path: '/Projects/VenueOnlineManageSystem/1-ComponentConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '2-路由架构',
          path: '/Projects/VenueOnlineManageSystem/2-VueRouterConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '3-Axios架构',
          path: '/Projects/VenueOnlineManageSystem/3-AxiosConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '4-Vuex数据架构',
          path: '/Projects/VenueOnlineManageSystem/4-VuexDataConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '5-LocalStorage数据架构',
          path: '/Projects/VenueOnlineManageSystem/5-LocalStorageDataConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '6-项目核心难点',
          path: '/Projects/VenueOnlineManageSystem/6-CoreDifficultResolve',
          children: [
            {
              title: '多Venue数据架构',
              path: '/Projects/VenueOnlineManageSystem/6-CoreDifficultResolve/6-0-MutipleVenue/'
            },
            {
              title: '监听页面跳转',
              path: '/Projects/VenueOnlineManageSystem/6-CoreDifficultResolve/6-1-WacthPageChange/'
            },
            {
              title: '主题颜色的控制',
              path: '/Projects/VenueOnlineManageSystem/6-CoreDifficultResolve/6-2-ThemeColor/'
            },
          ]
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  },
}