# ThoughtWorks Cruise F2E HomeWork

### 完成进度说明  
1. Use 1200px Grid Layout.        ●
2. Function1 Delete Resource.     ●
3. Function2 Add New Resource.    ●
4. Apply Responsive Design.       ○     支持到Tablet（添加资源弹出层未做）.不支持Phone 
5. Javascript Unit Test.          ○     仅做了部分 Unit Test以及快照测试编写,功能组件单元测试未做

### 项目结构目录说明  
├── public
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── AgentComponet                  // Agent 业务模块
│   │   │   └── modules                  
│   │   │       ├── Cards                  // Agents Status 卡片   
│   │   │       ├── InputSearch            // 搜索输入框
│   │   │       ├── ListItem               // Agent 列表展示项 
│   │   │       ├── Modal                  // 添加resource弹出层
│   │   │       └── Navbar                 // 导航栏
│   │   ├── DashboardComponent
│   │   ├── HelpComponent
│   │   ├── LayoutComponent                // 布局容器          
│   │   │   └── modules
│   │   │       ├── FooterComponent        // Footer
│   │   │       │   ├── __tests__          // 快照测试
│   │   │       ├── HeaderComponent
│   │   │       │   ├── __test__           // Unit Test
│   │   │       ├── HistoryComponent       // History
│   │   │       └── MenuComponent          // Menu
│   │   └── MyCruiseComponent
│   │       └── index.jsx
│   ├── container                          // container做为redux数据分发入口
│   │   ├── AgentContainer                 // Agent 业务模块 
│   │   ├── DashboardContainer             // Dashboard 业务模块
│   │   ├── HelpContainer                  // Help 业务模块
│   │   └── MyCruiseContainer              // MyCruise 业务模块
│   ├── index.js
│   ├── scss                               // 全局公用scss样式文件
│   └── setupTests.js                      // enzyme测试框架入口
└── yarn.lock
