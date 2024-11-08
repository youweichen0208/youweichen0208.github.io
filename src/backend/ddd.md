---
icon: pen-to-square
date: 2024-11-08
category:
  - backend
tag:
  - C#
  - DDD
---

# DDD(Domain Driven Design)
## CQRS(command query responsibility segregation)
The fundamental idea is that we should divide an object's methods into two sharply separated categories:
1. `Queries`: return a result and do not change the observable state of the system(are free of side effects).
2. `Commands`: change the state of a system but do not return a value.

### why separating methods that change state (modifiers/commands) from those that don't (queries) is so valuable in practice:
1. `Predictability and Debugging`:
- Query methods are "safe" - we can call them multiple times or in any order without side effects.
- If something goes wrong, we know how to focus on the modifier methods first, since queries can't be the cause of state-related bugs.

2. `Testing and Maintenance`:
- Queries are easier to test since we just need to verify return values.
- Modifiers require testing state changes and potential side effects.

3. `Parallelization and Caching`:
- Query results can be safely cached.
- Multiple queries can run in parallel without lock coordination.
- Modifiers need careful synchronization to avoid race conditions.

4. `Database Separation`:
    1. Commands(Modifiers) on the Main Database:
        - Modifiers are responsible for changing the state of the system, such as creating, updating, or deleting records in the database. Since these operations can affect the integrity and consistency of the data, they need to be directed to the main database where the data is authoritative and can be modified.
        - By ensuring that `commands` always go to the master database, we can maintain consistency and ensure the state is updated correctly. Thisalso allows proper handling of transactions, which is often required for modifying data.
    2. Queries on Read Replicas:
        - `Queries` on the other hand `only read data` without modifying it. These operations can be safely executed on read replicas because they don't change the data's state. Since replicas are usually eventually consistent, they can serve read requests without the risk of disrupting data consistency.
        - Using replcias for queries offloads work from the main database, allowing it to focus on write-heavy operations. This improves `performance`, `scalability`, and `availability`.
    3. Consistency and Data Integrity:
        - When `modifiers` are directed to the `main database`, we ensure that write operations are consistent and properly synchronized, and that `transactional integrity` is maintained.
        - On the other hand, queries are less critical in terms of consistency, since they do not affect the data, and read replicas can serve slightly outdated data, without compromising overall system reliability.
    

## Applying simplified CQRS and DDD patterns in a microservice
The separation aspect of CQRS is achieved by grouping query operations in one layer and commands in another layer. Each layer has its own data model. Each layer has its own data model(note that we say model, not necessarily a different database) and is built using its own combination of patterns and technologies. More importantly, the two layers can be within the same tier or microservice. Or they can be optimized and scaled out separately without affecting one another.

![Simplified CQRS and DDD microservice](/assets/images/simplified-ddd-image.png)

The important design aspect here is that the microservice has split the queries and ViewModels(data models especially created for the client applications) from the commands, domain model, and transactions following the CQRS pattern.

## Design a DDD-oriented microservice
DDD descibes independent problem areas as Bounded Contexts(each Bounded Context correlates to a microservice). Where to draw the  boundaries is the key task when designing and refining a microservice. DDD patterns help us understand the complexity in the domain. For the domain model for each Bounded Context, we identify and define the entities, value objects, and aggregates that model our domain. We build a domain model that is contained within a boundary that defines our context.

Determing where to place boundaries between Bounded Contexts balances two competing goals. Our services should handle all responsibilities related to our domain internally. But we should also ensure that communication between different bounded contexts is kept to a minimum. Too many cross-service communication introduces `complexity`, `latency`, and `failture risks`.

![Layers in a Domain-Driven Design Microservice](/assets/images/domain-driven-design-microservice.png)


Each layer is a VS project. Application layer is Ordering.API, Domain layer is Ordering.Domain and the Infrastructure layer is Ordering.Infrastructure.

## Design a microservice domain model
