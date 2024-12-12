const e=JSON.parse('{"key":"v-70156d74","path":"/interview-prep/mysql.html","title":"MySQL interview questions:","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2023-12-12T00:00:00.000Z","category":["interview"],"tag":["mysql"],"star":true,"sticky":true,"description":"MySQL interview questions: 什么是主键和外健 主键：主键是一个表中用来唯一标识每一条记录的列。主键的值必须是唯一的，不能为 null。 外健：外健是一个表中的一列， 用于建立与另一个表的关联关系。外健列的值可以是 null，但在非空情况下，它的值必须在被关联表的主键中存在。 主键与外健的关系： 主键是外健的参照： 外健通常指向另一个表的主键，形成主从关系。在一个表中作为外健的列值必须在另一个表中作为主键的列中存在。 建立关联： 通过外健，能够在不同表之间建立逻辑关联，方便进行复杂查询","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/interview-prep/mysql.html"}],["meta",{"property":"og:site_name","content":"YC Tech Blog"}],["meta",{"property":"og:title","content":"MySQL interview questions:"}],["meta",{"property":"og:description","content":"MySQL interview questions: 什么是主键和外健 主键：主键是一个表中用来唯一标识每一条记录的列。主键的值必须是唯一的，不能为 null。 外健：外健是一个表中的一列， 用于建立与另一个表的关联关系。外健列的值可以是 null，但在非空情况下，它的值必须在被关联表的主键中存在。 主键与外健的关系： 主键是外健的参照： 外健通常指向另一个表的主键，形成主从关系。在一个表中作为外健的列值必须在另一个表中作为主键的列中存在。 建立关联： 通过外健，能够在不同表之间建立逻辑关联，方便进行复杂查询"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-12T13:14:26.000Z"}],["meta",{"property":"article:author","content":"Youwei Chen"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2023-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-12T13:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL interview questions:\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-12T13:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Youwei Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是主键和外健","slug":"什么是主键和外健","link":"#什么是主键和外健","children":[{"level":3,"title":"主键与外健的关系：","slug":"主键与外健的关系","link":"#主键与外健的关系","children":[]}]},{"level":2,"title":"MySQL 分页语法：","slug":"mysql-分页语法","link":"#mysql-分页语法","children":[{"level":3,"title":"优化 limit 分页","slug":"优化-limit-分页","link":"#优化-limit-分页","children":[]}]},{"level":2,"title":"表跟表是怎么关联的？","slug":"表跟表是怎么关联的","link":"#表跟表是怎么关联的","children":[{"level":3,"title":"内连接","slug":"内连接","link":"#内连接","children":[]},{"level":3,"title":"外连接","slug":"外连接","link":"#外连接","children":[]}]},{"level":2,"title":"SQL 注入的原理","slug":"sql-注入的原理","link":"#sql-注入的原理","children":[]},{"level":2,"title":"WHERE 和 HAVING 有什么区别？","slug":"where-和-having-有什么区别","link":"#where-和-having-有什么区别","children":[]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"谈谈你对 MySQL 索引的理解","slug":"谈谈你对-mysql-索引的理解","link":"#谈谈你对-mysql-索引的理解","children":[]},{"level":3,"title":"索引类型：","slug":"索引类型","link":"#索引类型","children":[]},{"level":3,"title":"MySQL 怎么判断要不要加索引？","slug":"mysql-怎么判断要不要加索引","link":"#mysql-怎么判断要不要加索引","children":[]},{"level":3,"title":"索引是越多越好吗？","slug":"索引是越多越好吗","link":"#索引是越多越好吗","children":[]},{"level":3,"title":"有哪些情况不适合创建索引？","slug":"有哪些情况不适合创建索引","link":"#有哪些情况不适合创建索引","children":[]},{"level":3,"title":"如何判断数据库索引有没有生效？","slug":"如何判断数据库索引有没有生效","link":"#如何判断数据库索引有没有生效","children":[]},{"level":3,"title":"最左前缀原则","slug":"最左前缀原则","link":"#最左前缀原则","children":[]},{"level":3,"title":"说一说索引的实现原理","slug":"说一说索引的实现原理","link":"#说一说索引的实现原理","children":[]},{"level":3,"title":"介绍一下数据库索引的重构过程","slug":"介绍一下数据库索引的重构过程","link":"#介绍一下数据库索引的重构过程","children":[]},{"level":3,"title":"MySQL索引为什么用B+树？","slug":"mysql索引为什么用b-树","link":"#mysql索引为什么用b-树","children":[]},{"level":3,"title":"联合索引的存储结构是什么，它的有效方式是什么？","slug":"联合索引的存储结构是什么-它的有效方式是什么","link":"#联合索引的存储结构是什么-它的有效方式是什么","children":[]},{"level":3,"title":"MySQL的Hash索引和B树索引有什么区别？","slug":"mysql的hash索引和b树索引有什么区别","link":"#mysql的hash索引和b树索引有什么区别","children":[]}]},{"level":2,"title":"聚簇索引和辅助(非聚簇)索引有什么区别？","slug":"聚簇索引和辅助-非聚簇-索引有什么区别","link":"#聚簇索引和辅助-非聚簇-索引有什么区别","children":[{"level":3,"title":"什么是联合索引？","slug":"什么是联合索引","link":"#什么是联合索引","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"事务的四个特性(ACID):","slug":"事务的四个特性-acid","link":"#事务的四个特性-acid","children":[]},{"level":3,"title":"事务可分为以下几种类型：","slug":"事务可分为以下几种类型","link":"#事务可分为以下几种类型","children":[]},{"level":3,"title":"并发情况下，读操作可能存在3类问题：","slug":"并发情况下-读操作可能存在3类问题","link":"#并发情况下-读操作可能存在3类问题","children":[]},{"level":3,"title":"MySQL 4种隔离级别：","slug":"mysql-4种隔离级别","link":"#mysql-4种隔离级别","children":[]}]}],"git":{"createdTime":1702441435000,"updatedTime":1734009266000,"contributors":[{"name":"youweichen0208","email":"youweichen0208@gmail.com","commits":6},{"name":"Youwei Chen","email":"youweichen0208@gmail.com","commits":1}]},"readingTime":{"minutes":10.71,"words":3212},"filePathRelative":"interview-prep/mysql.md","localizedDate":"December 12, 2023","excerpt":"<h1> MySQL interview questions:</h1>\\n<h2> 什么是主键和外健</h2>\\n<ul>\\n<li>主键：主键是一个表中用来唯一标识每一条记录的列。主键的值必须是唯一的，不能为 null。</li>\\n<li>外健：外健是一个表中的一列， 用于建立与另一个表的关联关系。外健列的值可以是 null，但在非空情况下，它的值必须在被关联表的主键中存在。</li>\\n</ul>\\n<h3> 主键与外健的关系：</h3>\\n<ul>\\n<li>主键是外健的参照： 外健通常指向另一个表的主键，形成主从关系。在一个表中作为外健的列值必须在另一个表中作为主键的列中存在。</li>\\n<li>建立关联： 通过外健，能够在不同表之间建立逻辑关联，方便进行复杂查询</li>\\n</ul>","autoDesc":true}');export{e as data};
