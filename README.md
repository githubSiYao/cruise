# ThoughtWorks Cruise F2E HomeWork

## 命令  
#### 0. 安装
```bash
    npm install or yarn install  
```  

#### 1. 运行开发环境  
```bash
    npm start or yarn start  
```

#### 2. 运行单元测试  
> 第一次如果报错，为暂未生成快照，再执行一次即可。  
```bash
    npm test or yarn test  
```

#### 3. 输出生产环境  
```bash  
    npm run build --report  or yarn run build --report  
```

### 完成进度说明  
- [x] Use 1200px Grid Layout.        
- [x] Function1 Delete Resource.     
- [x] Function2 Add New Resource.    
- [x] Apply Responsive Design.  支持到Tablet（添加资源弹出层未做）.不支持Phone   
- [x] Javascript Unit Test.   仅做了部分 Unit Test以及快照测试编写,功能组件单元测试未做  

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
