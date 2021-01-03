from ariadne import QueryType, MutationType, load_schema_from_path, make_executable_schema
from wishlist.resolvers import get_items, new_item, delete_item, update_item


types = [
    load_schema_from_path('api/schema.graphql'),
    load_schema_from_path('wishlist/schema.graphql'),
]


query = QueryType()
query.set_field('allItems', get_items)


mutation = MutationType()
mutation.set_field('newItem', new_item)
mutation.set_field('deleteItem', delete_item)
mutation.set_field('updateItem', update_item)


schema = make_executable_schema(types, query, mutation)
