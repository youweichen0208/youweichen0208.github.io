import{_ as e,o as a,c as i,e as t}from"./app-BFCujlOX.js";const n="/assets/images/simplified-ddd-image.png",o="/assets/images/domain-driven-design-microservice.png",s="/assets/images/ordering-microservice-container.png",r="/assets/images/vs-solution-explorer-order-aggregate.png",d="/assets/images/value-object-within-aggregate.png",c={},l=t('<h1 id="ddd-domain-driven-design" tabindex="-1"><a class="header-anchor" href="#ddd-domain-driven-design" aria-hidden="true">#</a> DDD(Domain Driven Design)</h1><h2 id="cqrs-command-query-responsibility-segregation" tabindex="-1"><a class="header-anchor" href="#cqrs-command-query-responsibility-segregation" aria-hidden="true">#</a> CQRS(command query responsibility segregation)</h2><p>The fundamental idea is that we should divide an object&#39;s methods into two sharply separated categories:</p><ol><li><code>Queries</code>: return a result and do not change the observable state of the system(are free of side effects).</li><li><code>Commands</code>: change the state of a system but do not return a value.</li></ol><h3 id="why-separating-methods-that-change-state-modifiers-commands-from-those-that-don-t-queries-is-so-valuable-in-practice" tabindex="-1"><a class="header-anchor" href="#why-separating-methods-that-change-state-modifiers-commands-from-those-that-don-t-queries-is-so-valuable-in-practice" aria-hidden="true">#</a> why separating methods that change state (modifiers/commands) from those that don&#39;t (queries) is so valuable in practice:</h3><ol><li><code>Predictability and Debugging</code>:</li></ol><ul><li>Query methods are &quot;safe&quot; - we can call them multiple times or in any order without side effects.</li><li>If something goes wrong, we know how to focus on the modifier methods first, since queries can&#39;t be the cause of state-related bugs.</li></ul><ol start="2"><li><code>Testing and Maintenance</code>:</li></ol><ul><li>Queries are easier to test since we just need to verify return values.</li><li>Modifiers require testing state changes and potential side effects.</li></ul><ol start="3"><li><code>Parallelization and Caching</code>:</li></ol><ul><li>Query results can be safely cached.</li><li>Multiple queries can run in parallel without lock coordination.</li><li>Modifiers need careful synchronization to avoid race conditions.</li></ul><ol start="4"><li><code>Database Separation</code>: <ol><li>Commands(Modifiers) on the Main Database: <ul><li>Modifiers are responsible for changing the state of the system, such as creating, updating, or deleting records in the database. Since these operations can affect the integrity and consistency of the data, they need to be directed to the main database where the data is authoritative and can be modified.</li><li>By ensuring that <code>commands</code> always go to the master database, we can maintain consistency and ensure the state is updated correctly. Thisalso allows proper handling of transactions, which is often required for modifying data.</li></ul></li><li>Queries on Read Replicas: <ul><li><code>Queries</code> on the other hand <code>only read data</code> without modifying it. These operations can be safely executed on read replicas because they don&#39;t change the data&#39;s state. Since replicas are usually eventually consistent, they can serve read requests without the risk of disrupting data consistency.</li><li>Using replcias for queries offloads work from the main database, allowing it to focus on write-heavy operations. This improves <code>performance</code>, <code>scalability</code>, and <code>availability</code>.</li></ul></li><li>Consistency and Data Integrity: <ul><li>When <code>modifiers</code> are directed to the <code>main database</code>, we ensure that write operations are consistent and properly synchronized, and that <code>transactional integrity</code> is maintained.</li><li>On the other hand, queries are less critical in terms of consistency, since they do not affect the data, and read replicas can serve slightly outdated data, without compromising overall system reliability.</li></ul></li></ol></li></ol><h2 id="applying-simplified-cqrs-and-ddd-patterns-in-a-microservice" tabindex="-1"><a class="header-anchor" href="#applying-simplified-cqrs-and-ddd-patterns-in-a-microservice" aria-hidden="true">#</a> Applying simplified CQRS and DDD patterns in a microservice</h2><p>The separation aspect of CQRS is achieved by grouping query operations in one layer and commands in another layer. Each layer has its own data model. Each layer has its own data model(note that we say model, not necessarily a different database) and is built using its own combination of patterns and technologies. More importantly, the two layers can be within the same tier or microservice. Or they can be optimized and scaled out separately without affecting one another.</p><figure><img src="'+n+'" alt="Simplified CQRS and DDD microservice" tabindex="0" loading="lazy"><figcaption>Simplified CQRS and DDD microservice</figcaption></figure><p>The important design aspect here is that the microservice has split the queries and ViewModels(data models especially created for the client applications) from the commands, domain model, and transactions following the CQRS pattern.</p><h2 id="design-a-ddd-oriented-microservice" tabindex="-1"><a class="header-anchor" href="#design-a-ddd-oriented-microservice" aria-hidden="true">#</a> Design a DDD-oriented microservice</h2><p>DDD descibes independent problem areas as Bounded Contexts(each Bounded Context correlates to a microservice). Where to draw the boundaries is the key task when designing and refining a microservice. DDD patterns help us understand the complexity in the domain. For the domain model for each Bounded Context, we identify and define the entities, value objects, and aggregates that model our domain. We build a domain model that is contained within a boundary that defines our context.</p><p>Determing where to place boundaries between Bounded Contexts balances two competing goals. Our services should handle all responsibilities related to our domain internally. But we should also ensure that communication between different bounded contexts is kept to a minimum. Too many cross-service communication introduces <code>complexity</code>, <code>latency</code>, and <code>failture risks</code>.</p><figure><img src="'+o+'" alt="Layers in a Domain-Driven Design Microservice" tabindex="0" loading="lazy"><figcaption>Layers in a Domain-Driven Design Microservice</figcaption></figure><p>Each layer is a VS project. Application layer is Ordering.API, Domain layer is Ordering.Domain and the Infrastructure layer is Ordering.Infrastructure.</p><h2 id="design-a-microservice-domain-model" tabindex="-1"><a class="header-anchor" href="#design-a-microservice-domain-model" aria-hidden="true">#</a> Design a microservice domain model</h2><h3 id="domain-model-structure-in-a-custom-net-standard-library" tabindex="-1"><a class="header-anchor" href="#domain-model-structure-in-a-custom-net-standard-library" aria-hidden="true">#</a> Domain model structure in a custom .NET Standard Library</h3><figure><img src="'+s+'" alt="Ordering Microservice Domain Model" tabindex="0" loading="lazy"><figcaption>Ordering Microservice Domain Model</figcaption></figure><p>As we can see, in the domain model, there are two aggregates: the order aggregate and the buyer aggregate. Each aggregate is a group of domain entities and value objects, although we could have an aggregate compsoed of a single domain entity(the aggregate root or root entity).</p><h3 id="structure-aggregates-in-a-custom-net-standard-library" tabindex="-1"><a class="header-anchor" href="#structure-aggregates-in-a-custom-net-standard-library" aria-hidden="true">#</a> Structure aggregates in a custom .NET Standard library</h3><p>An aggregate refers to a cluster of domain objects grouped together to match transactional consistency. Those objects could be instances of entities. Transactional consistency means that an aggregate is guaranteed to be consistent and up to date at the end of a business action. <img src="'+r+'" alt="Order Aggregate" loading="lazy"></p><h3 id="value-object-within-aggregate" tabindex="-1"><a class="header-anchor" href="#value-object-within-aggregate" aria-hidden="true">#</a> Value Object within Aggregate</h3><figure><img src="'+d+'" alt="Value Object within Aggregate" tabindex="0" loading="lazy"><figcaption>Value Object within Aggregate</figcaption></figure><p>As we can see, the attribute <code>address</code> is simply a complex-value composed of country/region, street, city, etc., and has no identity in this domain, must be modeled and treated as a value object.</p><h4 id="important-characteristics-of-value-objects" tabindex="-1"><a class="header-anchor" href="#important-characteristics-of-value-objects" aria-hidden="true">#</a> Important Characteristics of Value Objects:</h4><ul><li>They have no identity.</li><li>They are immutable.</li></ul><p>The values of a value object <code>MUST BE</code> immutable once the object is created. Therefore, when the object is created, we must provide the required values, but we must not allow them to change during the object&#39;s lifetime.</p><p>Value objects allow us to perform certain tricks for performance. This is especially true in systems where there may be thousands of value object instances, many of which have the same values. Their immutable nature allows them to be reused; they can be interchangeable objects, since their values are the same and they have no identity. This type of optimization can sometimes make a difference between software that runs slowly and software with good performance.</p><h2 id="domain-events" tabindex="-1"><a class="header-anchor" href="#domain-events" aria-hidden="true">#</a> Domain events</h2><ol><li><code>Purpose</code>: Domain events represent something meaningful that happened within our domain/business logic(e.g., &quot;OrderPlaced&quot;, &quot;PaymentReceived&quot;)</li><li><code>Scope</code>: Usually handled within the same bounded context or application</li><li><code>Timing</code>: Typically synchronous and immediate within the application</li><li><code>State</code>: Immutable, representing a fact that happened at a specific point in time.</li><li><code>Usage</code>: Often used for maintaining consistency within a bounded context and updateing different parts of our application.</li></ol>',36),h=[l];function m(u,g){return a(),i("div",null,h)}const f=e(c,[["render",m],["__file","ddd.html.vue"]]);export{f as default};
