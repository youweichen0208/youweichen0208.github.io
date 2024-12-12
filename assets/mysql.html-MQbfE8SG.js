import{_ as a,o as e,c as n,e as s}from"./app-aY9FUwWX.js";const i={},l=s(`<h1 id="mysql-interview-questions" tabindex="-1"><a class="header-anchor" href="#mysql-interview-questions" aria-hidden="true">#</a> MySQL interview questions:</h1><h2 id="什么是主键和外健" tabindex="-1"><a class="header-anchor" href="#什么是主键和外健" aria-hidden="true">#</a> 什么是主键和外健</h2><ul><li>主键：主键是一个表中用来唯一标识每一条记录的列。主键的值必须是唯一的，不能为 null。</li><li>外健：外健是一个表中的一列， 用于建立与另一个表的关联关系。外健列的值可以是 null，但在非空情况下，它的值必须在被关联表的主键中存在。</li></ul><h3 id="主键与外健的关系" tabindex="-1"><a class="header-anchor" href="#主键与外健的关系" aria-hidden="true">#</a> 主键与外健的关系：</h3><ul><li>主键是外健的参照： 外健通常指向另一个表的主键，形成主从关系。在一个表中作为外健的列值必须在另一个表中作为主键的列中存在。</li><li>建立关联： 通过外健，能够在不同表之间建立逻辑关联，方便进行复杂查询</li></ul><h2 id="mysql-分页语法" tabindex="-1"><a class="header-anchor" href="#mysql-分页语法" aria-hidden="true">#</a> MySQL 分页语法：</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在所有的查询结果中，返回前5行记录。</span>
<span class="token keyword">SELECT</span> prod_name <span class="token keyword">FROM</span> products <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">-- 在所有的查询结果中，从第5行开始，返回5行记录。</span>
<span class="token keyword">SELECT</span> prod_name <span class="token keyword">FROM</span> products <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化-limit-分页" tabindex="-1"><a class="header-anchor" href="#优化-limit-分页" aria-hidden="true">#</a> 优化 limit 分页</h3><ol><li>索引覆盖扫描：</li></ol><ul><li>定义： 索引覆盖扫描是指查询中的所有字段都包含在索引中，因此可以直接从索引中获取所需数据，而无需回表查找。</li><li>实现方式：创建一个索引覆盖，确保查询所需的所有列都在索引中</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_employee_covering <span class="token keyword">ON</span> employees <span class="token punctuation">(</span>hire_date<span class="token punctuation">,</span> id<span class="token punctuation">,</span> first_name<span class="token punctuation">,</span> last_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> first_name<span class="token punctuation">,</span> last_name
<span class="token keyword">FROM</span> employees
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> hire_date
<span class="token keyword">LIMIT</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>延迟关联</li><li>将 limit 查询转换成已知位置 where 查询</li></ol><h2 id="表跟表是怎么关联的" tabindex="-1"><a class="header-anchor" href="#表跟表是怎么关联的" aria-hidden="true">#</a> 表跟表是怎么关联的？</h2><p>表与表之间常用的关联方式有两种：内连接， 外连接。</p><h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h3><p>内连接通过<code>INNER JOIN</code>来实现，它将返回两张表中满足连接条件的数据，不满足条件的数据不会查询出来。</p><h3 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h3><p>外连接通过<code>OUTER JOIN</code>来实现， 它将返回两张表中满足条件的数据，同时返回不满足连接条件的数据。外连接有两种形式：左外连接(LEFT OUTER JOIN)， 右外连接 (RIGHT OUTER JOIN).</p><ul><li><p>左外连接：它会返回左表中的所有记录和右表中满足连接条件的记录。</p></li><li><p>右外连接： 它会返回右表中的所有记录和左表中满足连接条件的记录。</p></li><li><p>一对多关联： 这种关联形式最为常见，一般是两张表具有主从关系，并且以主表的逐渐关联从表的外间来实现这种关联关系。</p></li><li><p>多对多关联： 这种关联关系比较复杂，如果两张表具有多对多关系，那么他们之间需要一张中间表来作为衔接，以实现这种关联关系。这种表要设计两列，分别存储那两张表的主键。因此，两张表的任何一方，都与中间表形成了一对多关系，从而在中间表建立起了多对多关系。</p></li><li><p>自关联： 自关联就是一张表自己与自己相关联。</p></li></ul><h2 id="sql-注入的原理" tabindex="-1"><a class="header-anchor" href="#sql-注入的原理" aria-hidden="true">#</a> SQL 注入的原理</h2><p>SQL 注入是一种常见的安全漏洞，它允许攻击者通过向应用程序的输入字段插入恶意的 SQL 代码，从而在数据库中执行未授权的操作。</p><h2 id="where-和-having-有什么区别" tabindex="-1"><a class="header-anchor" href="#where-和-having-有什么区别" aria-hidden="true">#</a> WHERE 和 HAVING 有什么区别？</h2><p>WHERE 是一个约束声明， 使用 WHERE 约束来自数据库的数据，WHERE 是在结果返回之前起作用的，WHERE 中不能使用聚合函数。</p><p>HAVING 用于在<code>SELECT</code>语句中结合<code>GROUP BY</code>语句使用，用于筛选分组后的记录。HAVING 应用于聚合函数之后，用于过滤聚合后的结果集。</p><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><h3 id="谈谈你对-mysql-索引的理解" tabindex="-1"><a class="header-anchor" href="#谈谈你对-mysql-索引的理解" aria-hidden="true">#</a> 谈谈你对 MySQL 索引的理解</h3><p>索引是一个单独的，存储在磁盘上的数据结构，包含着对数据表里所有记录的引用指针。 使用索引可以快速找出在某个列中有一特定值的行，所有 MySQL 列类型都可以被索引。</p><p>索引是在存储引擎中实现的，因此，每种存储引擎的索引都不一定完全相同。MySQL 中索引的存储类型有两种，即 BTREE 和 HASH,具体和表的存储引擎相关。</p><h3 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型：</h3><ol><li>普通索引和唯一索引</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建普通索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_name <span class="token keyword">on</span> table_name <span class="token punctuation">(</span>col_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建唯一索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> idx_name <span class="token keyword">ON</span> table_name <span class="token punctuation">(</span>col_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>单列索引和组合索引</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建单列索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_employee_id <span class="token keyword">ON</span> employees <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建组合索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_employee_name_dept <span class="token keyword">ON</span> employees <span class="token punctuation">(</span>last_name<span class="token punctuation">,</span> department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>全文索引 全文索引用于提高对文本内容进行搜索效率，特别是对于大段文字的查询。</p></li><li><p>空间索引 空间索引用于加速对地理空间数据的查询，特别是几何类型的数据，比如点，线，多边形等。空间索引常用的索引类型是<code>R-Tree</code>.</p></li></ol><h3 id="mysql-怎么判断要不要加索引" tabindex="-1"><a class="header-anchor" href="#mysql-怎么判断要不要加索引" aria-hidden="true">#</a> MySQL 怎么判断要不要加索引？</h3><ol><li>表的大小和数据增长</li><li>事务类型：如果表的读操作远多于写操作，添加索引是有益的，因为读取操作的性能会显著提高。</li></ol><h3 id="索引是越多越好吗" tabindex="-1"><a class="header-anchor" href="#索引是越多越好吗" aria-hidden="true">#</a> 索引是越多越好吗？</h3><p>索引并非越多越好，一个表中如有大量的索引，不仅占用磁盘空间，还会影响 INSERT, DELETE, UPDATE 语句的性能，因为在表中的数据更改时，索引也会进行调整和更新。</p><h3 id="有哪些情况不适合创建索引" tabindex="-1"><a class="header-anchor" href="#有哪些情况不适合创建索引" aria-hidden="true">#</a> 有哪些情况不适合创建索引？</h3><ol><li>频繁更新的字段不适合创建索引</li><li>where 条件中用不到的字段不适合建立索引</li><li>数据比较少的表不需要建索引</li><li>数据重复且分布比较均匀的字段不适合建立索引， 例如性别，真假值</li><li>参与计算的列不适合建索引</li></ol><h3 id="如何判断数据库索引有没有生效" tabindex="-1"><a class="header-anchor" href="#如何判断数据库索引有没有生效" aria-hidden="true">#</a> 如何判断数据库索引有没有生效？</h3><p>可以使用<code>EXPLAIN</code>语句查看索引是否正在使用</p><p>example:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">EXPLAIN</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> book <span class="token keyword">WHERE</span> year_publication<span class="token operator">=</span><span class="token number">1990</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最左前缀原则" tabindex="-1"><a class="header-anchor" href="#最左前缀原则" aria-hidden="true">#</a> 最左前缀原则</h3><p>最左前缀原则是 MySQL 索引规则中的一个重要概念，特别是针对联合索引。它意味着在使用联合索引时，MySQL 只能从索引的最左边开始匹配字段，顺序是非常重要的。索引从最左边的字段开始逐步使用，不能跳过某个字段直接使用后面的字段。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_a_b <span class="token keyword">on</span> my_table<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个索引是按<code>(a,b)</code>的顺序来组织数据的，先对<code>a</code>排序，然后在<code>a</code>相同的情况下对<code>b</code>进行排序。 因此，最左前缀规则意味着：</p><ul><li>如果查询条件中有<code>a</code>, MySQL 可以使用索引</li><li>如果查询条件中有<code>a</code>和<code>b</code>，MySQL 仍然可以使用索引。</li><li>但如果查询条件中只涉及<code>b</code>而没有<code>a</code>, MySQL 无法使用这个联合索引， 因为它不能跳过<code>a</code>直接使用<code>b</code>。</li></ul><h3 id="说一说索引的实现原理" tabindex="-1"><a class="header-anchor" href="#说一说索引的实现原理" aria-hidden="true">#</a> 说一说索引的实现原理</h3><p>在 MySQL 中，索引时在存储引擎层实现的， 不同存储引擎对索引的实现方式是不同的。InnoDB 是作为 MySQL 的主要的存储引擎并且使用 B+树作为索引结构，在 InnoDB 中，表数据文件本身就是按 B+树组织的一个索引结构，这颗树的叶节点 data 保存了完整的数据记录（聚集索引）。这个索引 key 时数据表的主键，因此 InnoDB 表数据文件本身就是主索引。</p><h3 id="介绍一下数据库索引的重构过程" tabindex="-1"><a class="header-anchor" href="#介绍一下数据库索引的重构过程" aria-hidden="true">#</a> 介绍一下数据库索引的重构过程</h3><h5 id="什么时候需要重建索引呢" tabindex="-1"><a class="header-anchor" href="#什么时候需要重建索引呢" aria-hidden="true">#</a> 什么时候需要重建索引呢？</h5><p>标上频繁发生 update， delete 操作</p><h3 id="mysql索引为什么用b-树" tabindex="-1"><a class="header-anchor" href="#mysql索引为什么用b-树" aria-hidden="true">#</a> MySQL索引为什么用B+树？</h3><p>B+树由B树和索引顺序访问方法演化而来，它是一个平衡查找树。在B+树中，所有记录节点都是按照键值的大小顺序存放在同一层的叶子节点，各叶子节点通过指针进行连接。在数据库中，B+树的高度一般都在2-4层，这意味着查找某一键值最多只需要2到4次IO操作。</p><h3 id="联合索引的存储结构是什么-它的有效方式是什么" tabindex="-1"><a class="header-anchor" href="#联合索引的存储结构是什么-它的有效方式是什么" aria-hidden="true">#</a> 联合索引的存储结构是什么，它的有效方式是什么？</h3><p>联合索引还是一颗B+树，不同的是联合索引的键值数量不是1，而是大于等于2。另外，只有在查询条件中使用了这些字段的左边字段时，索引才会被使用，所以使用联合索引时遵循最左前缀集合。</p><h3 id="mysql的hash索引和b树索引有什么区别" tabindex="-1"><a class="header-anchor" href="#mysql的hash索引和b树索引有什么区别" aria-hidden="true">#</a> MySQL的Hash索引和B树索引有什么区别？</h3><ul><li>hash索引进行等值查询更快，但是无法进行范围查询。因为在hash索引中经过hash函数建立索引之后，索引的顺序与原顺序无法保持一致，不能支持范围查询。</li><li>hash索引不支持使用索引进行排序</li><li>hash索引不支持模糊查询以及索引的最左前缀匹配</li></ul><h2 id="聚簇索引和辅助-非聚簇-索引有什么区别" tabindex="-1"><a class="header-anchor" href="#聚簇索引和辅助-非聚簇-索引有什么区别" aria-hidden="true">#</a> 聚簇索引和辅助(非聚簇)索引有什么区别？</h2><p>聚簇索引等叶子节点存放了表中的所有记录。辅助索引索引是根据索引键创建的一颗B+树，与聚簇索引不同的是，其叶子节点仅存放索引键值，以及该索引键值指向的主键。</p><h3 id="什么是联合索引" tabindex="-1"><a class="header-anchor" href="#什么是联合索引" aria-hidden="true">#</a> 什么是联合索引？</h3><p>联合索引是指对表上多个列进行索引。</p><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><h3 id="事务的四个特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的四个特性-acid" aria-hidden="true">#</a> 事务的四个特性(ACID):</h3><ul><li>A (atomicity): 原子性，原子性指整个数据库事务是不可分割的工作单位。只有使食物中的所有的数据库操作都执行成功，整个事务的执行才算成功。</li><li>C (consistency)：一致性，一致性指数据库在事务执行前后都必须保持一致的状态并且必须满足所有定义的约束。</li><li>I (isolation): 隔离性，事务的隔离性要求每个读写事务的对象和其他事物的操作对象能相互分离，即该事务提交前对其他事务都不可见，这通常用锁来实现</li><li>D (durability)： 持久性。事务一旦提交，其结果就是永久性的，即使发生宕机等故障，数据库也能将数据库恢复。</li></ul><h3 id="事务可分为以下几种类型" tabindex="-1"><a class="header-anchor" href="#事务可分为以下几种类型" aria-hidden="true">#</a> 事务可分为以下几种类型：</h3><ul><li><p>扁平事务：在扁平事务中，所有的操作都处于同一层次，其由begin work开始，由commit work或rollback work结束。处于之间的操作是原子的，要么都执行，要么都回滚。。</p></li><li><p>链事务：在一个事务结束时，系统会自动启动一个新事务，而不是让开发人员手动提交并启动下一个事务。换句话说，每次提交事务后，会直接进入下一个事务的处理过程。这种机制确保了数据处理的连续性，使得多个事务看起来像一个长事务，但每个事务都是独立提交的。</p><ul><li>释放不需要的数据对象：当某个事务提交时，系统会释放当前事务中已经不再需要的锁定资源或数据对象。</li><li>上一个事务结果对下一个事务可见</li><li>提交和开始事务的原子性</li></ul></li><li><p>嵌套事务：有一个层次结构框架。有一个顶层事务(top-level transaction)控制着各个层次的事务。</p></li><li><p>分布式事务： 分布式事务设计多个数据库或系统，在不同的数据库节点上执行部分操作。</p></li></ul><h3 id="并发情况下-读操作可能存在3类问题" tabindex="-1"><a class="header-anchor" href="#并发情况下-读操作可能存在3类问题" aria-hidden="true">#</a> 并发情况下，读操作可能存在3类问题：</h3><ol><li>脏读： 当前事务(A)中可以读到其他事务(B)未提交的数据(脏数据)，这种现象是脏读</li><li>不可重复读：在事务A中先后两次读取同一个数据，两次读取的结果不一样，这种现象称为不可重复读。脏读与不可重复读的区别在于：前者读到的是其他事务未提交的数据，后者读到的是其他事务已提交的数据。</li><li>幻读：在事务A中按照某个条件先后两次查询数据库，两次查询结果的条数不同，这种现象称为幻读。不可重复读与幻读的区别可以通俗理解为：前者是数据变了，后者是数据的行数变了。</li></ol><h3 id="mysql-4种隔离级别" tabindex="-1"><a class="header-anchor" href="#mysql-4种隔离级别" aria-hidden="true">#</a> MySQL 4种隔离级别：</h3><ol><li>读未提交(Read Uncommitted)：</li><li>读已提交(Read Committed):</li><li>可重复读(Repeatable Read):事务在开始时</li><li>串行化(Serializable): 串行化是最高级别的隔离级别，它通过强制事务顺序执行来避免所有并发问题。在这种隔离级别下，事务必须按顺序执行，彼此之间不能并发。</li></ol>`,73),d=[l];function o(r,t){return e(),n("div",null,d)}const p=a(i,[["render",o],["__file","mysql.html.vue"]]);export{p as default};