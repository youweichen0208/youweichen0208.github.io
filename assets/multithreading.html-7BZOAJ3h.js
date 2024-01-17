const e=JSON.parse(`{"key":"v-c2af8746","path":"/interview-prep/multithreading.html","title":"Multi-threading","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2023-01-16T00:00:00.000Z","category":["interview"],"tag":["Java","Interview","Multi-threading"],"description":"Multi-threading Multitasking Process-based multitasking Allows processes (i.e programs) to run concurrently on the computer.For example, you might have a web browser, a word processor, and a music player running at the same time. Each of these applications is a separate process, and they are all running concurrently, each in its own memory space. The operating system manages these processes, scheduling CPU time for each one and switching between them quickly enough that it appears to the user that they are all running simultaneously.","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/interview-prep/multithreading.html"}],["meta",{"property":"og:site_name","content":"YC Tech Blog"}],["meta",{"property":"og:title","content":"Multi-threading"}],["meta",{"property":"og:description","content":"Multi-threading Multitasking Process-based multitasking Allows processes (i.e programs) to run concurrently on the computer.For example, you might have a web browser, a word processor, and a music player running at the same time. Each of these applications is a separate process, and they are all running concurrently, each in its own memory space. The operating system manages these processes, scheduling CPU time for each one and switching between them quickly enough that it appears to the user that they are all running simultaneously."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T05:45:38.000Z"}],["meta",{"property":"article:author","content":"Youwei Chen"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Interview"}],["meta",{"property":"article:tag","content":"Multi-threading"}],["meta",{"property":"article:published_time","content":"2023-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T05:45:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Multi-threading\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-17T05:45:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Youwei Chen\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Multitasking","slug":"multitasking","link":"#multitasking","children":[{"level":3,"title":"Process-based multitasking","slug":"process-based-multitasking","link":"#process-based-multitasking","children":[]},{"level":3,"title":"Thread-based multitasking","slug":"thread-based-multitasking","link":"#thread-based-multitasking","children":[]},{"level":3,"title":"Threads vs Process:","slug":"threads-vs-process","link":"#threads-vs-process","children":[]}]},{"level":2,"title":"Threads:","slug":"threads","link":"#threads","children":[{"level":3,"title":"User Thread:","slug":"user-thread","link":"#user-thread","children":[]},{"level":3,"title":"Daemon Threads:","slug":"daemon-threads","link":"#daemon-threads","children":[]}]},{"level":2,"title":"The Main Thread:","slug":"the-main-thread","link":"#the-main-thread","children":[]},{"level":2,"title":"Thread Creation:","slug":"thread-creation","link":"#thread-creation","children":[{"level":3,"title":"Extending the Thread class","slug":"extending-the-thread-class","link":"#extending-the-thread-class","children":[]},{"level":3,"title":"Implementing the Runnable Interface","slug":"implementing-the-runnable-interface","link":"#implementing-the-runnable-interface","children":[]}]},{"level":2,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":2,"title":"What are the wait() and sleep() methods?","slug":"what-are-the-wait-and-sleep-methods","link":"#what-are-the-wait-and-sleep-methods","children":[{"level":3,"title":"wait()","slug":"wait","link":"#wait","children":[]},{"level":3,"title":"sleep()","slug":"sleep","link":"#sleep","children":[]}]},{"level":2,"title":"What's the difference between notify() and notifyAll()?","slug":"what-s-the-difference-between-notify-and-notifyall","link":"#what-s-the-difference-between-notify-and-notifyall","children":[{"level":3,"title":"notify():","slug":"notify","link":"#notify","children":[]},{"level":3,"title":"notifyAll():","slug":"notifyall","link":"#notifyall","children":[]}]},{"level":2,"title":"What is Thread Pool?","slug":"what-is-thread-pool","link":"#what-is-thread-pool","children":[]},{"level":2,"title":"What is deadlock and when it can occur?","slug":"what-is-deadlock-and-when-it-can-occur","link":"#what-is-deadlock-and-when-it-can-occur","children":[]},{"level":2,"title":"Explain volatile variables in Java?","slug":"explain-volatile-variables-in-java","link":"#explain-volatile-variables-in-java","children":[]},{"level":2,"title":"What is the synchronization process? why use it?","slug":"what-is-the-synchronization-process-why-use-it","link":"#what-is-the-synchronization-process-why-use-it","children":[{"level":3,"title":"Synchronized method:","slug":"synchronized-method","link":"#synchronized-method","children":[]},{"level":3,"title":"Synchronized Block:","slug":"synchronized-block","link":"#synchronized-block","children":[]}]}],"git":{"createdTime":1705470338000,"updatedTime":1705470338000,"contributors":[{"name":"Youwei Chen","email":"youweichen0208@gmail.com","commits":1}]},"readingTime":{"minutes":4.67,"words":1402},"filePathRelative":"interview-prep/multithreading.md","localizedDate":"January 16, 2023","excerpt":"<h1> Multi-threading</h1>\\n<h2> Multitasking</h2>\\n<h3> Process-based multitasking</h3>\\n<p>Allows processes (i.e programs) to run concurrently on the computer.For example, you might have a web browser, a word processor, and a music player running at the same time. Each of these applications is a separate process, and they are all running concurrently, each in its own memory space. The operating system manages these processes, scheduling CPU time for each one and switching between them quickly enough that it appears to the user that they are all running simultaneously.</p>","autoDesc":true}`);export{e as data};
