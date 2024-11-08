const e=JSON.parse('{"key":"v-03666504","path":"/data-structure/sliding-window.html","title":"Sliding Window","lang":"en-US","frontmatter":{"icon":"pen-to-square","author":"Youwei Chen","date":"2023-12-10T00:00:00.000Z","category":["data structure"],"tag":["Java","Algorithm","Sliding Window"],"description":"Sliding Window 1. When should we use sliding window? the problem will either explicitly or implicitly define criteria that make a subarray \\"valid\\": constraint metric: asking for attributes of a subarray. It could be the sum, the number of unique elements, the frequency of a specific element, or any other attribute. a numeric restriction on the constraint metric. This is what the constraint metric should be for a subarray to be considered valid. the problem will ask you to find valid subarrays in some way. the most common task you will see is finding the best valid subarray. The problem will define what makes a subarray better than another. For example, a problem might ask you to find the longest valid subarray. another common task is finding the number of valid subarrays.","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/data-structure/sliding-window.html"}],["meta",{"property":"og:site_name","content":"YC Tech Blog"}],["meta",{"property":"og:title","content":"Sliding Window"}],["meta",{"property":"og:description","content":"Sliding Window 1. When should we use sliding window? the problem will either explicitly or implicitly define criteria that make a subarray \\"valid\\": constraint metric: asking for attributes of a subarray. It could be the sum, the number of unique elements, the frequency of a specific element, or any other attribute. a numeric restriction on the constraint metric. This is what the constraint metric should be for a subarray to be considered valid. the problem will ask you to find valid subarrays in some way. the most common task you will see is finding the best valid subarray. The problem will define what makes a subarray better than another. For example, a problem might ask you to find the longest valid subarray. another common task is finding the number of valid subarrays."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-11T20:22:59.000Z"}],["meta",{"property":"article:author","content":"Youwei Chen"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Algorithm"}],["meta",{"property":"article:tag","content":"Sliding Window"}],["meta",{"property":"article:published_time","content":"2023-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-11T20:22:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sliding Window\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-11T20:22:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Youwei Chen\\"}]}"]]},"headers":[{"level":3,"title":"1. When should we use sliding window?","slug":"_1-when-should-we-use-sliding-window","link":"#_1-when-should-we-use-sliding-window","children":[]},{"level":3,"title":"2. pseudocode for a general template:","slug":"_2-pseudocode-for-a-general-template","link":"#_2-pseudocode-for-a-general-template","children":[]},{"level":3,"title":"3. Time Complexity:","slug":"_3-time-complexity","link":"#_3-time-complexity","children":[]},{"level":3,"title":"4. Related techniques we can use in sliding window:","slug":"_4-related-techniques-we-can-use-in-sliding-window","link":"#_4-related-techniques-we-can-use-in-sliding-window","children":[]}],"git":{"createdTime":1702323376000,"updatedTime":1705004579000,"contributors":[{"name":"youweichen0208","email":"youweichen0208@gmail.com","commits":6},{"name":"Youwei Chen","email":"youweichen0208@gmail.com","commits":2}]},"readingTime":{"minutes":1.72,"words":517},"filePathRelative":"data-structure/sliding-window.md","localizedDate":"December 10, 2023","excerpt":"<h1> Sliding Window</h1>\\n<h3> 1. When should we use sliding window?</h3>\\n<ol>\\n<li>the problem will either explicitly or implicitly define criteria that make a subarray \\"valid\\":\\n<ol>\\n<li>constraint metric: asking for attributes of a subarray. It could be the sum, the number of unique elements, the frequency of a specific element, or any other attribute.</li>\\n<li>a numeric restriction on the constraint metric. This is what the constraint metric should be for a subarray to be considered valid.</li>\\n</ol>\\n</li>\\n<li>the problem will ask you to find valid subarrays in some way.\\n<ol>\\n<li>the most common task you will see is finding the best valid subarray. The problem will define what makes a subarray better than another. For example, a problem might ask you to find the longest valid subarray.</li>\\n<li>another common task is finding the number of valid subarrays.</li>\\n</ol>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};