import{_ as s,o as n,c as e,e as a}from"./app-UPe_jAkp.js";const t={},o=a(`<h1 id="linq" tabindex="-1"><a class="header-anchor" href="#linq" aria-hidden="true">#</a> LINQ</h1><h2 id="what-is-linq" tabindex="-1"><a class="header-anchor" href="#what-is-linq" aria-hidden="true">#</a> What is LINQ?</h2><p>LINQ (Language-Integrated Query) is a set of features in the .NET framework that provides a standardized way of querying data from different types of data sources. The LINQ provides a consistent query experience to query objects (LINQ to objects), relational databases (LINQ to SQL), and XML (LINQ to XML).</p><p>LINQ is a uniform query syntax in C# and VB.NET to retrieve data from different sources and formats.</p><p>LINQ queries return results as objects. It enables us to use object-oriented approach on the result set and not to worry about transforming different formats of results into objects.</p><h2 id="why-linq" tabindex="-1"><a class="header-anchor" href="#why-linq" aria-hidden="true">#</a> Why LINQ?</h2><ol><li><p><strong>Consistency</strong>: LINQ provides a consistent way to query various types of data sources, such as collections, XML, databases, etc. We can use the same LINQ syntax and methods to query different data sources, which makes our code more consistent and easier to understand.</p></li><li><p><strong>Intellisense and Compile-time Checking</strong>: Because LINQ is integrated into C#, we get benefits like intellisense and compile-time error checking. This can help us write correct code quickly and catch errors earlier in the development process.</p></li><li><p><strong>Readability</strong>: LINQ queries can often be more readable than traditional loops and conditional statements.</p></li><li><p><strong>Producticity</strong>: LINQ can help us write complex queries and data transformations with less code.</p></li><li><p><strong>Flexibility</strong>: LINQ provides a lot of flexibility for querying and manipulating data. We can filter, sort, group, transform, and aggregate data in many ways with LINQ&#39;s standard query operators.</p></li></ol><h2 id="linq-query-syntax" tabindex="-1"><a class="header-anchor" href="#linq-query-syntax" aria-hidden="true">#</a> LINQ Query Syntax:</h2><p>Query syntax in LINQ provides a declaretive and SQL-like way of expressive queries. It allows us to query collections and other data sources using a syntax that resembles SQL queries. The query syntax is useful when dealing with complex queries involving multiple conditions, joins, and projections.</p><h3 id="basic-structure" tabindex="-1"><a class="header-anchor" href="#basic-structure" aria-hidden="true">#</a> Basic Structure:</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">from</span> variable <span class="token keyword">in</span> collection
             <span class="token punctuation">[</span><span class="token keyword">where</span> <span class="token class-name">condition</span><span class="token punctuation">]</span>
             <span class="token punctuation">[</span><span class="token keyword">orderby</span> property<span class="token punctuation">]</span>
             <span class="token keyword">select</span> projection<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>from</code> clause: specifies the range variable (often referred to as the iteration variable) and the data source.</p></li><li><p><code>where</code> clause: Optional. Specifies one or more conditions that the elements must satisfy. It filters the data source based on the specified criteria.</p></li><li><p><code>orderby</code> clause: Optional. Specifies the sorting order for the elements in the result set. We can order by one or more properties in ascending or descending order.</p></li><li><p><code>select</code> clause: Specifies the projection, i.e., what should be included in the result set. It defines the shape of the output.</p></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example:</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span> students <span class="token operator">=</span> <span class="token function">GetStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Assume a list of Student objects</span>

<span class="token class-name"><span class="token keyword">var</span></span> query <span class="token operator">=</span> <span class="token keyword">from</span> student <span class="token keyword">in</span> students
            <span class="token keyword">where</span> <span class="token class-name">student</span><span class="token punctuation">.</span>Marks <span class="token operator">&gt;</span> <span class="token number">80</span>
            <span class="token keyword">orderby</span> student<span class="token punctuation">.</span>LastName
            <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> student<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> student<span class="token punctuation">.</span>LastName <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> result <span class="token keyword">in</span> query<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">result<span class="token punctuation">.</span>FirstName</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">result<span class="token punctuation">.</span>LastName</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>students</code> is the data source</li><li><code>from student in students</code> establishes the range variable (<code>student</code>) and the data source (<code>students</code>).</li><li><code>select new { student.FirstName, student.LastName }</code> defines the projection, creating an anonymous type with first and last names.</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> query <span class="token operator">=</span> <span class="token keyword">from</span> student <span class="token keyword">in</span> students
            <span class="token keyword">join</span> course <span class="token keyword">in</span> courses <span class="token keyword">on</span> student<span class="token punctuation">.</span>CourseId equals course<span class="token punctuation">.</span>Id
            <span class="token keyword">where</span> <span class="token class-name">student</span><span class="token punctuation">.</span>Marks <span class="token operator">&gt;</span> <span class="token number">80</span>
            <span class="token keyword">orderby</span> student<span class="token punctuation">.</span>LastName
            <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> student<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> student<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span> course<span class="token punctuation">.</span>CourseName <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this case, the <code>join</code> clause is used to combine data from two collections based on a specified key (<code>CourseId</code> and <code>Id</code> in this example).</p><h2 id="linq-method-syntax" tabindex="-1"><a class="header-anchor" href="#linq-method-syntax" aria-hidden="true">#</a> LINQ Method Syntax:</h2><p>Method syntax is more concise and may be preferable in certain situations, especially for simpler queries or when working with developers more familiar with method chaining.</p><h3 id="basic-structure-1" tabindex="-1"><a class="header-anchor" href="#basic-structure-1" aria-hidden="true">#</a> Basic structure</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> collection
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> condition<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> property<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> projection<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Where</code> method: filters the elements based on a specified condition.</li><li><code>OrderBy</code> method: sorts the elements in ascending order based on a specified property. We can also use <code>OrderByDescending</code> for descending order.</li><li><code>Select</code> method: specifies the projection, defining what should be included in the result set.</li></ul>`,22),i=[o];function c(r,p){return n(),e("div",null,i)}const d=s(t,[["render",c],["__file","linq.html.vue"]]);export{d as default};
