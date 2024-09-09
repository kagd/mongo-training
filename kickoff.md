# Mongo Certification Kickoff

## Introduction

David Dusacker - presenter

https://learn.mongodb.com/catalog

Can do any of the paths, C# would probably be the best for work. Do NodeJS if you have time.

# The Mongo Document Model

## BSON Data Types

20 types - https://bsonspec.org/spec.html

## Documents are flexible.

Can have different fields in each document.

You can have validation rules on the document.

\$lookup - join two collections

## Data Governance

You need to update the JSON schema to add validation rules.

- Example: prevent an update from deleting a field.

There isn't an overhead for having this sort of governance.

## Documents are intuitive

Data that is used together is stored together.

## Document sizes

Start to talk about refactoring the document model when the file size starts to be a couple of hundred KB (uncompressed).

The document is compresssed on disk, in memory it is uncompressed.

## MQL - Mongo Query Language

## Indexes

Custoered indexes - data lives next to the index - Time series data

2 others

## Aggregation Framework

\$match -> \$group

sorting or group are blocking stages

**Aggregations are distict stages**. The first one flows to the second, to the thrid, etc.

Order of operations is important. Can determine performance.

There are ways to determine efficiency in the queries.

## Command line

Mongo Shell is the new shell. - mongo is deprecated.

## MongoDB Compass

An interactive GUI to explore, query, and maanage MongoDB data.

Can help you build a complex query. Good for beginners.

## VS Code extension

It's available.

## Availability = Replica Sets

Primary and secondaries.

- Secondary can be read from.
- 3 Nodes needed as minimum. Primary and 2 secondaries.
- Replica sets can be across regions.

## Sharding

Partitioning data across multiple servers.

The driver connection is to Mongo S - this is the routing service.

Sharding can happen at the collection level.

## CSFLE - Client side field level encryption

Encrypt data before it goes to the database.

- you can encrypt the entire document or just a field.
- So unless you have the keys, you can't see the data, even if you have access to the database.

## Queryable encryption.

Available in v7. Wasn't possible in older versions.

This does have overhead, so CSFLE may be better for certain use cases.

## Best practices for performance

- Data model and indexing
- Examine query patterns and profiling
- Memory usage
- Monitor replication and sharding (Sharding key)
- Workload isolation

Generally around 4TB is when you start to think about sharding.

## Data modeling and indexing

Follow ESR rule
