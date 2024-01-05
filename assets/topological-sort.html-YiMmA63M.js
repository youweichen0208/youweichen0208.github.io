import{_ as n,o as s,c as a,e as t}from"./app-oqUKl6-m.js";const e="/assets/images/DAG.png",o={},p=t('<h1 id="topological-sort" tabindex="-1"><a class="header-anchor" href="#topological-sort" aria-hidden="true">#</a> Topological Sort</h1><h2 id="directed-acyclic-graphs-dags" tabindex="-1"><a class="header-anchor" href="#directed-acyclic-graphs-dags" aria-hidden="true">#</a> Directed Acyclic Graphs (DAGs)</h2><p>Directed Acyclic Graphs, or DAGs, are a type of graph that is directed, meaning the edges have a direction, and acyclic, meaning it doesn&#39;t contain any cycles.</p><figure><img src="'+e+`" alt="DAG" tabindex="0" loading="lazy"><figcaption>DAG</figcaption></figure><h2 id="what-is-topological-sort" tabindex="-1"><a class="header-anchor" href="#what-is-topological-sort" aria-hidden="true">#</a> What is topological sort</h2><p>Topological Sort is an algorithm used on DAG to produce a linear ordering of its vertices such that for every directed edge UV from vertex U to vertex V, U comes before V in the ordering.</p><h2 id="cycle-detection-with-topological-sort" tabindex="-1"><a class="header-anchor" href="#cycle-detection-with-topological-sort" aria-hidden="true">#</a> Cycle Detection with Topological Sort</h2><p>Topological sort can also be used to detect cycles in a graph. If a graph contains a cycle, it cannot be topologically sorted. When we attempt to perform a topological sort on a graph with a cycle, we&#39;ll end up with some vertices that we can&#39;t visit because they depend on themselves either directly or indirectly. This property can be used as a way to detect cycles in a graph.</p><h2 id="performing-topological-sort-using-kahn-s-algorithm" tabindex="-1"><a class="header-anchor" href="#performing-topological-sort-using-kahn-s-algorithm" aria-hidden="true">#</a> Performing Topological Sort using Kahn&#39;s Algorithm</h2><p>Kahn&#39;s algorithm is a popular method to perform topological sorting on a DAG. The algorithm works by choosing vertices in the same order as the eventual topological sort. Here are the steps:</p><ol><li>Find a list of &quot;start vertices&quot; which have no incoming edges and insert them into a set S; at least one such node must exist in a non-empty acyclic graph.</li><li>While S is non-empty, do the following: a. Remove a node n from S. b. Add n to tail of the topological sort list. c. For each node m with an edge e from n to m, remove edge e from the graph. If m has no other incoming edges then insert m into S.</li><li>If graph has edges, then graph has at least one cycle. If graph has no edges, then the algorithm has completed successfully.</li></ol><p>The topological sorting is the vertices in the order they were added to the topological sort list.</p><h2 id="code-template-for-topological-sort" tabindex="-1"><a class="header-anchor" href="#code-template-for-topological-sort" aria-hidden="true">#</a> Code template for topological sort</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token keyword">void</span> <span class="token function">topologicalSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> indegree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>vertices<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vertices<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> adj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> node <span class="token operator">:</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                indegree<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vertices<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>indegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> node <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>node <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> adj<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> adjNode <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>indegree<span class="token punctuation">[</span>adjNode<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>adjNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>Time Complexity: O(V + E)</strong></p><p>The time complexity of the topological sort algorithm is O(V+E), where V is the number of vertices and E is the number of edges in the graph. This is because every vertex and every edge will be explored in the algorithm. The algorithm will visit each vertex once when it&#39;s added to the queue and each edge once when it&#39;s removed from the graph.</p></li><li><p><strong>Space Complexity: O(V + E)</strong></p><p>The space complexity of the topological sort algorithm is also O(V+E), where v is the number of vertices and E is the number of edges in the graph.</p></li></ul>`,15),c=[p];function i(l,r){return s(),a("div",null,c)}const d=n(o,[["render",i],["__file","topological-sort.html.vue"]]);export{d as default};
