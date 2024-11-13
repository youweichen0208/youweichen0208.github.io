import{_ as n,o as s,c as a,e}from"./app-zyqUNJI3.js";const t="/assets/images/dfs.jpg",o={},i=e(`<h1 id="binary-trees-depth-first-search-dfs" tabindex="-1"><a class="header-anchor" href="#binary-trees-depth-first-search-dfs" aria-hidden="true">#</a> Binary trees - Depth-first search (DFS)</h1><h2 id="template-code" tabindex="-1"><a class="header-anchor" href="#template-code" aria-hidden="true">#</a> template code:</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// do logic</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>ans</strong> is the final answer or the answer at the each step.</li></ul><h2 id="illustration" tabindex="-1"><a class="header-anchor" href="#illustration" aria-hidden="true">#</a> Illustration:</h2><figure><img src="`+t+`" alt="DFS graph" tabindex="0" loading="lazy"><figcaption>DFS graph</figcaption></figure><ul><li><p><strong>Inorder Traversal:</strong> Traverse the left subtree first, then visit the root, and finally traverse the right subtree. For binary search trees, this will give nodes in ascending order.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inorderDfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">inorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">inorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Preorder Traversal:</strong> Visit the root first, then traverse the left subtree, and finally the right subtree.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preorderDfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">preorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">preorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Postorder Traversal:</strong> Traverse the left subtree first, then the right subtree, and finally visit the root.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postorderDfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">postorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">postorderDfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity" aria-hidden="true">#</a> Time Complexity:</h3><p>The time complexity of DFS is O(N), where N is the number of nodes in the tree. This is because DFS visits each node exactly once.</p><h3 id="space-complexity" tabindex="-1"><a class="header-anchor" href="#space-complexity" aria-hidden="true">#</a> Space Complexity:</h3><p>The space complexity of DFS is O(H), where H is the height of the tree. This is because in the worst-case scenario, the maximum amount of space is used when the algorithm needs to store information for traversing all the way down to the leaf node along a single branch, which corresponds to the height of the tree.</p><h2 id="what-is-the-difference-between-binary-tree-and-binary-search-tree" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-binary-tree-and-binary-search-tree" aria-hidden="true">#</a> What is the difference between binary tree and binary search tree?</h2><ul><li><strong>Binary Tree</strong>: In a binary tree, there are no restrictions on the value of the nodes. The left child and right child of a node do not have specific order.</li><li><strong>Binary Search Tree</strong>: In a BST, for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater than the node. This property applies to each node in the tree, not just the root, and makes searching for a value very efficient.</li></ul><h2 id="related-techniques-in-dfs" tabindex="-1"><a class="header-anchor" href="#related-techniques-in-dfs" aria-hidden="true">#</a> Related techniques in dfs:</h2><ul><li>we can use inorder traversal to find the kth smallest element in the binary search tree(BST). In BST, inorder traversal will start from the smallest element in the tree, and go to 2nd smallest,...</li></ul>`,15),p=[i];function c(l,r){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","dfs.html.vue"]]);export{d as default};