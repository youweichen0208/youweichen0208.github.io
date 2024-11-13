const n=JSON.parse('{"key":"v-5933ddeb","path":"/data-structure/binary-search.html","title":"Binary Search","lang":"en-US","frontmatter":{"icon":"pen-to-square","author":"Youwei Chen","date":"2023-12-26T00:00:00.000Z","category":["data structure"],"tag":["Java","Algorithm","Binary Search"],"description":"Binary Search What is Binary search Binary search is a search algorithm that runs in O(log n) in the worst case, where n is the size of the search space. Normally, binary search is done on an array of sorted elements. Binary Search code template: public int fn(int[] arr, int target) { int left = 0; int right = arr.length - 1; while (left &lt;= right) { int mid = left + (right - left) / 2; if (arr[mid] == target) { // do something return mid; } if (arr[mid] &gt; target) { right = mid - 1; } else { left = mid + 1; } } // left is the insertion point return left; }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/data-structure/binary-search.html"}],["meta",{"property":"og:site_name","content":"YC Tech Blog"}],["meta",{"property":"og:title","content":"Binary Search"}],["meta",{"property":"og:description","content":"Binary Search What is Binary search Binary search is a search algorithm that runs in O(log n) in the worst case, where n is the size of the search space. Normally, binary search is done on an array of sorted elements. Binary Search code template: public int fn(int[] arr, int target) { int left = 0; int right = arr.length - 1; while (left &lt;= right) { int mid = left + (right - left) / 2; if (arr[mid] == target) { // do something return mid; } if (arr[mid] &gt; target) { right = mid - 1; } else { left = mid + 1; } } // left is the insertion point return left; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-26T22:11:24.000Z"}],["meta",{"property":"article:author","content":"Youwei Chen"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Algorithm"}],["meta",{"property":"article:tag","content":"Binary Search"}],["meta",{"property":"article:published_time","content":"2023-12-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-26T22:11:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Binary Search\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-26T22:11:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Youwei Chen\\"}]}"]]},"headers":[{"level":2,"title":"What is Binary search","slug":"what-is-binary-search","link":"#what-is-binary-search","children":[]},{"level":2,"title":"Binary Search code template:","slug":"binary-search-code-template","link":"#binary-search-code-template","children":[]}],"git":{"createdTime":1703628684000,"updatedTime":1703628684000,"contributors":[{"name":"youweichen0208","email":"youweichen0208@gmail.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"data-structure/binary-search.md","localizedDate":"December 26, 2023","excerpt":"<h1> Binary Search</h1>\\n<h2> What is Binary search</h2>\\n<p>Binary search is a search algorithm that runs in O(log n) in the worst case, where n is the size of the search space. Normally, binary search is done on an array of sorted elements.</p>\\n<h2> Binary Search code template:</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> arr<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> left <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> right <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">&lt;=</span> right<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> mid <span class=\\"token operator\\">=</span> left <span class=\\"token operator\\">+</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">-</span> left<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">// do something</span>\\n            <span class=\\"token keyword\\">return</span> mid<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>mid<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            right <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n            left <span class=\\"token operator\\">=</span> mid <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// left is the insertion point</span>\\n    <span class=\\"token keyword\\">return</span> left<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};