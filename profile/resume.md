# 吴臻愿

目标岗位：Java 后端工程师 / Java 全栈工程师 / AI 提效型工程师

## 个人优势

- 华东师范大学计算机科班，具备 985 院校背景，学习能力强。
- 拥有交易订单核心系统研发经验，熟悉 Java、Spring Boot、Spring Cloud、MySQL、Redis、Kafka、Elasticsearch 等核心技术栈。
- 具备 Java 全栈开发能力，熟悉 Vue3、TypeScript、Element Plus，可独立完成数据库设计、后端接口、前端页面和前后端联调。
- 熟练使用 Cursor、Claude Code、GitHub Copilot 等 AI 编程工具，能将 AI 用于需求分析、代码生成、项目理解、问题排查、代码优化和技术文档编写。
- 可独立承担项目从需求分析、系统设计、开发测试到上线交付的完整链路。

## 专业技能

- Java 基础：集合、IO、反射、动态代理、泛型、JMM、synchronized、volatile、CAS、AQS、ThreadLocal、线程池、JVM。
- Spring 生态：Spring、Spring Boot、Spring MVC、MyBatis、MyBatis-Plus、IOC、AOP、事务管理、自动装配。
- 微服务架构：Spring Cloud Alibaba、Nacos、OpenFeign、Sentinel、Gateway、服务治理、限流熔断、降级、灰度发布。
- 数据库：MySQL 索引、事务、MVCC、锁机制、Undo / Redo Log、Binlog、SQL 调优、分库分表、海量数据治理和迁移。
- 缓存与中间件：Redis、分布式锁、延迟队列、缓存一致性、Kafka、RabbitMQ、消息可靠性、顺序消息、重复消费、消息堆积治理。
- 搜索与大数据：Elasticsearch、索引设计、Mapping、DSL、Mustache、Binlog + MQ 同步、一致性校验、海量订单异构查询。
- 分布式技术：CAP、BASE、TCC、Seata、2PC、分布式 ID、分布式锁、高并发、高可用系统设计和稳定性治理。
- 前端开发：Vue3、TypeScript、JavaScript、Element Plus、Axios、Vite、npm、Pinia、管理后台全栈交付。
- 设计与架构：常用设计模式、领域建模、平台化、组件化、公共能力抽象。
- AI 工程能力：Prompt Engineering、Token、Function Calling、MCP、Agent、Tool Calling、RAG、Skill 开发、Spring AI、LangChain4j。

## 工作经历

### 交易订单核心业务研发

时间：2022.07 - 2026.05  
职级：P6 资深 Java 后端开发

- 负责交易订单核心业务研发，承担订单管理、订单查询、订单履约等核心系统的架构设计、功能开发及技术优化。
- 负责订单管理站点和后台管理系统全栈开发，覆盖需求分析、数据库设计、后端接口、Vue3 前端页面、联调测试和上线交付。
- 主导订单分库分表、订单 Elasticsearch 查询平台、订单拆单标准化、订单超时中心及预处理审核平台等核心项目建设。
- 负责 618、双十一等大促期间核心交易链路稳定性保障，推进容量评估、性能压测、限流降级、故障演练和应急预案。

## 教育经历

### 华东师范大学 · 计算机科班

时间：2017.09 - 2022.06

- 985 院校计算机科班背景，系统建立计算机基础、工程思维和快速学习能力。

## 核心项目

### 订单分库分表与 ES 统一查询平台

- 技术栈：Spring Cloud、Spring Boot、MyBatis、MySQL、Redis、Elasticsearch、Kafka、Canal、XXL-JOB、Apollo、Maven。
- 职责：设计并落地分库分表架构、分布式订单 ID、分片级查询模型、Binlog + MQ 双链路同步、ES 查询服务、降级容灾和一致性校验。
- 结果：完成 5.7TB 单库向 64 库 × 16 表迁移，稳定支撑 10W+ 每秒请求，查询可用性 99.999%+，迁移峰值 2 亿 / 天。

### 订单管理站点建设与全栈升级

- 技术栈：Java、Spring Boot、MyBatis、MySQL、Vue3、TypeScript、Element Plus、Axios、Vite、Pinia。
- 职责：主导订单管理站点全栈建设，落地菜单、按钮、接口、数据范围多层权限控制，以及敏感操作审计和公共组件沉淀。
- 结果：形成统一订单管理入口，支撑 300+ 订单业务迭代需求，提升交付效率和站点可维护性。

### 订单超时统一闭环与预处理审核优化

- 技术栈：Java、Spring Boot、MyBatis、MySQL、Redis、XXL-JOB、规则配置、幂等、重试补偿、监控告警、灰度发布。
- 职责：建设未支付订单识别、超时规则配置、任务调度、状态流转和异常补偿能力，并优化预处理审核平台。
- 结果：实现线上订单闭环率 100%，将人工关单和异常排查升级为自动化处理。

### 订单拆单系统标准化重构

- 技术栈：Spring Cloud、Spring Boot、MyBatis、MySQL、Redis、Elasticsearch、Kafka、Apollo、XXL-JOB、Maven、策略模式、工厂模式。
- 职责：抽象四维度拆单模型，建设历史数据推演、双阶段灰度发布、规则可插拔、三级幂等和双阶段分布式锁。
- 结果：拆单率从 12.5% 优化至 6.04%，新业务接入周期从 3 天缩短至 1 天，开发效率提升 60%+，重复拆单率降至 0。
